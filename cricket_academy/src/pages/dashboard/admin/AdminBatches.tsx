import React, { useEffect, useState } from 'react';
import { Calendar, Users, Clock, Edit, Trash, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { api } from '../../../services/api';
import { Modal } from '../../../components/ui/Modal';
import { Button } from '../../../components/ui/Button';

export const AdminBatches = () => {
  const [batches, setBatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', time: '', coach: '', capacity: 20 });

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    setLoading(true);
    const data = await api.admin.getBatches();
    setBatches(data);
    setLoading(false);
  };

  const handleOpenModal = (batch: any = null) => {
    if (batch) {
      setEditingId(batch.id);
      setFormData({ name: batch.name, time: batch.time, coach: batch.coach, capacity: batch.capacity });
    } else {
      setEditingId(null);
      setFormData({ name: '', time: '', coach: '', capacity: 20 });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const updated = await api.admin.updateBatch(editingId, formData);
      setBatches(batches.map(b => b.id === editingId ? updated : b));
    } else {
      const created = await api.admin.createBatch(formData);
      setBatches([...batches, created]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Delete this batch?')) {
      await api.admin.deleteBatch(id);
      setBatches(batches.filter(b => b.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Batch Management</h1>
        <Button onClick={() => handleOpenModal()} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Batch
        </Button>
      </div>

      {loading && !isModalOpen ? (
        <div className="text-center py-12 text-slate-500">Loading batches...</div>
      ) : (
        <div className="grid gap-4">
          {batches.map((batch, i) => (
            <motion.div
              key={batch.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center group"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{batch.name}</h3>
                <div className="flex items-center text-sm text-slate-500 space-x-4">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {batch.time}</span>
                  <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {batch.coach}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="flex-1 md:w-48">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Capacity</span>
                    <span className="font-bold">{batch.students || 0}/{batch.capacity}</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${((batch.students || 0) / batch.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleOpenModal(batch)} className="p-2 border border-slate-200 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(batch.id)} className="p-2 border border-red-200 dark:border-red-900/30 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500">
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingId ? "Edit Batch" : "Create Batch"}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Batch Name</label>
            <input 
              type="text" required
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Timing</label>
            <input 
              type="text" required placeholder="e.g. 06:00 AM - 08:00 AM"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Coach</label>
              <input 
                type="text" required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                value={formData.coach}
                onChange={(e) => setFormData({...formData, coach: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Capacity</label>
              <input 
                type="number" required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                value={formData.capacity}
                onChange={(e) => setFormData({...formData, capacity: parseInt(e.target.value)})}
              />
            </div>
          </div>
          <Button type="submit" className="w-full mt-4">Save Batch</Button>
        </form>
      </Modal>
    </div>
  );
};

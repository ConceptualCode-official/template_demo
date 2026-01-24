import React, { useState } from 'react';
import { Mail, Phone, Edit, Trash, Plus, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { Modal } from '../../../components/ui/Modal';
import { Button } from '../../../components/ui/Button';

export const AdminCoaches = () => {
  const [coaches, setCoaches] = useState([
    { id: 1, name: 'Vikram Rathour', role: 'Head Coach', spec: 'Batting', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
    { id: 2, name: 'Brett Lee', role: 'Senior Coach', spec: 'Bowling', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
    { id: 3, name: 'Sarah Taylor', role: 'Assistant Coach', spec: 'Wicket Keeping', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', role: '', spec: '', img: '' });

  const handleOpenModal = (coach: any = null) => {
    if (coach) {
      setEditingId(coach.id);
      setFormData({ ...coach });
    } else {
      setEditingId(null);
      setFormData({ name: '', role: '', spec: '', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setCoaches(coaches.map(c => c.id === editingId ? { ...formData, id: editingId } : c));
    } else {
      setCoaches([...coaches, { ...formData, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Delete this coach profile?')) {
      setCoaches(coaches.filter(c => c.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Coaches Management</h1>
        <Button onClick={() => handleOpenModal()} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Coach
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((coach, i) => (
          <motion.div
            key={coach.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden group"
          >
            <div className="relative">
              <div className="flex p-6 items-center space-x-4">
                <img src={coach.img} alt={coach.name} className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 dark:border-slate-700" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{coach.name}</h3>
                  <p className="text-sm text-primary dark:text-blue-400">{coach.role}</p>
                  <p className="text-xs text-slate-500">{coach.spec}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <button onClick={() => handleOpenModal(coach)} className="p-1.5 bg-white dark:bg-slate-700 rounded-full shadow-sm hover:text-primary"><Edit className="w-4 h-4" /></button>
                <button onClick={() => handleDelete(coach.id)} className="p-1.5 bg-white dark:bg-slate-700 rounded-full shadow-sm hover:text-red-500"><Trash className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-3 flex justify-between border-t border-slate-100 dark:border-slate-700">
              <button className="text-slate-500 hover:text-primary"><Mail className="w-5 h-5" /></button>
              <button className="text-slate-500 hover:text-primary"><Phone className="w-5 h-5" /></button>
              <button className="text-sm text-primary font-medium hover:underline">View Profile</button>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingId ? "Edit Coach" : "Add New Coach"}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-dashed border-slate-300 relative">
              {formData.img ? (
                <img src={formData.img} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <Camera className="w-8 h-8 text-slate-400" />
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <input 
              type="text" required
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role</label>
            <input 
              type="text" required
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Specialization</label>
            <input 
              type="text" required
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              value={formData.spec}
              onChange={(e) => setFormData({...formData, spec: e.target.value})}
            />
          </div>
          <Button type="submit" className="w-full mt-4">Save Coach</Button>
        </form>
      </Modal>
    </div>
  );
};

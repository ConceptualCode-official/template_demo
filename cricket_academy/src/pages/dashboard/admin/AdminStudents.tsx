import React, { useState, useEffect } from 'react';
import { Search, Filter, Edit, Trash, Plus, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { api } from '../../../services/api';
import { Modal } from '../../../components/ui/Modal';
import { Button } from '../../../components/ui/Button';

export const AdminStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', batch: 'Batch A', age: '', status: 'Active', fees: 'Pending' });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    const data = await api.admin.getStudents();
    setStudents(data);
    setLoading(false);
  };

  const handleOpenModal = (student: any = null) => {
    if (student) {
      setEditingStudent(student);
      setFormData({ 
        name: student.name, 
        batch: student.batch, 
        age: student.age.toString(), 
        status: student.status, 
        fees: student.fees 
      });
    } else {
      setEditingStudent(null);
      setFormData({ name: '', batch: 'Batch A', age: '', status: 'Active', fees: 'Pending' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (editingStudent) {
      const updated = await api.admin.updateStudent(editingStudent.id, formData);
      setStudents(students.map(s => s.id === editingStudent.id ? updated : s));
    } else {
      const created = await api.admin.createStudent(formData);
      setStudents([...students, created]);
    }
    
    setLoading(false);
    setIsModalOpen(false);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to remove this student?')) {
      await api.admin.deleteStudent(id);
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const filteredStudents = students.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Student Management</h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={() => handleOpenModal()} className="flex items-center gap-2 whitespace-nowrap">
            <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Add Student</span>
          </Button>
        </div>
      </div>

      {loading && !isModalOpen ? (
        <div className="p-8 text-center text-slate-500">Loading student records...</div>
      ) : (
        <>
          {/* Mobile View: Cards */}
          <div className="md:hidden grid gap-4">
            {filteredStudents.map((student, i) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{student.name}</h3>
                      <p className="text-xs text-slate-500">{student.batch} • Age {student.age}</p>
                    </div>
                  </div>
                  <button onClick={() => handleOpenModal(student)} className="text-primary text-sm font-medium">Edit</button>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {student.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      student.fees === 'Paid' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {student.fees}
                    </span>
                  </div>
                  <button onClick={() => handleDelete(student.id)} className="text-red-500 p-2"><Trash className="w-4 h-4" /></button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop View: Table */}
          <div className="hidden md:block bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <tr>
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Name</th>
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Batch</th>
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Age</th>
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Status</th>
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Fees</th>
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStudents.map((student, i) => (
                  <motion.tr 
                    key={student.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="p-4 font-medium text-slate-900 dark:text-white">{student.name}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">{student.batch}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">{student.age}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        student.fees === 'Paid' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {student.fees}
                      </span>
                    </td>
                    <td className="p-4 flex gap-2">
                      <button onClick={() => handleOpenModal(student)} className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(student.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash className="w-4 h-4" /></button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingStudent ? "Edit Student" : "Add New Student"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Age</label>
              <input 
                type="number" 
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Batch</label>
              <select 
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                value={formData.batch}
                onChange={(e) => setFormData({...formData, batch: e.target.value})}
              >
                <option value="Batch A">Batch A</option>
                <option value="Batch B">Batch B</option>
                <option value="Batch C">Batch C</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
              <select 
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Fees</label>
              <select 
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                value={formData.fees}
                onChange={(e) => setFormData({...formData, fees: e.target.value})}
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
          </div>
          <div className="pt-4">
            <Button type="submit" className="w-full">
              {editingStudent ? 'Update Student' : 'Add Student'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

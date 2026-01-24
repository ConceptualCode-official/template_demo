import React from 'react';
import { Download, CheckCircle, Clock, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export const StudentPayments = () => {
  const invoices = [
    { id: 'INV-2023-001', date: 'Oct 01, 2023', desc: 'Monthly Tuition - Oct', amount: '$90.00', status: 'Paid' },
    { id: 'INV-2023-002', date: 'Sep 01, 2023', desc: 'Monthly Tuition - Sep', amount: '$90.00', status: 'Paid' },
    { id: 'INV-2023-003', date: 'Aug 15, 2023', desc: 'Uniform Kit', amount: '$150.00', status: 'Paid' },
    { id: 'INV-2023-004', date: 'Nov 01, 2023', desc: 'Monthly Tuition - Nov', amount: '$90.00', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Fee Payments</h1>
      
      {/* Mobile View: Cards */}
      <div className="md:hidden space-y-4">
        {invoices.map((inv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <CreditCard className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{inv.desc}</h3>
                  <p className="text-xs text-slate-500">{inv.date}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {inv.status}
              </span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-700">
              <span className="text-lg font-bold text-slate-900 dark:text-white">{inv.amount}</span>
              {inv.status === 'Pending' ? (
                <button className="text-sm bg-primary text-white px-4 py-2 rounded-lg">Pay Now</button>
              ) : (
                <button className="text-sm text-slate-500 flex items-center"><Download className="w-4 h-4 mr-1" /> Invoice</button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop View: Table */}
      <div className="hidden md:block bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
            <tr>
              <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Invoice ID</th>
              <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Date</th>
              <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Description</th>
              <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Amount</th>
              <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Status</th>
              <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {invoices.map((inv, i) => (
              <motion.tr 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="p-4 font-mono text-sm text-slate-500">{inv.id}</td>
                <td className="p-4 text-slate-800 dark:text-slate-200">{inv.date}</td>
                <td className="p-4 text-slate-800 dark:text-slate-200">{inv.desc}</td>
                <td className="p-4 font-bold text-slate-800 dark:text-white">{inv.amount}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    inv.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {inv.status === 'Paid' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                    {inv.status}
                  </span>
                </td>
                <td className="p-4">
                  {inv.status === 'Pending' ? (
                    <button className="text-sm text-white bg-primary px-3 py-1 rounded hover:bg-primary-light">Pay Now</button>
                  ) : (
                    <button className="text-slate-400 hover:text-primary"><Download className="w-4 h-4" /></button>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

import React from 'react';
import { FileText, Download } from 'lucide-react';

export const AdminReports = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Reports Center</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: 'Monthly Attendance Report', desc: 'Detailed attendance logs for all batches.', date: 'Generated: Oct 01, 2023' },
          { title: 'Fee Collection Statement', desc: 'Financial summary of collected and pending fees.', date: 'Generated: Oct 01, 2023' },
          { title: 'Student Performance Analysis', desc: 'Aggregated performance metrics for U-19 batch.', date: 'Generated: Sep 28, 2023' },
          { title: 'Coach Activity Log', desc: 'Session hours and activity tracking for staff.', date: 'Generated: Sep 30, 2023' },
        ].map((report, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex justify-between items-start">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <FileText className="w-6 h-6 text-primary dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{report.title}</h3>
                <p className="text-sm text-slate-500 mb-2">{report.desc}</p>
                <p className="text-xs text-slate-400">{report.date}</p>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

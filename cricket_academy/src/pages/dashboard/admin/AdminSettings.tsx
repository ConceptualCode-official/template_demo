import React from 'react';
import { Save } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const AdminSettings = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">System Settings</h1>
      
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 space-y-8">
        {/* General */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">General Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Academy Name</label>
              <input type="text" defaultValue="Elite Cricket Academy" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Contact Email</label>
              <input type="email" defaultValue="admin@elitecricket.com" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">Notifications</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary rounded" />
              <span className="text-slate-700 dark:text-slate-300">Email alerts for new admissions</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary rounded" />
              <span className="text-slate-700 dark:text-slate-300">SMS alerts for fee payments</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-4 h-4 text-primary rounded" />
              <span className="text-slate-700 dark:text-slate-300">Weekly report summary</span>
            </label>
          </div>
        </div>

        <div className="pt-4">
          <Button>
            <Save className="w-4 h-4 mr-2" /> Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

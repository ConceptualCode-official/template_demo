import React from 'react';
import ReactECharts from 'echarts-for-react';
import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp, UserPlus } from 'lucide-react';

export const AdminOverview = () => {
  const revenueOption = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisLine: { lineStyle: { color: '#94a3b8' } }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#94a3b8' } },
      splitLine: { lineStyle: { color: '#e2e8f0', type: 'dashed' } }
    },
    series: [
      {
        name: 'Revenue',
        type: 'line',
        smooth: true,
        lineStyle: { width: 3, color: '#003366' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{ offset: 0, color: 'rgba(0, 51, 102, 0.3)' }, { offset: 1, color: 'rgba(0, 51, 102, 0)' }]
          }
        },
        data: [12000, 13200, 10100, 13400, 19000, 23000, 21000]
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Admin Dashboard</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
          + New Admission
        </button>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Students', value: '524', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Monthly Revenue', value: '$24,500', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Active Batches', value: '12', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'New Enquiries', value: '45', icon: UserPlus, color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</h3>
              </div>
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold mb-6 text-slate-800 dark:text-white">Revenue Growth</h3>
          <ReactECharts option={revenueOption} style={{ height: '350px' }} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Recent Activities</h3>
          <div className="space-y-4">
            {[
              { text: 'New student registration: Amit K.', time: '2 mins ago', type: 'success' },
              { text: 'Batch A attendance marked', time: '1 hour ago', type: 'info' },
              { text: 'Fee payment received: $150', time: '3 hours ago', type: 'success' },
              { text: 'Coach meeting scheduled', time: '5 hours ago', type: 'warning' },
            ].map((activity, i) => (
              <div key={i} className="flex items-start pb-4 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                <div className={`w-2 h-2 mt-2 rounded-full mr-3 shrink-0 ${
                  activity.type === 'success' ? 'bg-green-500' : 
                  activity.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                }`} />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{activity.text}</p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

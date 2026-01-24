import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import { api } from '../../../services/api';

export const AdminFinance = () => {
  const [financeData, setFinanceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFinance = async () => {
      setLoading(true);
      const data = await api.admin.getFinance();
      setFinanceData(data);
      setLoading(false);
    };
    loadFinance();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-slate-500">Loading financial data...</div>;
  }

  const chartOption = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['Revenue', 'Expenses'] },
    xAxis: { data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { type: 'value' },
    series: [
      { name: 'Revenue', type: 'bar', data: financeData?.revenue || [], itemStyle: { color: '#003366' } },
      { name: 'Expenses', type: 'bar', data: financeData?.expenses || [], itemStyle: { color: '#ef4444' } }
    ]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Financial Overview</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm">Total Revenue (YTD)</span>
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">{financeData?.summary.ytd}</div>
          <div className="text-sm text-green-500 mt-1 flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +12% vs last year</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm">Pending Fees</span>
            <AlertCircle className="w-5 h-5 text-orange-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">{financeData?.summary.pending}</div>
          <div className="text-sm text-orange-500 mt-1">15 students overdue</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm">Net Profit</span>
            <DollarSign className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">{financeData?.summary.profit}</div>
          <div className="text-sm text-slate-500 mt-1">Margin: 40%</div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-6 text-slate-800 dark:text-white">Revenue vs Expenses</h3>
        <ReactECharts option={chartOption} style={{ height: '400px' }} />
      </div>
    </div>
  );
};

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { motion } from 'framer-motion';

export const StudentPerformance = () => {
  const battingStats = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['Runs', 'Strike Rate'], bottom: 0 },
    xAxis: { data: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5'] },
    yAxis: [
      { type: 'value', name: 'Runs' },
      { type: 'value', name: 'SR', min: 0, max: 200 }
    ],
    series: [
      { name: 'Runs', type: 'bar', data: [45, 12, 78, 34, 56], itemStyle: { color: '#003366' } },
      { name: 'Strike Rate', type: 'line', yAxisIndex: 1, data: [120, 85, 145, 110, 130], itemStyle: { color: '#fbbf24' } }
    ]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Performance Analytics</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Batting Progression</h3>
          <ReactECharts option={battingStats} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Recent Scores</h3>
          <div className="space-y-4">
            {[
              { match: 'vs City Club', score: '56 (42)', result: 'Won', date: 'Oct 20' },
              { match: 'vs Spartans', score: '34 (28)', result: 'Lost', date: 'Oct 15' },
              { match: 'vs United XI', score: '78* (55)', result: 'Won', date: 'Oct 10' },
              { match: 'vs Royals', score: '12 (10)', result: 'Won', date: 'Oct 05' },
            ].map((match, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">{match.match}</p>
                  <p className="text-xs text-slate-500">{match.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-primary dark:text-blue-400">{match.score}</p>
                  <p className={`text-xs font-bold ${match.result === 'Won' ? 'text-green-600' : 'text-red-600'}`}>{match.result}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

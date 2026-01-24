import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Activity, Award } from 'lucide-react';
import { api } from '../../../services/api';

// Icon mapping for dynamic rendering
const iconMap: any = {
  TrendingUp, Calendar, Activity, Award
};

export const StudentOverview = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any[]>([]);
  const [performance, setPerformance] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [statsData, perfData] = await Promise.all([
          api.student.getStats(),
          api.student.getPerformance()
        ]);
        setStats(statsData);
        setPerformance(perfData);
      } catch (e) {
        console.error("Error loading dashboard", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <div className="flex h-96 items-center justify-center text-slate-400">Loading Dashboard Data...</div>;
  }

  const performanceOption = {
    tooltip: { trigger: 'axis' },
    radar: {
      indicator: [
        { name: 'Batting', max: 100 },
        { name: 'Bowling', max: 100 },
        { name: 'Fielding', max: 100 },
        { name: 'Fitness', max: 100 },
        { name: 'Discipline', max: 100 },
        { name: 'Tactics', max: 100 }
      ],
      shape: 'circle',
      splitArea: {
        areaStyle: {
          color: ['rgba(59, 130, 246, 0.1)', 'rgba(59, 130, 246, 0.2)', 'rgba(59, 130, 246, 0.4)', 'rgba(59, 130, 246, 0.6)', 'rgba(59, 130, 246, 0.8)'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      }
    },
    series: [
      {
        name: 'Skills Assessment',
        type: 'radar',
        data: [
          {
            value: performance?.radar || [],
            name: 'Current Stats',
            itemStyle: { color: '#003366' },
            areaStyle: { opacity: 0.3 }
          }
        ]
      }
    ]
  };

  const attendanceOption = {
    tooltip: { trigger: 'item' },
    series: [
      {
        name: 'Attendance',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: { show: false, position: 'center' },
        emphasis: {
          label: { show: true, fontSize: '20', fontWeight: 'bold' }
        },
        data: performance?.attendance || []
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Student Dashboard</h1>
        <span className="text-sm text-slate-500">Data Source: {loading ? 'Fetching...' : 'System'}</span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = iconMap[stat.icon] || Activity;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center"
            >
              <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10 mr-4`}>
                <Icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <div>
                <p className="text-sm text-slate-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Performance Analysis</h3>
          <ReactECharts option={performanceOption} style={{ height: '350px' }} />
        </motion.div>

        {/* Attendance & Upcoming */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Attendance Overview</h3>
            <ReactECharts option={attendanceOption} style={{ height: '200px' }} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-primary text-white p-6 rounded-xl shadow-lg shadow-primary/20"
          >
            <h3 className="text-lg font-bold mb-2">Next Session</h3>
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 mr-2 opacity-80" />
              <span>Tomorrow, 04:00 PM</span>
            </div>
            <p className="text-sm opacity-90 mb-4">Advanced Batting Drills with Coach Ravi at Net 3.</p>
            <button className="w-full py-2 bg-white text-primary rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
              View Schedule
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

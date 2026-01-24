import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const StudentSchedule = () => {
  const schedule = [
    { day: 'Monday', date: 'Oct 23', time: '04:00 PM - 06:00 PM', activity: 'Net Practice', coach: 'Vikram R.', loc: 'Indoor Nets', type: 'practice' },
    { day: 'Tuesday', date: 'Oct 24', time: '06:00 AM - 08:00 AM', activity: 'Fitness & Conditioning', coach: 'Sarah J.', loc: 'Gym', type: 'fitness' },
    { day: 'Wednesday', date: 'Oct 25', time: '04:00 PM - 07:00 PM', activity: 'Practice Match', coach: 'All Staff', loc: 'Main Ground', type: 'match' },
    { day: 'Thursday', date: 'Oct 26', time: '04:00 PM - 06:00 PM', activity: 'Batting Drills', coach: 'Mike H.', loc: 'Net 3', type: 'practice' },
    { day: 'Friday', date: 'Oct 27', time: '05:00 PM - 06:00 PM', activity: 'Video Analysis', coach: 'Analyst Team', loc: 'AV Room', type: 'theory' },
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'match': return 'bg-red-100 text-red-700 border-red-200';
      case 'fitness': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'theory': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Weekly Schedule</h1>
      
      <div className="grid gap-4">
        {schedule.map((session, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between group hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start md:items-center gap-6">
              <div className="text-center min-w-[80px] p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                <div className="text-sm text-slate-500 uppercase font-bold">{session.day.substring(0, 3)}</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{session.date.split(' ')[1]}</div>
              </div>
              
              <div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 border ${getTypeColor(session.type)}`}>
                  {session.activity}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{session.time}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {session.coach}</span>
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {session.loc}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button className="px-4 py-2 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Play, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const StudentVideos = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Video Analysis Library</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Cover Drive Technique', date: 'Oct 20, 2023', duration: '12:30', thumb: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80', locked: false },
          { title: 'Match Highlights vs City', date: 'Oct 15, 2023', duration: '08:45', thumb: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&q=80', locked: false },
          { title: 'Bowling Action Review', date: 'Oct 10, 2023', duration: '15:00', thumb: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80', locked: true },
        ].map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video bg-slate-200">
              <img src={video.thumb} alt={video.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {video.locked ? (
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                ) : (
                  <div className="bg-accent p-3 rounded-full cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{video.title}</h3>
              <p className="text-sm text-slate-500">{video.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

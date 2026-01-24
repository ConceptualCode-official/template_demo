import React, { useState, useEffect } from 'react';
import { Image, Video, FileText, Plus, Trash, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { api } from '../../../services/api';
import { Modal } from '../../../components/ui/Modal';
import { Button } from '../../../components/ui/Button';

export const AdminContent = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'blogs' | 'videos'>('gallery');
  const [gallery, setGallery] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    setLoading(true);
    const [galleryData, blogsData] = await Promise.all([
      api.admin.getGallery(),
      api.admin.getBlogs()
    ]);
    setGallery(galleryData);
    setBlogs(blogsData);
    setVideos([
      { id: 1, title: 'Batting Masterclass', url: 'https://youtube.com/watch?v=123', date: '2023-10-20' },
      { id: 2, title: 'Fielding Drills', url: 'https://youtube.com/watch?v=456', date: '2023-10-18' },
    ]);
    setLoading(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'gallery') {
      const newItem = await api.admin.uploadImage(formData);
      setGallery([...gallery, newItem]);
    } else if (activeTab === 'blogs') {
      const newItem = await api.admin.createBlog(formData);
      setBlogs([...blogs, newItem]);
    } else {
      setVideos([...videos, { ...formData, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
    }
    setIsModalOpen(false);
    setFormData({});
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Delete this item?')) return;
    
    if (activeTab === 'gallery') {
      await api.admin.deleteImage(id);
      setGallery(gallery.filter(i => i.id !== id));
    } else if (activeTab === 'blogs') {
      await api.admin.deleteBlog(id);
      setBlogs(blogs.filter(i => i.id !== id));
    } else {
      setVideos(videos.filter(i => i.id !== id));
    }
  };

  const openModal = () => {
    setFormData({});
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Content Management</h1>
        <Button onClick={openModal} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add {activeTab === 'gallery' ? 'Image' : activeTab === 'blogs' ? 'Post' : 'Video'}
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
        {[
          { id: 'gallery', label: 'Gallery', icon: Image },
          { id: 'blogs', label: 'Blog Posts', icon: FileText },
          { id: 'videos', label: 'Videos', icon: Video },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id 
                ? 'bg-white dark:bg-slate-700 text-primary dark:text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <tab.icon className="w-4 h-4 mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 min-h-[400px]">
        {loading ? (
          <div className="text-center py-20 text-slate-500">Loading content...</div>
        ) : (
          <>
            {/* Gallery View */}
            {activeTab === 'gallery' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gallery.map((img) => (
                  <div key={img.id} className="group relative aspect-square rounded-lg overflow-hidden bg-slate-100">
                    <img src={img.src} alt="Gallery" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button onClick={() => handleDelete(img.id)} className="p-2 bg-white rounded-full text-red-500 hover:bg-red-50">
                        <Trash className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
                      {img.category}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Blogs View */}
            {activeTab === 'blogs' && (
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div key={blog.id} className="flex justify-between items-center p-4 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-white">{blog.title}</h3>
                      <p className="text-sm text-slate-500">By {blog.author} • {blog.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${blog.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {blog.status}
                      </span>
                      <button onClick={() => handleDelete(blog.id)} className="text-slate-400 hover:text-red-500">
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Videos View */}
            {activeTab === 'videos' && (
              <div className="space-y-4">
                {videos.map((video) => (
                  <div key={video.id} className="flex justify-between items-center p-4 border border-slate-100 dark:border-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        <Video className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 dark:text-white">{video.title}</h3>
                        <a href={video.url} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline flex items-center">
                          Watch Video <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                    <button onClick={() => handleDelete(video.id)} className="text-slate-400 hover:text-red-500">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Add ${activeTab === 'gallery' ? 'Image' : activeTab === 'blogs' ? 'Post' : 'Video'}`}>
        <form onSubmit={handleCreate} className="space-y-4">
          {activeTab === 'gallery' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Image URL</label>
                <input required type="url" className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="https://..." onChange={e => setFormData({...formData, src: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Category</label>
                <select className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, category: e.target.value})}>
                  <option>Training</option>
                  <option>Match</option>
                  <option>Facilities</option>
                </select>
              </div>
            </>
          )}

          {activeTab === 'blogs' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Title</label>
                <input required type="text" className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Author</label>
                <input required type="text" className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, author: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Status</label>
                <select className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, status: e.target.value})}>
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </>
          )}

          {activeTab === 'videos' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Video Title</label>
                <input required type="text" className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Video URL</label>
                <input required type="url" className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, url: e.target.value})} />
              </div>
            </>
          )}

          <Button type="submit" className="w-full">Create</Button>
        </form>
      </Modal>
    </div>
  );
};

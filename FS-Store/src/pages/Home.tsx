import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Truck, Clock, Star, Zap, Monitor, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/product/ProductCard';
import { useApp } from '../context/AppContext';

export const Home = () => {
  const { products, setAuthModalOpen, setAuthView } = useApp();
  const featuredProducts = products.slice(0, 3);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Modern Split Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                New Arrivals 2025
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
                Tech That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Defines You.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                Upgrade your lifestyle with our curated collection of premium electronics. Designed for performance, crafted for aesthetics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/collection">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-lg shadow-blue-600/20">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  onClick={() => { setAuthView('signup'); setAuthModalOpen(true); }}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Join Club
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 object-cover" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 object-cover" alt="" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 object-cover" alt="" src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 object-cover" alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
                </div>
                <p>Trusted by <span className="font-bold text-gray-900 dark:text-white">10k+</span> tech enthusiasts</p>
              </div>
            </motion.div>

            {/* Right Image (Floating Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl shadow-2xl shadow-blue-500/10 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1600"
                  alt="Premium Desk Setup"
                  className="w-full h-auto object-cover"
                />

                {/* Floating Cards */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-4 max-w-xs hidden sm:flex"
                >
                  <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Super Fast</p>
                    <p className="text-xs text-gray-500">Next-gen M3 Chips</p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories / Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Monitor, title: "Workspace", desc: "Ergonomic chairs & desks", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400" },
              { icon: Headphones, title: "Audio", desc: "Immersive sound gear", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400" },
              { icon: Shield, title: "Accessories", desc: "Protection & organization", color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400" }
            ].map((cat, idx) => (
              <motion.div key={idx} variants={item} className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 text-xl group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cat.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{cat.desc}</p>
                <div className="absolute bottom-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                  <ArrowRight className="h-6 w-6 text-gray-400 dark:text-gray-600" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Trending Now</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl">
                Top picks for your setup this week. Curated for quality and performance.
              </p>
            </div>
            <Link to="/collection">
              <Button variant="ghost" className="group">
                View all <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Testimonials */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Trusted by Professionals</h2>
             <p className="mt-4 text-gray-500 dark:text-gray-400">Join thousands of creators who trust FS-Store.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The quality of the Herman Miller chair transformed my work from home experience. Worth every penny.",
                author: "Sarah J.",
                role: "Product Designer"
              },
              {
                text: "Fast shipping and the packaging was immaculate. FS-Store is now my go-to for tech gear.",
                author: "Michael C.",
                role: "Software Engineer"
              },
              {
                text: "Customer support helped me pick the perfect monitor for my setup. Highly recommended!",
                author: "Jessica L.",
                role: "Creative Director"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 relative">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-500">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{review.author}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gray-900 dark:bg-blue-950 rounded-3xl p-8 sm:p-16 text-center overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Join the Inner Circle
              </h2>
              <p className="text-lg text-gray-300 mb-10">
                Subscribe to our newsletter for exclusive drops, early access to sales, and design tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  className="flex-1 rounded-full border-0 bg-white/10 px-6 py-4 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm placeholder:text-gray-400 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
                <Button type="submit" size="lg" className="rounded-full bg-blue-600 hover:bg-blue-500 text-white border-none px-8">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

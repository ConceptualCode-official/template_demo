import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Exporting constants for use in Menu.tsx
export const CATEGORIES = [
  { id: 'sushi', label: 'Sushi' },
  { id: 'sashimi', label: 'Sashimi' },
  { id: 'ramen', label: 'Ramen' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Desserts' },
];

export const MENU_DATA: Record<string, Array<{ name: string; desc: string; price: string; img: string }>> = {
  sushi: [
    { name: "Torched Salmon Belly", desc: "Ponzu, scallion, sesame oil, lime zest", price: "$18", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format&fit=crop&q=60" },
    { name: "Spicy Bluefin Tuna", desc: "Cucumber, spicy mayo, togarashi, micro greens", price: "$22", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&auto=format&fit=crop&q=60" },
    { name: "Wagyu Beef Roll", desc: "A5 Wagyu, truffle oil, asparagus, gold leaf", price: "$32", img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&auto=format&fit=crop&q=60" },
    { name: "King Crab California", desc: "Real king crab, avocado, cucumber, tobiko", price: "$26", img: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/74106c42e92b63a43f8221bc580317ee.webp" },
  ],
  sashimi: [
    { name: "Hamachi Carpaccio", desc: "Yellowtail, jalapeño, yuzu soy, cilantro", price: "$24", img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=500&auto=format&fit=crop&q=60" },
    { name: "Scallop Tiradito", desc: "Hokkaido scallop, rocoto chili, lime, olive oil", price: "$21", img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&auto=format&fit=crop&q=60" },
    { name: "Chef's Selection", desc: "12 pieces of seasonal premium fish", price: "$45", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&auto=format&fit=crop&q=60" },
  ],
  ramen: [
    { name: "Truffle Shoyu", desc: "Chicken broth, truffle paste, chashu, ajitama", price: "$24", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60" },
    { name: "Spicy Miso", desc: "Rich pork broth, spicy miso paste, corn, butter", price: "$22", img: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format&fit=crop&q=60" },
    { name: "Vegan Mushroom", desc: "Creamy mushroom broth, tofu, kale, garlic oil", price: "$20", img: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60" },
  ],
  drinks: [
    { name: "Yuzu Highball", desc: "Japanese whisky, fresh yuzu, soda, mint", price: "$16", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60" },
    { name: "Sakura Martini", desc: "Gin, sake, cherry blossom syrup, lemon", price: "$18", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60" },
    { name: "Matcha Latte", desc: "Ceremonial grade matcha, oat milk, vanilla", price: "$9", img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&auto=format&fit=crop&q=60" },
  ],
  desserts: [
    { name: "Black Sesame Mousse", desc: "Kinako crumble, sesame tuile, gold", price: "$14", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=60" },
    { name: "Matcha Tiramisu", desc: "Mascarpone, matcha sponge, sake soak", price: "$15", img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=500&auto=format&fit=crop&q=60" },
  ]
};

export const MenuList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('sushi');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToCategory = (id: string, isMobile = false) => {
    const elementId = isMobile ? `menu-cat-mobile-${id}` : `menu-cat-${id}`;
    const element = document.getElementById(elementId);
    if (element) {
      // Adjust offset for sticky headers
      const offset = isMobile ? 80 : 100;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveCategory(id);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.id.replace('menu-cat-', '').replace('menu-cat-mobile-', '');
          setActiveCategory(categoryId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });
    
    // Also observe mobile sections
    CATEGORIES.forEach(cat => {
        const mobileEl = document.getElementById(`menu-cat-mobile-${cat.id}`);
        if(mobileEl) observer.observe(mobileEl);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-rich-black z-30">
      
      {/* ================= MOBILE LAYOUT (< md) ================= */}
      <div className="md:hidden w-full pb-24">
        
        {/* Category Quick-Link Cards */}
        <div className="px-4 py-12 flex flex-col gap-4 bg-rich-black">
          {CATEGORIES.map((cat, idx) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              onClick={() => scrollToCategory(cat.id, true)}
              className="group relative w-full py-6 px-8 rounded-lg border border-cream-50/10 bg-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] flex justify-between items-center overflow-hidden"
            >
              <span className="font-serif text-cream-50 uppercase tracking-[0.25em] text-sm z-10 relative group-hover:text-cream-100 transition-colors">
                {cat.label}
              </span>
              <ArrowDown size={14} className="text-cream-50/30 -rotate-90 group-hover:text-cream-50 group-hover:rotate-0 transition-all duration-300 z-10 relative" />
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-cream-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          ))}
        </div>

        {/* Menu List */}
        {CATEGORIES.map((cat) => (
          <div key={cat.id} id={`menu-cat-mobile-${cat.id}`} className="relative scroll-mt-24">
            
            {/* Sticky Category Header */}
            <div className="sticky top-[0px] z-30 bg-rich-black/95 backdrop-blur-md py-6 px-6 border-b border-cream-50/5 flex items-center gap-6 shadow-lg shadow-black/40">
              <h3 className="font-serif text-lg text-cream-50 uppercase tracking-[0.2em]">{cat.label}</h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-cream-50/30 to-transparent" />
            </div>

            {/* Menu Items List */}
            <div className="px-5 py-10 flex flex-col gap-12">
              {MENU_DATA[cat.id]?.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6 items-start"
                >
                  {/* Thumbnail (4:5 Ratio) */}
                  <div className="w-28 aspect-[4/5] flex-shrink-0 rounded-md overflow-hidden bg-white/5 shadow-2xl relative">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-md" />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 flex flex-col pt-1 min-w-0">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h4 className="font-serif text-base text-cream-50 uppercase leading-tight tracking-wide break-words">
                        {item.name}
                      </h4>
                      <span className="font-serif text-base text-cream-50/90 tracking-widest whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-cream-50/40 leading-relaxed font-light line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* ================= DESKTOP LAYOUT (>= md) ================= */}
      <div className="hidden md:block py-24 md:py-32">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-rich-black z-10 pointer-events-none -mt-32" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row gap-12 lg:gap-24">
          
          <aside className="w-full md:w-48 lg:w-64 flex-shrink-0">
            <div className="sticky top-32 flex flex-col gap-8">
              <h3 className="font-serif text-cream-50/50 text-xs uppercase tracking-[0.3em]">Menu</h3>
              
              <div className="flex flex-col gap-3">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    className={`
                      w-full text-left px-6 py-4 border transition-all duration-300
                      text-xs uppercase tracking-[0.2em] font-sans font-medium
                      rounded-none
                      ${activeCategory === cat.id 
                        ? 'bg-cream-50/10 border-cream-50/30 text-cream-50 shadow-[0_0_15px_rgba(253,251,247,0.05)]' 
                        : 'bg-rich-black/50 border-white/5 text-cream-50/40 hover:bg-white/5 hover:text-cream-50/70 hover:border-white/10'}
                    `}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1 flex flex-col gap-24">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                id={`menu-cat-${cat.id}`} 
                ref={(el) => (sectionRefs.current[cat.id] = el)}
                className="scroll-mt-32"
              >
                
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="font-serif text-2xl md:text-3xl text-cream-50 uppercase tracking-[0.15em]">
                    {cat.label}
                  </h2>
                  <div className="h-[1px] flex-1 bg-cream-50/10" />
                </div>

                <div className="flex flex-col gap-10">
                  {MENU_DATA[cat.id]?.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-5%" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center"
                    >
                      <div className="w-full md:w-24 h-24 flex-shrink-0 rounded-sm overflow-hidden bg-white/5 relative">
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform"
                        />
                        <div className="absolute inset-0 border border-white/5 rounded-sm pointer-events-none" />
                      </div>

                      <div className="flex-1 w-full flex justify-between items-start gap-4">
                        <div className="flex flex-col gap-2">
                          <h4 className="font-serif text-lg text-cream-50 tracking-wide group-hover:text-cream-100 transition-colors">
                            {item.name}
                          </h4>
                          <p className="font-sans text-xs md:text-sm text-cream-50/40 leading-relaxed max-w-md font-light">
                            {item.desc}
                          </p>
                        </div>
                        
                        <span className="font-serif text-lg text-cream-50/90 tracking-widest">
                          {item.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            ))}
            
            <div className="h-32" />
          </div>

        </div>
      </div>
    </section>
  );
};

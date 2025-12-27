import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Torus, Octahedron, Box } from '@react-three/drei';
import { Video, PenTool, BarChart3 } from 'lucide-react';

const ServiceCard = ({ title, desc, index, Icon3D, Icon2D }: { title: string, desc: string, index: number, Icon3D: any, Icon2D: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative p-10 border-l border-white/10 hover:bg-white/5 transition-all duration-500"
    >
      <div className="absolute top-4 right-4 h-24 w-24 opacity-30 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0 flex items-center justify-center">
        {isMobile ? (
          // Mobile: Render lightweight SVG Icon
          <Icon2D className="w-16 h-16 text-white" strokeWidth={1} />
        ) : (
          // Desktop: Render 3D Canvas
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Float speed={4} rotationIntensity={2} floatIntensity={1}>
              <Icon3D />
            </Float>
          </Canvas>
        )}
      </div>
      
      <span className="text-xs font-bold text-gray-600 mb-6 block">0{index + 1}</span>
      <h3 className="text-3xl font-bold mb-4 relative z-10">{title}</h3>
      <p className="text-gray-400 leading-relaxed relative z-10 max-w-sm">{desc}</p>
    </motion.div>
  );
};

// Minimalist 3D shapes
const ShapeVideo = () => <Torus args={[1, 0.2, 16, 32]} scale={1.2}><meshStandardMaterial color="#fff" metalness={0.8} roughness={0.2} /></Torus>;
const ShapeBrand = () => <Box args={[1.5, 1.5, 1.5]} scale={0.8}><meshStandardMaterial color="#fff" wireframe /></Box>;
const ShapeMarketing = () => <Octahedron args={[1, 0]} scale={1.5}><meshStandardMaterial color="#fff" metalness={0.8} roughness={0.2} /></Octahedron>;

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 border-b border-white/10 pb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
            We don't just make content. <br />
            We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">perception.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-r border-white/10">
          <ServiceCard 
            title="Cinematic Production" 
            desc="High-end video production for commercials, brand films, and documentaries. Cinema-grade equipment meets storytelling." 
            index={0} 
            Icon3D={ShapeVideo} 
            Icon2D={Video}
          />
          <ServiceCard 
            title="Strategic Branding" 
            desc="Identity design that commands authority. From logos to comprehensive visual systems, we build brands that lead markets." 
            index={1} 
            Icon3D={ShapeBrand} 
            Icon2D={PenTool}
          />
          <ServiceCard 
            title="Performance Marketing" 
            desc="Data-driven campaigns that convert. We combine creative storytelling with analytical precision to drive ROI." 
            index={2} 
            Icon3D={ShapeMarketing} 
            Icon2D={BarChart3}
          />
        </div>
      </div>
    </section>
  );
};

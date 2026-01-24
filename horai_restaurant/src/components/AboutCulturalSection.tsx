import React from "react";
import { motion } from "framer-motion";

const IMAGES = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/269d414c1d45753fb3525a3cc32d83cd.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/1f827cfd31a3b22add64c82ac9f6c0e8.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/322761c59b52a2f0e4cce7a06347b65a.webp",
];

export const AboutCulturalSection: React.FC = () => {
  return (
    <section className="relative w-full bg-rich-black min-h-screen">
      {/* Top Gradient for seamless blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rich-black to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-0">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left Column: Sticky Text Sidebar */}
          {/* Applied sticky top-0 to the container itself for robust behavior */}
          <div className="w-full md:w-5/12 lg:w-4/12 relative md:sticky md:top-0 md:h-screen flex flex-col justify-center py-12 md:py-0 pr-0 md:pr-12 lg:pr-16 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 uppercase tracking-[0.1em] leading-tight mb-8 font-light drop-shadow-lg">
                Hōrai Isn’t Just About Food — It’s a Cultural Experience
              </h2>
              <div className="w-12 h-[1px] bg-cream-50/30 mb-8" />
              <p className="font-sans text-cream-100/60 text-sm md:text-base leading-relaxed tracking-wide font-light">
                Dining here is a ritual. It is the convergence of history, art,
                and the shared human experience of breaking bread. We invite you
                to slow down, to savor, and to connect—not just with the flavors
                on your plate, but with the moment itself.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Scrolling Images */}
          <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col gap-24 md:gap-32 py-12 md:py-32 pl-0 md:pl-8 lg:pl-12 z-10">
            {IMAGES.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[16/10] overflow-hidden rounded-sm shadow-2xl"
              >
                <img
                  src={src}
                  alt={`Cultural Experience ${index + 1}`}
                  // Added object-center to ensure focal point is centered
                  className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-700"
                />

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-rich-black/10 mix-blend-multiply" />
                <div className="absolute inset-0 border border-cream-50/5 pointer-events-none rounded-sm" />

                {/* Subtle gradient at bottom of image for depth */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black/60 to-transparent opacity-60" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient for seamless blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black to-transparent z-10 pointer-events-none" />
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";

export const RolledToPerfectionSection: React.FC = () => {
  const IMAGE_SRC =
    "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/aUKQ3SHmZu4d2g9n92LvnnDtAA.webp";

  return (
    <section className="relative w-full bg-rich-black overflow-hidden flex flex-col items-center pt-24 md:pt-32">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rich-black to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-4 text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 uppercase tracking-[0.15em] mb-6 font-light drop-shadow-lg">
            Rolled to Perfection
          </h2>

          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-[1px] bg-cream-50/50 shadow-[0_0_10px_rgba(253,251,247,0.5)]" />
            <p className="font-sans text-cream-100/90 text-sm md:text-base leading-relaxed max-w-xl font-light tracking-wide">
              A delicate balance of texture and taste. Our sushi is crafted with
              precision, honoring centuries of tradition while embracing the
              bold spirit of modern innovation.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-[60vh] md:h-[80vh] mt-auto"
      >
        <img
          src={IMAGE_SRC}
          alt="Sushi Rolled to Perfection"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-rich-black via-rich-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent" />
        <div className="absolute inset-0 bg-rich-black/10 mix-blend-multiply" />
      </motion.div>
    </section>
  );
};

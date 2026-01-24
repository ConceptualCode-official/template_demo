import React from 'react';

export const EmbedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-black">
      {/* 
        Iframe Wrapper for "Cover" Effect
        - We use CSS min-width/min-height logic to simulate object-fit: cover for an iframe.
        - min-w-[177.77vh]: If height is 100vh, width must be at least 177.77vh (16:9 ratio) to avoid side gaps.
        - min-h-[56.25vw]: If width is 100vw, height must be at least 56.25vw (9:16 ratio) to avoid top/bottom gaps.
        - pointer-events-none: Prevents interaction with Canva UI (play buttons, links) so it acts purely as a background.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[100vw] min-h-[100vh]">
        <iframe
          loading="lazy"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-[177.77vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none"
          src="https://www.canva.com/design/DAG7B_M7KuQ/XNFwZ1iLTbKC0FXJml0eGQ/view?embed"
          allowFullScreen
          allow="fullscreen"
          title="Hōrai Background"
        />
      </div>
      
      {/* Cinematic Overlays */}
      
      {/* 1. Base Darkening - Canva embeds can be bright, so we darken it to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      
      {/* 2. Gradient for Text Readability (Bottom Up) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-[1]" />
      
      {/* 3. Subtle Grain/Noise Texture for Film Look */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};

import { Link } from "react-router-dom";
import { GradientBorder } from "./ui/GradientBorder";
import { RollingText } from "./ui/RollingText";

export const Hero = () => {
  return (
    <div className="relative w-full min-h-[95vh] overflow-hidden flex flex-col items-center justify-center pt-24 pb-48">
      {/* Background Video/Effect */}
      <div className="absolute inset-0 z-0">
        {/* Using a mix blend mode to tint the video with our new colors */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // @ts-expect-error - fetchPriority is not a valid attribute for video elements
          fetchpriority="high"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        >
          <source
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/converge-ai/bgVid.webm"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center h-full mt-10 md:mt-0">
        {/* Tagline */}
        <div className="mb-6">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md px-4 py-1.5 shadow-[0_0_20px_rgba(77,121,255,0.2)]">
            <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Supercharge your AI workflows
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl drop-shadow-2xl">
          Automate Your <br />
          AI Workflows <br />
          with AI Agent
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">
          Connect your favorite apps, set triggers and watch AI handle the rest
          - no coding required. Get up and running in minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-20">
          <GradientBorder
            gradient="from-orange-500 via-red-500 to-orange-600"
            containerClassName="rounded-full p-[1px]"
          >
            <Link
              to="/waitlist"
              className="px-8 py-3.5 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 group"
            >
              <RollingText text="Get Started - Free" />
            </Link>
          </GradientBorder>

          <Link
            to="/pricing"
            className="px-8 py-3.5 text-white font-medium border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm group"
          >
            <RollingText text="View Pricing" />
          </Link>
        </div>
      </div>
    </div>
  );
};

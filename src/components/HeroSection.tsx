import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, MapPin, Coffee, Flame } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=85"
          alt="Café De Travia Bakery Interior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.82]"
        />
        {/* Soft dark & warm cream atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B211D]/85 via-[#2B211D]/65 to-[#2B211D]/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#5C3A2E]/20 to-[#2B211D]/80" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F1]/15 backdrop-blur-md border border-[#F5E9DA]/30 text-xs sm:text-sm text-[#F5E9DA] font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#C9785C] animate-pulse" />
          <span>Baked Fresh Every Morning</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] text-balance drop-shadow-md"
        >
          Freshly Baked.<br />
          <span className="italic font-normal text-[#F5E9DA] underline decoration-[#C9785C]/60 decoration-wavy decoration-1 underline-offset-8">
            Beautifully Brewed.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#F5E9DA]/90 max-w-2xl mx-auto mb-10 font-normal leading-relaxed text-balance"
        >
          Handcrafted bread, delicate pastries, and comforting coffee made fresh every day in the heart of Mandalay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C9785C] hover:bg-[#B5654A] text-white font-medium text-base shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View Our Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFF9F1]/10 hover:bg-[#FFF9F1]/20 text-white border border-white/20 font-medium text-base backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
          >
            <MapPin className="w-4 h-4 text-[#F5E9DA]" />
            <span>Visit the Café</span>
          </a>
        </motion.div>

        {/* Feature Highlights Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto text-left text-xs sm:text-sm text-[#F5E9DA]/90 border-t border-white/15 pt-8"
        >
          <div className="flex items-center gap-3 bg-[#2B211D]/40 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <div className="w-8 h-8 rounded-full bg-[#C9785C]/20 flex items-center justify-center text-[#C9785C]">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">4:00 AM Daily Bake</p>
              <p className="text-[11px] text-[#F5E9DA]/70">Warm oven starters</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#2B211D]/40 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <div className="w-8 h-8 rounded-full bg-[#C9785C]/20 flex items-center justify-center text-[#C9785C]">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Single-Origin Roast</p>
              <p className="text-[11px] text-[#F5E9DA]/70">Espresso & Pour-over</p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center gap-3 bg-[#2B211D]/40 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <div className="w-8 h-8 rounded-full bg-[#8C9A7A]/20 flex items-center justify-center text-[#8C9A7A]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">19th St, Mandalay</p>
              <p className="text-[11px] text-[#F5E9DA]/70">Cozy indoor seating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

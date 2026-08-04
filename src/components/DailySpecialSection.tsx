import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Flame, Clock, Sparkles, ShoppingBag, Check } from 'lucide-react';
import { DAILY_SPECIAL } from '../data/menuData';
import { MenuItem } from '../types';

interface DailySpecialSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const DailySpecialSection: React.FC<DailySpecialSectionProps> = ({ onAddToCart }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOrderSpecial = () => {
    onAddToCart(DAILY_SPECIAL);
    setIsOrdered(true);
    setTimeout(() => setIsOrdered(false), 2000);
  };

  return (
    <section id="special" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#5C3A2E] via-[#422920] to-[#2B211D] text-white shadow-2xl border border-[#C9785C]/30">
        {/* Background accent glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C9785C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8C9A7A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Text & Details Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9785C] text-white text-xs font-bold tracking-wider uppercase shadow-xs">
                  <Flame className="w-3.5 h-3.5" />
                  Today's Fresh Pick
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F1]/15 text-[#F5E9DA] text-xs font-semibold backdrop-blur-xs border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5E9DA]" />
                  Limited Batch (Only 20 Baked Today)
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                {DAILY_SPECIAL.name}
              </h2>

              {/* Description */}
              <p className="text-lg text-[#F5E9DA]/90 font-light leading-relaxed mb-8 max-w-xl">
                {DAILY_SPECIAL.description}
              </p>

              {/* Price & Countdown Timer */}
              <div className="flex flex-wrap items-center gap-6 mb-8 p-4 rounded-2xl bg-[#2B211D]/60 border border-white/10 backdrop-blur-xs max-w-md">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F5E9DA]/70 block">Special Price</span>
                  <span className="font-serif text-3xl font-bold text-[#F5E9DA]">{DAILY_SPECIAL.priceFormatted}</span>
                </div>

                <div className="h-10 w-px bg-white/15 hidden sm:block" />

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F5E9DA]/70 block flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C9785C]" /> Batch Batch-Out In
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-[#F5E9DA] mt-0.5">
                    <span className="bg-white/10 px-2 py-0.5 rounded-md">{String(timeLeft.hours).padStart(2, '0')}h</span>
                    <span>:</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded-md">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                    <span>:</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded-md">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={handleOrderSpecial}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-xl ${
                  isOrdered
                    ? 'bg-[#8C9A7A] text-white'
                    : 'bg-[#C9785C] hover:bg-[#B5654A] text-white transform hover:-translate-y-0.5'
                }`}
              >
                {isOrdered ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Order Tray!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Order Before It’s Gone</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Large Image Column */}
          <div className="lg:col-span-5 h-80 lg:h-full relative overflow-hidden min-h-[380px]">
            <img
              src={DAILY_SPECIAL.image}
              alt={DAILY_SPECIAL.name}
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B211D] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#5C3A2E] lg:via-transparent lg:to-transparent" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 right-6 bg-[#FFF9F1]/90 backdrop-blur-md text-[#2B211D] px-4 py-2 rounded-2xl shadow-lg border border-white/40 text-xs font-medium max-w-[200px]"
            >
              ✨ Made with fresh farm strawberries & organic churned butter.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

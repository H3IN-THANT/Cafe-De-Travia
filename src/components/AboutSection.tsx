import React from 'react';
import { motion } from 'motion/react';
import { Sun, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Sun className="w-6 h-6 text-[#C9785C]" />,
      title: 'Fresh Daily',
      description: 'Baking begins before sunrise at 4:00 AM every single morning so you get warm, fragrant bread.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#C9785C]" />,
      title: 'Quality Ingredients',
      description: 'Organically grown local grains, real French butter, and single-origin coffee beans without shortcut additives.',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#C9785C]" />,
      title: 'Handmade with Love',
      description: 'Hand-shaped loaves, natural sourdough starters fermented over 36 hours, and carefully poured lattes.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F5E9DA]/50 border-y border-[#EFE6D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80"
                alt="Baking sourdough bread at Café De Travia"
                className="w-full h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211D]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-xl font-bold">Artisan Fermentation</p>
                <p className="text-xs text-[#F5E9DA]/80">36-hour wild yeast sourdough process</p>
              </div>
            </div>

            {/* Smaller secondary image badge */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-[#EFE6D8] flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#F5E9DA] flex items-center justify-center text-[#5C3A2E]">
                  <Sparkles className="w-5 h-5 text-[#C9785C]" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#2B211D]">100% Natural</p>
                  <p className="text-xs text-[#5C3A2E]/70">No artificial yeast</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EFE6D8] flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#F5E9DA] flex items-center justify-center text-[#5C3A2E]">
                  <Award className="w-5 h-5 text-[#C9785C]" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#2B211D]">Local Favorite</p>
                  <p className="text-xs text-[#5C3A2E]/70">Mandalay since 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Content Column */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9785C] bg-white px-3.5 py-1.5 rounded-full border border-[#EFE6D8] inline-block mb-4 shadow-2xs">
              Our Passion & Story
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B211D] mb-6 leading-tight">
              Made with Care,<br />Served with Warmth
            </h2>

            <p className="text-[#5C3A2E] text-base sm:text-lg leading-relaxed mb-10 font-normal">
              At <strong className="font-semibold text-[#2B211D]">Café De Travia</strong>, we believe simple ingredients can create memorable moments. Every loaf, pastry, and cup of coffee is prepared with care, using fresh ingredients and time-tested techniques.
            </p>

            {/* 3 Feature Points */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#EFE6D8] shadow-xs hover:border-[#C9785C]/40 transition-all"
                >
                  <div className="p-3 rounded-xl bg-[#FFF9F1] border border-[#EFE6D8] shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2B211D] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#5C3A2E]/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

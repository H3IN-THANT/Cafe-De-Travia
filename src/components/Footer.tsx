import React from 'react';
import { Coffee, Instagram, Facebook, Heart, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B211D] text-[#FFF9F1] pt-16 pb-12 border-t border-[#5C3A2E]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#5C3A2E]/50">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#C9785C] text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Café De Travia
              </span>
            </div>

            <p className="text-sm text-[#F5E9DA]/80 max-w-sm font-light leading-relaxed">
              {CAFE_INFO.tagline} Handcrafted daily in Mandalay with time-tested fermentation techniques and fresh local ingredients.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5C3A2E] hover:bg-[#C9785C] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CAFE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5C3A2E] hover:bg-[#C9785C] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide uppercase text-xs text-[#C9785C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#F5E9DA]/80">
              <li>
                <a href="#hero" className="hover:text-[#C9785C] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C9785C] transition-colors">Menu & Bakes</a>
              </li>
              <li>
                <a href="#special" className="hover:text-[#C9785C] transition-colors">Daily Special</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C9785C] transition-colors">Our Process & Story</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#C9785C] transition-colors">Visit Us & Location</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide uppercase text-xs text-[#C9785C]">
              Visit Us
            </h4>
            <div className="text-sm text-[#F5E9DA]/80 space-y-2 leading-relaxed">
              <p>{CAFE_INFO.address}</p>
              <p className="text-[#F5E9DA] font-semibold">{CAFE_INFO.hours.weekday}</p>
              <p className="text-[#F5E9DA] font-semibold">{CAFE_INFO.hours.weekend}</p>
              <p className="pt-1 text-xs text-[#C9785C]">Tel: {CAFE_INFO.phone}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5E9DA]/60">
          <p className="flex items-center gap-1">
            © 2026 Café De Travia. Baked with <Heart className="w-3.5 h-3.5 text-[#C9785C] fill-[#C9785C]" /> in Mandalay.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#F5E9DA] hover:text-[#C9785C] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

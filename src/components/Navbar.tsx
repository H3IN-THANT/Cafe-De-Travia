import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Clock, MapPin, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CAFE_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'Daily Special', href: '#special' },
    { name: 'About', href: '#about' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9F1]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#EFE6D8]'
          : 'bg-gradient-to-b from-[#2B211D]/60 via-[#2B211D]/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-left"
          >
            <div className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'bg-[#5C3A2E] text-[#FFF9F1]' : 'bg-[#FFF9F1]/20 text-white backdrop-blur-sm'
            }`}>
              <Coffee className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </div>
            <div>
              <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight block ${
                isScrolled ? 'text-[#2B211D]' : 'text-white drop-shadow-sm'
              }`}>
                Café De Travia
              </span>
              <span className={`text-[10px] tracking-widest uppercase block ${
                isScrolled ? 'text-[#C9785C]' : 'text-[#F5E9DA]'
              }`}>
                Mandalay • Artisan Bakery
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled
                    ? 'text-[#5C3A2E] hover:text-[#C9785C]'
                    : 'text-white/90 hover:text-white drop-shadow-xs'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-xs ${
                isScrolled
                  ? 'bg-[#C9785C] hover:bg-[#B5654A] text-white'
                  : 'bg-[#FFF9F1] text-[#5C3A2E] hover:bg-[#F5E9DA]'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order Now</span>
              {cartCount > 0 && (
                <span className="bg-[#5C3A2E] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#2B211D] hover:bg-[#F5E9DA]' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FFF9F1] border-b border-[#EFE6D8] shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="space-y-3 pb-4 border-b border-[#EFE6D8]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-[#2B211D] hover:text-[#C9785C] transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Quick Info snippet in mobile menu */}
              <div className="text-xs text-[#5C3A2E] space-y-2 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C9785C]" />
                  <span>Open Daily: 8:00 AM – 9:00 PM (10 PM weekends)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9785C]" />
                  <span>{CAFE_INFO.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

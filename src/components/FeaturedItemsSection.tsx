import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Search, Check, Sparkles, Coffee, UtensilsCrossed, Croissant } from 'lucide-react';
import { MenuItem, CategoryType } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface FeaturedItemsSectionProps {
  onAddToCart: (item: MenuItem, temp?: 'Hot' | 'Iced') => void;
}

export const FeaturedItemsSection: React.FC<FeaturedItemsSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories: { label: CategoryType; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Coffee', icon: <Coffee className="w-4 h-4" /> },
    { label: 'Bread', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { label: 'Pastries', icon: <Croissant className="w-4 h-4" /> },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQuickAdd = (item: MenuItem, defaultTemp?: 'Hot' | 'Iced') => {
    onAddToCart(item, defaultTemp);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#C9785C] bg-[#F5E9DA] px-3 py-1 rounded-full inline-block mb-3">
          Handcrafted Fresh Daily
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B211D] mb-4">
          Our Bakery & Coffee Menu
        </h2>
        <p className="text-[#5C3A2E]/80 text-base sm:text-lg">
          Explore our selection of freshly baked loaves, golden pastries, and artisanal coffee roasts.
        </p>
      </div>

      {/* Filter and Search Bar Container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EFE6D8]">
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
          {categories.map(({ label, icon }) => {
            const isActive = selectedCategory === label;
            return (
              <button
                key={label}
                onClick={() => setSelectedCategory(label)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#5C3A2E] text-[#FFF9F1] shadow-md'
                    : 'bg-[#F5E9DA]/60 hover:bg-[#F5E9DA] text-[#5C3A2E]'
                }`}
              >
                {icon}
                <span>{label}</span>
                {isActive && (
                  <motion.div
                    layoutId="category-active-pill"
                    className="absolute inset-0 bg-[#5C3A2E] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C3A2E]/50" />
          <input
            type="text"
            placeholder="Search sourdough, latte..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-white border border-[#EFE6D8] text-[#2B211D] placeholder-[#5C3A2E]/40 focus:outline-hidden focus:ring-2 focus:ring-[#C9785C]/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5C3A2E]/60 hover:text-[#5C3A2E]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white/60 rounded-3xl border border-[#EFE6D8] p-8">
          <p className="text-[#5C3A2E] text-lg font-medium mb-2">No menu items found</p>
          <p className="text-sm text-[#5C3A2E]/70 mb-4">
            Try adjusting your search query or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-5 py-2 rounded-full bg-[#C9785C] text-white text-sm font-medium hover:bg-[#B5654A]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isAdded = !!addedItemIds[item.id];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#EFE6D8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image container */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-[#F5E9DA]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Category Label */}
                    <div className="absolute top-3 left-3 bg-[#FFF9F1]/90 backdrop-blur-xs text-[#5C3A2E] px-3 py-1 rounded-full text-xs font-semibold shadow-xs">
                      {item.category}
                    </div>

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-3 right-3 bg-[#C9785C] text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-xs">
                        {item.badge}
                      </div>
                    )}

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 right-3 bg-[#2B211D]/90 text-[#FFF9F1] px-3 py-1 rounded-lg text-sm font-bold tracking-wide shadow-md backdrop-blur-xs">
                      {item.priceFormatted}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#2B211D] group-hover:text-[#C9785C] transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#5C3A2E]/80 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Dietary / Feature Tags */}
                      {item.dietary && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {item.dietary.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium bg-[#F5E9DA] text-[#5C3A2E] px-2.5 py-0.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action button */}
                    <div className="pt-2 border-t border-[#EFE6D8]/60 flex items-center justify-between">
                      <span className="text-xs text-[#5C3A2E]/70 italic">
                        Fresh from our oven/espresso
                      </span>

                      {item.isHotOrCold ? (
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleQuickAdd(item, 'Hot')}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#F5E9DA] hover:bg-[#5C3A2E] text-[#5C3A2E] hover:text-white transition-colors"
                          >
                            + Hot
                          </button>
                          <button
                            onClick={() => handleQuickAdd(item, 'Iced')}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#F5E9DA] hover:bg-[#C9785C] text-[#5C3A2E] hover:text-white transition-colors"
                          >
                            + Iced
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleQuickAdd(item)}
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            isAdded
                              ? 'bg-[#8C9A7A] text-white'
                              : 'bg-[#5C3A2E] hover:bg-[#C9785C] text-white shadow-xs'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Order</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

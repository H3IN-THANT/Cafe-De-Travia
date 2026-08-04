import React, { useState } from 'react';
import { MenuItem, OrderItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedItemsSection } from './components/FeaturedItemsSection';
import { DailySpecialSection } from './components/DailySpecialSection';
import { AboutSection } from './components/AboutSection';
import { InfoSection } from './components/InfoSection';
import { QuickOrderDrawer } from './components/QuickOrderDrawer';
import { Footer } from './components/Footer';
import { NotificationToast } from './components/NotificationToast';

export default function App() {
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (item: MenuItem, selectedTemp?: 'Hot' | 'Iced') => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (ci) => ci.item.id === item.id && ci.selectedTemp === selectedTemp
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { item, quantity: 1, selectedTemp }];
      }
    });

    const tempSuffix = selectedTemp ? ` (${selectedTemp})` : '';
    showToast(`Added ${item.name}${tempSuffix} to your order tray!`);
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        updated.splice(index, 1);
      } else {
        updated[index].quantity = newQty;
      }
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFF9F1] text-[#2B211D] font-sans bg-grain flex flex-col justify-between selection:bg-[#C9785C]/20 selection:text-[#5C3A2E]">
      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Featured Items / Menu Section */}
        <FeaturedItemsSection onAddToCart={handleAddToCart} />

        {/* 3. Daily Special Highlight */}
        <DailySpecialSection onAddToCart={handleAddToCart} />

        {/* 4. About Bakery & Story */}
        <AboutSection />

        {/* 5. Café Location, Hours & Info */}
        <InfoSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quick Order Tray Drawer */}
      <QuickOrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Notification Toast */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

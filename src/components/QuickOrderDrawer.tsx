import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, Clock, CheckCircle2, Phone, User, Store } from 'lucide-react';
import { OrderItem } from '../types';
import { CAFE_INFO } from '../data/menuData';

interface QuickOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: OrderItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const QuickOrderDrawer: React.FC<QuickOrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('In 20 Minutes');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  const totalPrice = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const code = 'CDT-' + Math.floor(1000 + Math.random() * 9000);
    setOrderCode(code);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#2B211D]/60 backdrop-blur-xs transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-screen max-w-md bg-[#FFF9F1] shadow-2xl flex flex-col justify-between border-l border-[#EFE6D8]"
          >
            {/* Header */}
            <div className="p-6 bg-white border-b border-[#EFE6D8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#F5E9DA] text-[#5C3A2E]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2B211D]">
                    Your Order Tray
                  </h3>
                  <p className="text-xs text-[#5C3A2E]/70">
                    Pickup at Café De Travia (19th St)
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#5C3A2E] hover:bg-[#F5E9DA] transition-colors"
                aria-label="Close order tray"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {isSubmitted ? (
                /* Order Confirmation View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-16 h-16 bg-[#8C9A7A]/20 text-[#8C9A7A] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C9785C] block mb-1">
                      Order Received
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-[#2B211D]">
                      Thank You, {customerName || 'Valued Guest'}!
                    </h4>
                    <p className="text-sm text-[#5C3A2E] mt-2">
                      Your pickup order has been sent directly to our barista and baker team.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#EFE6D8] text-left space-y-3">
                    <div className="flex justify-between text-xs text-[#5C3A2E]/70 pb-2 border-b border-[#EFE6D8]">
                      <span>Order Reference</span>
                      <span className="font-mono font-bold text-[#2B211D]">{orderCode}</span>
                    </div>

                    <div className="flex justify-between text-xs text-[#5C3A2E]/70 pb-2 border-b border-[#EFE6D8]">
                      <span>Estimated Pickup Time</span>
                      <span className="font-semibold text-[#C9785C]">{pickupTime}</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold text-[#2B211D] pt-1">
                      <span>Total Amount (Pay at Pickup)</span>
                      <span>{totalPrice.toLocaleString()} MMK</span>
                    </div>
                  </div>

                  <div className="text-xs text-[#5C3A2E]/80 bg-[#F5E9DA] p-4 rounded-xl flex items-start gap-2 text-left">
                    <Store className="w-4 h-4 text-[#C9785C] shrink-0 mt-0.5" />
                    <span>
                      Please present reference code <strong>{orderCode}</strong> at the counter when arriving at 19th Street, Mandalay.
                    </span>
                  </div>

                  <button
                    onClick={handleResetAndClose}
                    className="w-full py-3.5 rounded-full bg-[#5C3A2E] hover:bg-[#2B211D] text-white text-sm font-semibold transition-all"
                  >
                    Done & Back to Website
                  </button>
                </motion.div>
              ) : cart.length === 0 ? (
                /* Empty Cart View */
                <div className="text-center py-16 text-[#5C3A2E] space-y-4">
                  <div className="w-16 h-16 bg-[#F5E9DA] rounded-full flex items-center justify-center mx-auto text-[#C9785C]">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#2B211D]">Your Tray is Empty</h4>
                  <p className="text-xs text-[#5C3A2E]/80 max-w-xs mx-auto">
                    Explore our bakery and coffee items and click "Add to Order" to start your takeaway tray.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-[#C9785C] text-white text-xs font-semibold hover:bg-[#B5654A]"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                /* Active Cart View */
                <div className="space-y-6">
                  {/* Cart Items List */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#5C3A2E]">
                        Items ({cart.reduce((a, c) => a + c.quantity, 0)})
                      </span>
                      <button
                        onClick={onClearCart}
                        className="text-xs text-[#C9785C] hover:underline"
                      >
                        Clear All
                      </button>
                    </div>

                    {cart.map((cartItem, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3.5 rounded-2xl border border-[#EFE6D8] flex gap-3 items-center shadow-2xs"
                      >
                        <img
                          src={cartItem.item.image}
                          alt={cartItem.item.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-sm text-[#2B211D] truncate">
                            {cartItem.item.name}
                          </h5>
                          {cartItem.selectedTemp && (
                            <span className="text-[10px] font-semibold bg-[#F5E9DA] text-[#5C3A2E] px-2 py-0.5 rounded-md">
                              {cartItem.selectedTemp}
                            </span>
                          )}
                          <p className="text-xs text-[#C9785C] font-semibold mt-0.5">
                            {(cartItem.item.price * cartItem.quantity).toLocaleString()} MMK
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-[#F5E9DA]/60 p-1 rounded-lg">
                          <button
                            onClick={() => onUpdateQuantity(idx, -1)}
                            className="p-1 rounded-md text-[#5C3A2E] hover:bg-white"
                          >
                            {cartItem.quantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-red-500" /> : <Minus className="w-3.5 h-3.5" />}
                          </button>
                          <span className="text-xs font-bold w-4 text-center text-[#2B211D]">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(idx, 1)}
                            className="p-1 rounded-md text-[#5C3A2E] hover:bg-white"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pickup Form */}
                  <form onSubmit={handleSubmitOrder} className="space-y-4 pt-4 border-t border-[#EFE6D8]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5C3A2E] block">
                      Pickup Reservation Details
                    </span>

                    <div>
                      <label className="text-xs font-medium text-[#2B211D] block mb-1 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#C9785C]" /> Customer Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aung San"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl text-xs bg-white border border-[#EFE6D8] text-[#2B211D] focus:ring-2 focus:ring-[#C9785C]/50 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#2B211D] block mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-[#C9785C]" /> Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +959 790 000 000"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl text-xs bg-white border border-[#EFE6D8] text-[#2B211D] focus:ring-2 focus:ring-[#C9785C]/50 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#2B211D] block mb-1 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C9785C]" /> Estimated Pickup Time
                      </label>
                      <select
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl text-xs bg-white border border-[#EFE6D8] text-[#2B211D] focus:ring-2 focus:ring-[#C9785C]/50 focus:outline-hidden"
                      >
                        <option value="In 15 Minutes">In 15 Minutes</option>
                        <option value="In 30 Minutes">In 30 Minutes</option>
                        <option value="In 45 Minutes">In 45 Minutes</option>
                        <option value="1 Hour Later">1 Hour Later</option>
                      </select>
                    </div>

                    {/* Summary Box */}
                    <div className="bg-white p-4 rounded-2xl border border-[#EFE6D8] space-y-2 pt-3">
                      <div className="flex justify-between text-xs text-[#5C3A2E]/80">
                        <span>Subtotal</span>
                        <span>{totalPrice.toLocaleString()} MMK</span>
                      </div>
                      <div className="flex justify-between text-xs text-[#5C3A2E]/80">
                        <span>Takeout Packaging</span>
                        <span className="text-[#8C9A7A] font-semibold">Free</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-[#2B211D] pt-2 border-t border-[#EFE6D8]">
                        <span>Total (Pay on Arrival)</span>
                        <span className="text-[#C9785C]">{totalPrice.toLocaleString()} MMK</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#C9785C] hover:bg-[#B5654A] text-white text-sm font-semibold shadow-lg transition-all"
                    >
                      Confirm Pickup Order ({totalPrice.toLocaleString()} MMK)
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Footer note */}
            <div className="p-4 bg-white border-t border-[#EFE6D8] text-center text-[11px] text-[#5C3A2E]/70">
              For immediate questions, call {CAFE_INFO.phone}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

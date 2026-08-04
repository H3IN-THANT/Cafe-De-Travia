import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle } from 'lucide-react';

interface NotificationToastProps {
  message: string | null;
  onClose: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 bg-[#2B211D] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 backdrop-blur-md"
        >
          <CheckCircle className="w-5 h-5 text-[#8C9A7A] shrink-0" />
          <span className="text-xs font-semibold tracking-wide text-[#F5E9DA]">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

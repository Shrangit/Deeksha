"use client";

import { useState, useRef, useEffect } from "react";
import { X, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentineModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [yesPressed, setYesPressed] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const btnWidth = 100; // Approximate button width
      const btnHeight = 50; // Approximate button height

      // Calculate safe area (padding)
      const padding = 20;
      
      const maxWidth = containerRect.width - btnWidth - padding;
      const maxHeight = containerRect.height - btnHeight - padding;

      const newX = Math.random() * maxWidth;
      const newY = Math.random() * maxHeight;
      
      setNoBtnPosition({ x: Math.max(padding, newX), y: Math.max(padding, newY) });
    }
  };

  const openModal = () => {
    setIsOpen(true);
    setYesPressed(false);
    setNoBtnPosition(null); // Reset to static position
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={openModal}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg shadow-pink-500/30 flex items-center justify-center group"
      >
        <Heart className="w-6 h-6 animate-pulse group-hover:animate-none" fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap font-medium">
          Open Surprise
        </span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden flex flex-col min-h-[450px]"
              ref={containerRef}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              {!yesPressed ? (
                <div className="flex flex-col items-center justify-center flex-grow space-y-8 py-4">
                   <div className="relative">
                     <motion.div
                       animate={{ 
                         scale: [1, 1.1, 1],
                         rotate: [0, 5, -5, 0]
                       }}
                       transition={{ 
                         duration: 2,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                        <Heart className="w-24 h-24 text-pink-500 drop-shadow-xl" fill="currentColor" />
                     </motion.div>
                     <motion.div
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="absolute -top-2 -right-2 text-yellow-400"
                     >
                        <Sparkles className="w-8 h-8" />
                     </motion.div>
                   </div>
                   
                   <div className="text-center space-y-2">
                     <h2 className="text-3xl font-extrabold text-gray-800 font-serif leading-tight">
                       I’m really enjoying us… can we keep choosing each other?
                     </h2>
                     <p className="text-gray-500 text-sm">Slowly, honestly, and genuinely. 💞</p>
                   </div>
                   
                   <div className="flex items-center gap-6 w-full justify-center relative min-h-[60px]">
                     <motion.button
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={() => setYesPressed(true)}
                       className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg shadow-green-500/30 transform transition-all z-10"
                     >
                       Yes!
                     </motion.button>
                     
                     <motion.button
                       onMouseEnter={handleNoHover}
                       onTouchStart={handleNoHover}
                       animate={noBtnPosition ? {
                           position: "absolute",
                           left: noBtnPosition.x,
                           top: noBtnPosition.y,
                       } : {}}
                       transition={{ type: "spring", stiffness: 400, damping: 25 }}
                       className={`px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg shadow-red-500/30 transition-colors ${noBtnPosition ? "absolute" : "relative"}`}
                     >
                       No
                     </motion.button>
                   </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center flex-grow space-y-6 py-4 text-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, ease: "circOut" }}
                  >
                    <Sparkles className="w-20 h-20 text-yellow-400" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-pink-600">
                       Yay! ❤️
                    </h3>
                    <p className="text-gray-500 font-medium">You just made my day!</p>
                  </div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 bg-pink-50 rounded-2xl border border-pink-100 shadow-inner"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed font-serif italic">
                      "To my favorite person <span className='font-bold text-pink-600'>Dee</span>,<br/><br/>
I don’t know what we’ll call this yet… but I know I truly cherish every conversation, every laugh, and every little moment with you.<br/><br/>
Getting to know you has been something really special to me, and I’m really happy it’s you.""
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

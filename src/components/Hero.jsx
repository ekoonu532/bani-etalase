import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Bani <span className="text-yellow-400">Etalase</span></h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">Workshop Custom Furniture Aluminium, Kaca & Besi</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#products" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
              Lihat Produk Kami
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-20 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default Hero;
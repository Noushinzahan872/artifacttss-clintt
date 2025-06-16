import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      className="min-h-screen  px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto text-center">
         <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
       About Us
      </h2>


        <div className="bg-white border border-purple-200 rounded-xl shadow-md p-6 mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold text-pink-600">HistoFind</span>, a digital gateway to the world's most fascinating historical artifacts. Our mission is to preserve, showcase, and share the stories behind human civilization's most iconic relics — from ancient tools to powerful manuscripts, lost cities to royal treasures.
          </p>
        </div>

        <div className="bg-white border border-pink-200 rounded-xl shadow-md p-6 mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            This project was created with passion by a team of history lovers and developers to bring the museum experience online. Whether you're a student, researcher, or simply curious, you’ll discover detailed artifact descriptions, high-quality images, and engaging historical context.
          </p>
        </div>

        <div className="bg-white border border-rose-200 rounded-xl shadow-md p-6 mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Through this platform, we aim to inspire curiosity and appreciation for the richness of our past and ensure that historical knowledge is accessible to everyone, anywhere.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500 italic">Crafted with ❤️ by Team HistoFind</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;

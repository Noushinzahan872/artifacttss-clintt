// ArtifactShowcase.jsx
import React from 'react';
import { motion } from 'framer-motion';
import animateImage from '../assets/animateHistory.png'

const artifacts = [
  {
    title: "Rosetta Stone",
    description: "A granodiorite stele that was key to deciphering Egyptian hieroglyphs.",
    date: "196 BC",
  },
  {
    title: "Terracotta Army",
    description: "Thousands of clay soldiers buried with China's first emperor, Qin Shi Huang.",
    date: "210–209 BC",
  },
  {
    title: "Dead Sea Scrolls",
    description: "Ancient Jewish texts discovered near the Dead Sea.",
    date: "3rd century BC – 1st century AD",
  },
  {
    title: "Antikythera Mechanism",
    description: "An ancient Greek analog computer used to predict astronomical positions.",
    date: "150–100 BC",
  },
];

const ArtifactCard = ({ title, description, date, index }) => (
  <motion.div
    className=" rounded-xl p-6 shadow-md hover:shadow-xl border-l-4 border-pink-500 transition duration-300 w-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
  >
    <h3 className="text-xl font-semibold text-pink-700">{title}</h3>
    <p className="mt-2 text-sm  italic">"{description}"</p>
    <p className="mt-4 text-xs  font-medium">📜 Dated: {date}</p>
  </motion.div>
);

const ArtifactShowcase = () => {
  return (
    <div className=" py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-pink-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Discover Timeless Artifacts
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* LEFT: Animated Image */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={animateImage}
            alt="Ancient Artifact Illustration"
            className="rounded-2xl shadow-lg w-full h-[600px] object-cover"
          />
        </motion.div>

        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          {artifacts.map((artifact, index) => (
            <ArtifactCard key={index} {...artifact} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtifactShowcase;

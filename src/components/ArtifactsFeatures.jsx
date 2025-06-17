

import React from 'react';
import { GiAncientRuins, GiDiscussion, GiArchiveRegister, GiStoneTablet } from 'react-icons/gi';

const features = [
  {
    icon: <GiStoneTablet className="text-4xl text-pink-500 mb-3" />,
    title: "Share Historical Artifacts",
    description: [
      "Upload and describe ancient artifacts",
      "Use a structured form to add history",
      "Reach passionate history lovers",
    ],
  },
  {
    icon: <GiDiscussion className="text-4xl text-pink-500 mb-3" />,
    title: "Discuss History",
    description: [
      "Comment on artifacts and stories",
      "Ask questions or give feedback",
      "Engage in historical discussions",
    ],
  },
  {
    icon: <GiArchiveRegister className="text-4xl text-pink-500 mb-3" />,
    title: "Curated Collections",
    description: [
      "Explore categorized discoveries",
      "Find artifacts by type, era, and region",
      "Stay informed with trending history",
    ],
  },
  {
    icon: <GiAncientRuins className="text-4xl text-pink-500 mb-3" />,
    title: "Build Your Historian Profile",
    description: [
      "Track your liked artifacts",
      "Follow other contributors",
      "Grow your reputation in the community",
    ],
  },
];

const ArtifactsFeatures = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-12">
          Explore Our Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-pink-300 border border-gray-200 transition">
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  {feature.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtifactsFeatures;

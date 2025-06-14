import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  {
    title: 'Rosetta Stone',
    description:
      'The key to understanding Egyptian hieroglyphs, discovered in 1799 and written in three scripts.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rosetta_Stone.JPG/800px-Rosetta_Stone.JPG',
  },
  {
    title: 'Antikythera Mechanism',
    description:
      'An ancient Greek analog computer used to predict astronomical positions and eclipses.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/NAMA_Machine_d%27Anticyth%C3%A8re_1.jpg/800px-NAMA_Machine_d%27Anticyth%C3%A8re_1.jpg',
  },
  {
    title: 'Terracotta Army',
    description:
      'A collection of terracotta sculptures representing the armies of Qin Shi Huang, the first Emperor of China.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Terracotta_Army%2C_view_of_pit_1.jpg/800px-Terracotta_Army%2C_view_of_pit_1.jpg',
  },
];

const BannerSlider = () => {
  return (
    <div className=" py-10 px-4">
      <h2 className="text-4xl text-center font-bold text-pink-600 mb-6">
        Historical Artifacts Tracker
      </h2>
      <p className="text-center max-w-3xl mx-auto text-gray-700 mb-10">
        This project involves creating a web application for tracking historical artifacts such as the Rosetta Stone,
        the Antikythera Mechanism, and more. Explore the timeline and details of ancient discoveries that shaped human
        history.
      </p>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2000}
        className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl"
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={slide.title} className="h-96 object-cover w-full" />
            <div className="legend bg-black bg-opacity-60 text-white p-4">
              <h3 className="text-2xl font-semibold text-pink-400">{slide.title}</h3>
              <p className="text-sm mt-1">{slide.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerSlider;



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";



const artifactSlides = [
  {
    image: "https://i.ibb.co/NdsPLLzv/a7343d4e-e8d5-406e-a472-1f48457a2837.jpg",
    title: "Rosetta Stone",
    description:
      "The key to understanding Egyptian hieroglyphs, discovered in 1799 and written in three scripts.",
    buttonText: "Explore Rosetta",
  },
  {
    image: "https://i.ibb.co/CpRZpdhK/d9bf7f80-7b71-4c41-8a88-5bf58dc801b2.jpg",
    title: "Antikythera Mechanism",
    description:
      "An ancient Greek analog computer used to predict astronomical positions and eclipses.",
    buttonText: "Explore Antikythera",
  },
  {
    image: "https://i.ibb.co/bgCY2F3s/02be7185-760d-45f8-9626-5b24cd47be16.jpg",
    title: "Terracotta Army",
    description:
      "A collection of terracotta sculptures representing the armies of Qin Shi Huang, the first Emperor of China.",
    buttonText: "Explore Terracotta",
  },
];

const BannerSlider = () => {
  return (
    <div className="w-full md:mt-8 mt-6 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {artifactSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
              <img
                className="w-full h-full  object-cover"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>

              <div className="absolute bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-28 left-4 sm:left-6 md:left-16 z-10 text-white space-y-1.5 md:space-y-3 max-w-md sm:max-w-lg md:max-w-xl">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-pink-400">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-white">
                  {slide.description}
                </p>
                <Link
                  to="/allArtifacts"
                  className="btn btn-sm sm:btn-md md:btn-lg bg-pink-600 hover:bg-pink-700 text-white rounded-full px-4 py-2 border-none"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;











// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import image2 from '../assets/image2 (2).jpeg'
// import image1 from '../assets/image2 (1).jpeg'
// import image3 from '../assets/image2 (3).jpeg'

// const slides = [
//   {
//     title: 'Rosetta Stone',
//     description: 'Key to decoding ancient Egyptian hieroglyphs.',
//     image:{image2},
//   },
//   {
//     title: 'Antikythera Mechanism',
//     description: 'Ancient Greek device to track celestial events.',
//     image:{image1},
//   },
//   {
//     title: 'Terracotta Army',
//     description: 'Statues guarding the tomb of China’s first Emperor.',
//     image: {image3},
//   },
// ];

// const BannerSlider = () => {
//   return (
//     <div className="w-full">
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         interval={4000}
//         className="w-full"
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
//             {/* Background Image */}
//             <div
//               className="w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             ></div>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="text-center px-4">
//                 <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
//                   {slide.title}
//                 </h2>
//                 <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
//                   {slide.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default BannerSlider;



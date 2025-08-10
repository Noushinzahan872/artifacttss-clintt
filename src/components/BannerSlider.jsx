
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











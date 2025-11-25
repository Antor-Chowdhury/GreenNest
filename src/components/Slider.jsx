import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Grow with Care",
      subtitle: "Every leaf tells a story of love",
      icon: "https://i.ibb.co/wNc07rBh/carousel-1-1.webp",
    },
    {
      id: 2,
      title: "Quench & Flourish",
      subtitle: "Hydration fuels healthy growth",
      icon: "https://i.ibb.co/rnQTYLG/carousel-2-2.webp",
    },
    {
      id: 3,
      title: "Soak up the Sunshine",
      subtitle: "Let the light energize your greens",
      icon: "https://i.ibb.co/wZ03XgTr/carousel-3-3.webp",
    },
  ];

  return (
    <div className="w-full h-[50vh] md:h-[70vh] relative">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <img
              src={slide.icon}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/25">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white max-w-2xl">
                {slide.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

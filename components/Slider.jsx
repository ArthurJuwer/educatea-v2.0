"use client"
import React, { useState } from "react";
import Image from "next/image";

import Slide01 from "../public/images/carrosel-jogo/slide-1.png";
import Slide02 from "../public/images/carrosel-jogo/slide-2.png";
import Slide03 from "../public/images/carrosel-jogo/slide-3.png";

const slides = [Slide01, Slide02, Slide03];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="z-10">
    

    
    <div className="w-full max-w-5xl mx-auto text-center">
      {/* Title */}
      <h1 className="text-white text-3xl font-bold mb-6">
        EXPERIMENTE E APRENDA!
      </h1>

      {/* Image Container */}
      <div className="relative rounded-2xl overflow-hidden bg-black">
        <Image
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-[1900px] h-auto"
          priority
        />

        {/* Optional arrows */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === slides.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="absolute transform -translate-x-1/2 left-1/2 flex items-center justify-center gap-3 mt-6 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-10 rounded-full border-2 border-[#0033FF] transition-all ${
              currentSlide === index
                ? "bg-[#0033FF]"
                : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

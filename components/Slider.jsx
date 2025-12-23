"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Slide01 from "../public/images/carrosel-jogo/slide-1.png";
import Slide02 from "../public/images/carrosel-jogo/slide-2.png";
import Slide03 from "../public/images/carrosel-jogo/slide-3.png";

const slides = [Slide01, Slide02, Slide03];
const SLIDE_TIME = 4;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState(SLIDE_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          setCurrentSlide((slide) =>
            slide === slides.length - 1 ? 0 : slide + 1
          );
          return SLIDE_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const changeSlide = (index) => {
    setCurrentSlide(index);
    setCountdown(SLIDE_TIME);
  };

  return (
    <div className="z-10 w-full max-w-5xl mx-auto text-center px-4 sm:px-0">
      {/* Title */}
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-8 sm:mb-16">
        EXPERIMENTE E APRENDA!
      </h1>

      {/* Slider */}
      <div className="relative rounded-2xl overflow-hidden bg-black">
        <Image
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          priority
          className="
            w-full
            h-[260px]
            sm:h-[420px]
            lg:h-[600px]
            object-cover
          "
        />

        {/* Countdown */}
        <div
          className="
            absolute top-3 right-3
            sm:top-4 sm:right-4
            bg-[#0033FF] text-white
            size-10 sm:size-12
            flex items-center justify-center
            rounded-full
          "
        >
          <span className="font-bold text-sm sm:text-xl">
            {countdown}s
          </span>
        </div>

        {/* Left arrow */}
        <button
          onClick={() =>
            changeSlide(
              currentSlide === 0 ? slides.length - 1 : currentSlide - 1
            )
          }
          className="
            absolute left-0 top-1/2 -translate-y-1/2
            bg-white/25 text-white
            text-2xl sm:text-3xl
            px-3 sm:px-4
            py-4 sm:py-6
            rounded-tr-2xl rounded-br-2xl
            hover:opacity-90
          "
        >
          ‹
        </button>

        {/* Right arrow */}
        <button
          onClick={() =>
            changeSlide(
              currentSlide === slides.length - 1 ? 0 : currentSlide + 1
            )
          }
          className="
            absolute right-0 top-1/2 -translate-y-1/2
            bg-white/25 text-white
            text-2xl sm:text-3xl
            px-3 sm:px-4
            py-4 sm:py-6
            rounded-tl-2xl rounded-bl-2xl
            hover:opacity-90
          "
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`
              h-2.5 sm:h-3
              w-8 sm:w-10
              rounded-full
              border-2 border-[#0033FF]
              transition-all duration-300
              ${
                currentSlide === index
                  ? "bg-[#0033FF]"
                  : "bg-transparent"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

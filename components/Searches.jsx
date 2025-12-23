"use client";

import Image from "next/image";
import React, { useState } from "react";

import CientificoImg from "../public/images/searches/Projeto de Pesquisa - EducaTEA.docx.pdf 1.png";
import ResultadosImg from "../public/images/searches/Previsto_Realizado-1-1280x720 1.png";

const contentMap = {
  cientifico: {
    title: "TRABALHO CIENTÍFICO",
    text: `Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica...`,
    image: CientificoImg,
  },
  pitch: {
    title: "PITCH DO PROJETO",
    text: `Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica...`,
    image: CientificoImg,
  },
  resultados: {
    title: "RESULTADOS ALCANÇADOS",
    image: ResultadosImg,
  },
};

export default function Searches() {
  const [active, setActive] = useState("cientifico");
  const content = contentMap[active];

  return (
    <section className="w-full flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-7xl flex flex-col items-center gap-12 sm:gap-16">

        {/* MAIN CONTENT */}
        {active === "resultados" ? (
          /* RESULTADOS */
          <div className="w-full flex flex-col items-center gap-6 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              {content.title}
            </h1>

            <Image
              src={content.image}
              alt={content.title}
              className="shadow-lg w-full max-w-3xl h-auto"
              priority
            />
          </div>
        ) : (
          /* CIENTÍFICO + PITCH */
          <div
            className={`w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-all duration-300 ${
              active === "pitch" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={content.image}
                alt={content.title}
                className="shadow-lg w-full max-w-md h-auto"
                priority
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col text-white">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                {content.title}
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-gray-200 text-justify">
                {content.text}
              </p>

              <button
                className="bg-[#F9A318] hover:bg-[#ffb338] transition text-white font-semibold
                           px-10 py-2.5 rounded-xl mt-6 self-center lg:self-start"
              >
                VISUALIZAR
              </button>
            </div>
          </div>
        )}

        {/* SELECTOR */}
        <div className="flex flex-wrap justify-center gap-2 border-2 border-[#0033FF] rounded-full overflow-hidden font-semibold">
          {["cientifico", "pitch", "resultados"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-6 sm:px-10 py-2 transition ${
                active === item
                  ? "bg-[#0033FF] text-white font-bold"
                  : "text-white hover:bg-[#0033FF]/20"
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

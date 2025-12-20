"use client";

import Image from "next/image";
import React, { useState } from "react";

import CientificoImg from "../public/images/searches/Projeto de Pesquisa - EducaTEA.docx.pdf 1.png";
import ResultadosImg from "../public/images/searches/Previsto_Realizado-1-1280x720 1.png";
// futuramente pode ser um gráfico
// import ResultadosImg from "../public/images/searches/resultados.png";

const contentMap = {
  cientifico: {
    title: "TRABALHO CIENTÍFICO",
    text: `Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500. Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500. Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500. Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500. Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500.Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500.Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500.`,
    image: CientificoImg,
  },
  pitch: {
    title: "PITCH DO PROJETO",
    text: `Lorem Ipsum é simplesmente um texto fictício da indústria
      tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
      padrão da indústria desde os anos 1500. Lorem Ipsum é simplesmente um texto fictício da indústria
      tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
      padrão da indústria desde os anos 1500. Lorem Ipsum é simplesmente um texto fictício da indústria
      tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
      padrão da indústria desde os anos 1500. Lorem Ipsum é simplesmente um texto fictício da indústria
      tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
      padrão da indústria desde os anos 1500. Lorem Ipsum é simplesmente um texto fictício da indústria
      tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
      padrão da indústria desde os anos 1500.Lorem Ipsum é simplesmente um texto fictício da indústria
      tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
      padrão da indústria desde os anos 1500.Lorem Ipsum é simplesmente um texto fictício da indústria
      tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
      padrão da indústria desde os anos 1500.`,
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
    <section className="w-full flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center gap-16 px-6">

        {/* MAIN CONTENT */}
        {active === "resultados" ? (
          /* RESULTADOS */
          <div className="w-full flex flex-col items-center gap-8 text-white">
            <h1 className="text-3xl font-bold tracking-wide text-center">
              {content.title}
            </h1>

            <Image
              src={content.image}
              alt={content.title}
              className="shadow-lg"
              priority
            />
          </div>
        ) : (
          /* CIENTÍFICO + PITCH */
          <div
            className={`w-full flex items-center justify-between gap-16 transition-all duration-300 ${
              active === "pitch" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src={content.image}
                alt={content.title}
                className="shadow-lg"
                priority
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between h-full text-white max-w-xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold tracking-wide">
                  {content.title}
                </h1>

                <p className="leading-relaxed text-justify text-gray-200 w-10/12">
                  {content.text}
                </p>
              </div>

              <button
                className={`bg-[#F9A318] hover:bg-[#ffb338] transition text-white font-semibold px-12 py-2.5 rounded-xl mt-8 self-start
                }`}
              >
                VISUALIZAR
              </button>
            </div>
          </div>
        )}

        {/* SELECTOR */}
        <div className="flex items-center border-2 border-[#0033FF] rounded-full overflow-hidden font-semibold">
          <button
            onClick={() => setActive("cientifico")}
            className={`px-12 py-2 transition ${
              active === "cientifico"
                ? "bg-[#0033FF] text-white font-bold"
                : "text-white hover:bg-[#0033FF]/20"
            }`}
          >
            CIENTÍFICO
          </button>

          <button
            onClick={() => setActive("pitch")}
            className={`px-12 py-2 transition ${
              active === "pitch"
                ? "bg-[#0033FF] text-white font-bold"
                : "text-white hover:bg-[#0033FF]/20"
            }`}
          >
            PITCH
          </button>

          <button
            onClick={() => setActive("resultados")}
            className={`px-12 py-2 transition ${
              active === "resultados"
                ? "bg-[#0033FF] text-white font-bold"
                : "text-white hover:bg-[#0033FF]/20"
            }`}
          >
            RESULTADOS
          </button>
        </div>

      </div>
    </section>
  );
}

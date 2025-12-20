"use client"

import Image from "next/image";
import React, { useState } from "react";

import CientificoImg from "../public/images/searches/Projeto de Pesquisa - EducaTEA.docx.pdf 1.png";
// import PitchImg from "../public/images/searches/pitch.png";
// import ResultadosImg from "../public/images/searches/resultados.png";

const contentMap = {
  cientifico: {
    title: "TRABALHO CIENTÍFICO",
    text: `Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500, quando um impressor
    desconhecido pegou uma bandeja de tipos e os misturou para criar
    um livro de amostras de tipos. Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500, quando um impressor
    desconhecido pegou uma bandeja de tipos e os misturou para criar
    um livro de amostras de tipos Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500, quando um impressor
    desconhecido pegou uma bandeja de tipos e os misturou para criar
    um livro de amostras de tipos Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500.`,
    image: CientificoImg,
  },
  pitch: {
    title: "PITCH DO PROJETO",
    text: `Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500, quando um impressor
    desconhecido pegou uma bandeja de tipos e os misturou para criar
    um livro de amostras de tipos. Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500, quando um impressor
    desconhecido pegou uma bandeja de tipos e os misturou para criar
    um livro de amostras de tipos Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500, quando um impressor
    desconhecido pegou uma bandeja de tipos e os misturou para criar
    um livro de amostras de tipos Lorem Ipsum é simplesmente um texto fictício da indústria
    tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício
    padrão da indústria desde os anos 1500.`,
    image: CientificoImg,
  },
  resultados: {
    title: "RESULTADOS ALCANÇADOS",
    text: `Os resultados demonstram a efetividade do projeto, evidenciando
    avanços educacionais, engajamento dos participantes e impactos
    positivos na aprendizagem e inclusão.`,
    image: CientificoImg,
  },
};

export default function Searches() {
  const [active, setActive] = useState("cientifico");
  const content = contentMap[active];

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center gap-16 px-6">

        {/* Main Content */}
        <div className="w-full flex items-center justify-between gap-16">

          {/* Left Image */}
          <div className="flex-shrink-0">
            <Image
              src={content.image}
              alt={content.title}
              className="shadow-lg"
              priority
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-between h-full text-white max-w-xl">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold tracking-wide">
                {content.title}
              </h1>

              <p className="leading-relaxed text-justify text-gray-200 w-10/12">
                {content.text}
              </p>
            </div>

            <button className="bg-[#F9A318] hover:bg-[#ffb338] cursor-pointer transition text-white font-semibold px-12 py-2.5 rounded-xl self-start mt-8">
              VISUALIZAR
            </button>
          </div>
        </div>

        {/* Bottom Selector */}
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

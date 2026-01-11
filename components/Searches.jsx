"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CientificoImg from "../public/images/searches/Projeto de Pesquisa - EducaTEA.docx.pdf 1.png";
import ResultadosImg from "../public/images/searches/Previsto_Realizado-1-1280x720 1.png";

const contentMap = {
  cientifico: {
    title: "TRABALHO CIENTÍFICO",
    text: "Confira nosso texto científico fundamental, um documento norteador desenvolvido para consolidar as diretrizes do ecossistema EducaTEA. Este artigo, fruto de uma trajetória marcada pela inovação social e pelo rigor técnico, detalha como estamos utilizando a tecnologia como uma ponte — e não uma barreira — para a inclusão efetiva de estudantes com Transtorno do Espectro Autista (TEA) e outras aprendizagens atípicas. O texto explora nossa metodologia apresentar um jogo educacional, este documento fundamenta a criação de um ambiente onde a educação se une ao cuidado e à autonomia, permitindo que profissionais da educação adaptem seus conteúdos de forma ética, abandonando modelos tradicionais engessados em prol de um impacto social real e mensurável. Ao longo destas páginas, discutimos a importância de um posicionamento ético frente à neurodiversidade, propondo soluções digitais que respeitam a singularidade de cada trajetória de aprendizagem. Este é um convite para que professores, famílias e pesquisadores se aprofundem em uma visão de mundo onde a acessibilidade digital é o ponto de partida para a verdadeira emancipação intelectual. Conheça as bases teóricas que sustentam nossa missão de de transformar a educação inclusiva em uma realidade prática, garantindo que o ensinar e o aprender sejam processos repletos de dignidade, suporte e autonomia para todos os envolvidos no ecossistema educacional.",
    image: CientificoImg,
  },
  pitch: {
    title: "PITCH DO PROJETO",
    text: "O cenário da educação brasileira enfrenta um desafio urgente: enquanto a OMS estima que 1 a cada 36 crianças seja diagnosticada com autismo, pesquisas do MEC apontam que 94% dos professores não possuem capacitação específica para a inclusão escolar. Foi para reduzir esse abismo que nasceu o EducaTEA, um projeto desenvolvido no Senac São Leopoldo por Arthur Cidade e Arthur Juwer. Nosso projeto é um Serious Game (jogo sério) narrativo, onde o conhecimento não é apenas transmitido, mas vivenciado. No jogo, o educador assume o papel de uma professora em uma nova escola, enfrentando situações reais que exigem decisões pedagógicas estratégicas para o suporte ao autismo nível 1. Diferente de métodos de formação tradicionais, o EducaTEA oferece feedback imediato baseado em evidências. Através de mecânicas inovadoras, como as barras de progresso de 'Inclusão' e 'Constrangimento', o jogador visualiza o impacto direto de suas escolhas no bem-estar do aluno e no ambiente escolar. Esse roteiro foi criado com rigor técnico de especialistas em Atendimento Educacional Especializado (AEE) e foi validado através da metodologia SUS, alcançando 100% de aprovação entre professores do Senac, que confirmam o potencial do jogo para a formação continuada. O EducaTEA é, acima de tudo, um ecossistema expansível. Além da experiência imersiva do jogo, nossa plataforma conta com um fórum dedicado ao compartilhamento de experiências entre docentes, fomentando uma rede de apoio profissional.",
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
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex justify-center px-4 sm:px-6"
      id="trabalhos"
    >
      <div className="w-full max-w-7xl flex flex-col items-center gap-12 sm:gap-16">

        {/* ================= MAIN CONTENT ================= */}
        <div className="w-full h-[520px] sm:h-[600px] flex items-center">
          <AnimatePresence mode="wait">
            {active === "resultados" ? (
              /* ===== RESULTADOS ===== */
              <motion.div
                key="resultados"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center gap-6 text-white"
              >
                <h1 className="text-2xl sm:text-3xl mb-6 font-bold text-center">
                  {content.title}
                </h1>

                <motion.div
                  initial={{ scale: 0.96 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex justify-center"
                >
                  <Image
                    src={content.image}
                    alt={content.title}
                    className="shadow-lg w-full max-w-3xl h-full object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            ) : (
              /* ===== CIENTÍFICO + PITCH ===== */
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  active === "pitch" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full lg:w-1/2 flex justify-center"
                >
                  <Image
                    src={content.image}
                    alt={content.title}
                    className="shadow-lg w-full max-w-md h-auto object-contain"
                    priority
                  />
                </motion.div>

                {/* Text */}
                <div className="w-full lg:w-1/2 flex flex-col text-white">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                    {content.title}
                  </h1>

                  <p className="text-sm sm:text-base leading-relaxed text-gray-200 text-justify">
                    {content.text}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#F9A318] hover:bg-[#ffb338] transition text-white font-semibold
                               px-10 py-2.5 rounded-xl mt-6 self-center lg:self-start"
                  >
                    VISUALIZAR
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ================= SELECTOR ================= */}
        <div className="flex flex-wrap justify-center gap-2 border-2 border-[#0033FF] rounded-full overflow-hidden font-semibold">
          {["cientifico", "pitch", "resultados"].map((item) => (
            <motion.button
              key={item}
              onClick={() => setActive(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 sm:px-10 py-2 transition ${
                active === item
                  ? "bg-[#0033FF] text-white font-bold"
                  : "text-white hover:bg-[#0033FF]/20"
              }`}
            >
              {item.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

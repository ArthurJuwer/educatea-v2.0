"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import CientificoImg from "../public/images/searches/Projeto de Pesquisa - EducaTEA.docx.pdf 1.png";
import ResultadosImg from "../public/images/searches/Previsto_Realizado-1-1280x720 1.png";

// Mapeamento apenas das imagens (estático)
const imageMap = {
  cientifico: CientificoImg,
  pitch: CientificoImg,
  resultados: ResultadosImg,
};

export default function Searches() {
  const [active, setActive] = useState("cientifico");
  const { t } = useLanguage();

  // Construção dinâmica do conteúdo baseada na língua atual
  const content = {
    title: t(`components.searches.${active}.title`),
    text: t(`components.searches.${active}.text`), // Retorna undefined se não houver texto (caso de resultados)
    image: imageMap[active],
  };

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
                    {t('components.searches.button')}
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
              {t(`components.searches.tabs.${item}`)}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
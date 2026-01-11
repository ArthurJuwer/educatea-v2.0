"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Linkedin from "../public/images/icons/Linkedin.png";

/* ================= DADOS ================= */

const desenvolvedores = [
  {
    nome: "Arthur Cidade Matjjie",
    imagem: "/images/team/ArthurCidade.jpg",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },
  {
    nome: "Arthur Juwer Rambo",
    imagem: "/images/team/ArthurJuwer.png",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },
];

const orientadores = [
  {
    nome: "Gabriele de Oliveira",
    imagem: "/images/team/Gabriele.jpg",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },
  {
    nome: "Gabriel Moraes",
    imagem: "/images/team/GabrielMoraes.jpg",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },
  {
    nome: "Elisangela",
    imagem: "/images/team/Gabriele.jpg",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },
];

/* ================= VARIANTS ================= */

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ================= FLIP CARD ================= */

function FlipCard({ pessoa }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const leaveTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeout.current);
    setIsFlipped(true); // vira imediatamente
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = setTimeout(() => {
      setIsFlipped(false);
    }, 300); // delay apenas para desvirar
  };

  return (
    <motion.article
      variants={cardVariant}
      className="relative w-[288px] h-[320px] cursor-pointer [perspective:1200px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.85, ease: "easeInOut" }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* ================= FRENTE ================= */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            src={pessoa.imagem}
            alt={pessoa.nome}
            width={288}
            height={288}
            className="bg-[#D9D9D9] rounded-xl"
          />

          <a
            href={pessoa.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 rounded-full shadow hover:scale-110 transition"
          >
            <Image src={Linkedin} alt="LinkedIn" className="h-6 w-6" />
          </a>

          <label className="bg-[#242424] text-white p-3 text-center font-bold w-full absolute bottom-0 rounded-bl-xl rounded-br-xl">
            {pessoa.nome}
          </label>
        </div>

        {/* ================= VERSO ================= */}
        <div className="absolute inset-0 bg-[#0033FF] rounded-xl flex flex-col items-center justify-center gap-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="font-bold text-lg text-center px-4">
            {pessoa.nome}
          </p>

          <a
            href={pessoa.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#0033FF] px-5 py-2 rounded-lg font-bold hover:scale-105 transition"
          >
            <Image src={Linkedin} alt="LinkedIn" className="h-6 w-6" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* ================= COMPONENTE ================= */

export default function Team() {
  return (
    <section
      id="equipe"
      className="flex flex-col gap-6 items-center justify-center"
    >
      {/* TÍTULO */}
      <motion.h1
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#0033FF] text-center text-white uppercase font-bold p-3 px-6 w-full text-2xl lg:mb-10"
      >
        Equipe
      </motion.h1>

      <div className="lg:flex lg:flex-col lg:items-center lg:gap-14 w-full">

        {/* ================= DESENVOLVEDORES ================= */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          <h2 className="uppercase text-center font-bold text-3xl">
            Desenvolvedores
          </h2>

          <motion.div
            variants={gridVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8"
          >
            {desenvolvedores.map((dev, index) => (
              <FlipCard key={index} pessoa={dev} />
            ))}
          </motion.div>
        </motion.div>

        {/* ================= ORIENTADORES ================= */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-12 mb-12"
        >
          <h2 className="uppercase text-center font-bold text-3xl mt-6 lg:mt-0">
            Orientadores
          </h2>

          <motion.div
            variants={gridVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8"
          >
            {orientadores.map((ori, index) => (
              <FlipCard key={index} pessoa={ori} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

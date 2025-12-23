"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Linkedin from "../public/images/icons/Linkedin.png";

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
    nome: "Gabriele de Oliveira",
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
              <motion.article
                key={index}
                variants={cardVariant}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center justify-center relative cursor-pointer"
              >
                {/* IMAGEM */}
                  <Image
                    src={dev.imagem}
                    alt={dev.nome}
                    width={288}
                    height={288}
                    className="bg-[#D9D9D9] rounded-xl"
                  />

                {/* LINKEDIN */}
                <motion.a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4"
                >
                  <Image src={Linkedin} alt="LinkedIn" className="h-6 w-6" />
                </motion.a>

                {/* NOME */}
                <label className="bg-[#242424] text-white p-3 text-center font-bold w-full -mt-3 rounded-bl-xl rounded-br-xl">
                  {dev.nome}
                </label>
              </motion.article>
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
              <motion.article
                key={index}
                variants={cardVariant}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center justify-center relative cursor-pointer"
              >
                
                  <Image
                    src={ori.imagem}
                    alt={ori.nome}
                    width={288}
                    height={288}
                    className="bg-[#D9D9D9] rounded-xl"
                  />
                

                <motion.a
                  href={ori.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4"
                >
                  <Image src={Linkedin} alt="LinkedIn" className="h-6 w-6" />
                </motion.a>

                <label className="bg-[#242424] text-white p-3 text-center font-bold w-full -mt-3 rounded-bl-xl rounded-br-xl">
                  {ori.nome}
                </label>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

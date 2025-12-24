"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import TextLogo from "../public/images/logos/TextLogo.png";
import BrasilFlag from "../public/images/languages/Brasil.png";
import { LanguageSelectHeader } from "./sub-components/LanguageSelectHeader";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 100) {
      setHidden(true); // descendo
    } else {
      setHidden(false); // subindo
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-500%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="h-[13dvh] sticky top-0 z-40 flex items-center justify-between px-6 md:px-10 bg-white text-black font-bold"
        id=""
      >
        {/* LOGO */}
        <Image src={TextLogo} width={170} height={60} alt="Logo" />

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-x-10 list-none">
          <button className="bg-[#1A3879] text-white px-10 py-3 rounded-full">
            JOGAR
          </button>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer hover:opacity-80"
          >
            <a href="#apresentacao">APRESENTAÇÃO</a>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer hover:opacity-80"
          >
            <a href="#feiras">FEIRAS</a>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer hover:opacity-80"
          >
            <a href="#trabalhos">TRABALHOS</a>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer hover:opacity-80"
          >
            <a href="#comunidade">COMUNIDADE</a>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer hover:opacity-80"
          >
            <a href="#equipe">EQUIPE</a>
          </motion.li> 
        </nav>

        {/* AÇÕES DESKTOP */}
        <div className="hidden md:flex items-center gap-x-4">
          <button className="bg-[#F9A318] text-white px-12 py-3 rounded-full">
            DISPONÍVEL AGORA
          </button>
          <li className="list-none">
            <LanguageSelectHeader />
          </li>
         
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(true)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </motion.header>

      {/* MENU MOBILE (SEM ANIMAÇÃO INTERNA) */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex items-center justify-between mb-10">
            <Image src={TextLogo} width={150} height={50} alt="Logo" />
            <button onClick={() => setOpen(false)} className="text-3xl">
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg list-none">
            <button className="bg-[#1A3879] text-white py-3 rounded-full">
              JOGAR
            </button>
            <li><a href="#header">APRESENTAÇÃO</a></li>
            <li><a href="#feiras">FEIRAS</a></li>
            <li><a href="#trabalhos">TRABALHOS</a></li>
            <li><a href="#comunidade">COMUNIDADE</a></li>
            <li><a href="#equipe">EQUIPE</a></li>
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <button className="bg-[#F9A318] text-white py-3 rounded-full">
              DISPONÍVEL AGORA
            </button>
            <Image src={BrasilFlag} width={35} height={25} alt="Idioma" />
          </div>
        </div>
      )}
    </>
  );
}

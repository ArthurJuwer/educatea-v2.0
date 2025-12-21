"use client";

import { useState } from "react";
import Image from "next/image";
import TextLogo from "../public/images/logos/TextLogo.png";
import BrasilFlag from "../public/images/languages/Brasil.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-[13dvh] flex items-center justify-between px-6 md:px-10 bg-white text-black font-bold relative">
      
      {/* LOGO */}
      <Image src={TextLogo} width={170} height={60} alt="Logo" />

      {/* MENU DESKTOP */}
      <nav className="hidden md:flex items-center gap-x-10">
        <button className="bg-[#1A3879] text-white px-10 py-3 rounded-full">
          JOGAR
        </button>
        <span>APRESENTAÇÃO</span>
        <span>FEIRAS</span>
        <span>TRABALHO</span>
        <span>COMUNIDADE</span>
        <span>EQUIPE</span>
      </nav>

      {/* AÇÕES DESKTOP */}
      <div className="hidden md:flex items-center gap-x-4">
        <button className="bg-[#F9A318] text-white px-12 py-3 rounded-full">
          DISPONÍVEL AGORA
        </button>
        <Image src={BrasilFlag} width={35} height={25} alt="Idioma" />
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

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          
          {/* TOPO */}
          <div className="flex items-center justify-between mb-10">
            <Image src={TextLogo} width={150} height={50} alt="Logo" />
            <button onClick={() => setOpen(false)} className="text-3xl">
              ✕
            </button>
          </div>

          {/* LINKS */}
          <nav className="flex flex-col gap-6 text-lg">
            <button className="bg-[#1A3879] text-white py-3 rounded-full">
              JOGAR
            </button>
            <span>APRESENTAÇÃO</span>
            <span>FEIRAS</span>
            <span>TRABALHO</span>
            <span>COMUNIDADE</span>
            <span>EQUIPE</span>
          </nav>

          {/* AÇÕES */}
          <div className="mt-auto flex flex-col gap-4">
            <button className="bg-[#F9A318] text-white py-3 rounded-full">
              DISPONÍVEL AGORA
            </button>
            <Image src={BrasilFlag} width={35} height={25} alt="Idioma" />
          </div>
        </div>
      )}
    </header>
  );
}

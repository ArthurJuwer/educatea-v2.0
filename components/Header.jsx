"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// Importações de imagens
import TextLogo from "../public/images/logos/TextLogo.png";
import BrasilFlag from "../public/images/languages/Brasil.png"; // Usado apenas no mobile como fallback visual
import User from "../public/images/icons/user.png";
import { User2 } from "lucide-react";

// Componentes
import { LanguageSelectHeader } from "./sub-components/LanguageSelectHeader";
import UserModal from "./login/ModalUsuario";

// Import do Hook de Tradução
import { useLanguage } from "@/context/LanguageContext"; // <--- AJUSTE O CAMINHO SE NECESSÁRIO

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hook de tradução
  const { t } = useLanguage();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Array de configuração do menu para facilitar a tradução no map
  const navItems = [
    { id: "presentation", href: "#apresentacao" },
    { id: "fairs", href: "#feiras" },
    { id: "works", href: "#trabalhos" },
    { id: "community", href: "#comunidade" },
    { id: "team", href: "#equipe" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-500%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="h-[13dvh] sticky top-0 z-30 flex items-center justify-between px-6 md:px-10 bg-white text-black font-bold"
      >
        {/* LOGO */}
        <a href="./">
          <Image src={TextLogo} width={170} height={60} alt="Logo" />
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-x-10 list-none">
          <button className="bg-[#1A3879] text-white px-10 py-3 rounded-full">
            {t('components.header.play')}
          </button>
          
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer hover:opacity-80 text-sm uppercase"
            >
              <a href={item.href}>
                {t(`components.header.menu.${item.id}`)}
              </a>
            </motion.li>
          ))}
        </nav>

        {/* AÇÕES DESKTOP */}
        <div className="hidden md:flex items-center gap-x-4">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="transition-opacity cursor-pointer hover:opacity-70"
            title={t('components.header.actions.open_profile')}
          >
            <User2 width={45} height={30} alt="User Icon" />
          </button>
          <li className="list-none">
            {/* O seletor de linguagem já cuida da troca */}
            <LanguageSelectHeader />
          </li>
        </div>

        {/* HAMBURGER MOBILE */}
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(true)}>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </motion.header>

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex items-center justify-between mb-10">
            <Image src={TextLogo} width={150} height={50} alt="Logo" />
            <button onClick={() => setOpen(false)} className="text-3xl">✕</button>
          </div>

          <nav className="flex flex-col gap-6 text-lg list-none">
            <button className="bg-[#1A3879] text-white py-3 rounded-full">
              {t('components.header.play')}
            </button>
            
            {navItems.map((item) => (
               <li key={item.id}>
                 <a href={item.href} onClick={() => setOpen(false)}>
                    {t(`components.header.menu.${item.id}`)}
                 </a>
               </li>
            ))}
          </nav>

          <div className="mt-auto flex items-center gap-4">
            <button onClick={() => { setOpen(false); setIsModalOpen(true); }}>
              <Image src={User} width={35} height={25} alt="Perfil" />
            </button>
            {/* No mobile você pode optar por colocar o componente LanguageSelectHeader aqui também se quiser o dropdown */}
             <LanguageSelectHeader /> 
          </div>
        </div>
      )}

      {/* COMPONENTE DO MODAL */}
      <UserModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
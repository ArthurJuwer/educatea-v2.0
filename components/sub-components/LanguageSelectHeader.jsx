"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import FlagBrasil from "../../public/images/languages/Brasil.png"
import FlagPortugal from "../../public/images/languages/Portugal.png"
import FlagAngola from "../../public/images/languages/Angola.png"
import FlagUS from "../../public/images/languages/US.png"
import FlagEspanha from "../../public/images/languages/Espanha.png"
import FlagLatAm from "../../public/images/languages/LatAm.png"

const languages = [
  {
    id: "pt-br",
    label: "Português (Brasil)",
    flag: FlagBrasil,
  },
  {
    id: "pt-pt",
    label: "Português (Portugal)",
    flag: FlagPortugal,
  },
  {
    id: "pt-ag",
    label: "Português (Angola)",
    flag: FlagAngola,
  },
  {
    id: "en-us",
    label: "English (US)",
    flag: FlagUS,
  },
  {
    id: "es-es",
    label: "Español",
    flag: FlagEspanha,
  },
  {
    id: "es-al",
    label: "Español (LatAm)",
    flag: FlagLatAm,
  },
];

export function LanguageSelectHeader() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  return (
    <div className="relative">
      {/* Botão */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          cursor-pointer
          hover:opacity-80
          transition
        "
      >
        <Image
          src={selected.flag}
          className="w-12 h-8 rounded"
          alt={selected.label}
        />
        {/* <span>{selected.label}</span> */}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="
              absolute top-full right-0 mt-8
              bg-[#2f2f2f]
              rounded-lg
              shadow-lg
              overflow-hidden
              min-w-[250px]
              z-50
            "
          >
            {languages.map((lang) => (
              <li
                key={lang.id}
                onClick={() => {
                  setSelected(lang);
                  setOpen(false);
                }}
                className="
                  flex items-center gap-4
                  px-4 py-2
                  cursor-pointer
                  hover:bg-white/10
                  transition
                "
              >
                <Image
                  src={lang.flag}
                  width={20}
                  height={20}
                  alt={lang.label}
                />
                <span className="text-white text-sm">{lang.label}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

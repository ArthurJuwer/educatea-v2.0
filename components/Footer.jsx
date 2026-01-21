"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageSelectFooter } from "./sub-components/LanguageSelectFooter";
import { Instagram } from "lucide-react";

/* ================= VARIANTS ================= */


export default function Footer() {
  return (
    <footer
      className="
        bg-[#242424] text-white text-sm font-semibold
        py-8 px-4
        flex flex-col gap-6
        items-center
        lg:flex-row lg:justify-around lg:gap-0
        lg:mt-12
        text-center lg:text-left
      "
    >
      <p>
        © EducaTEA - Todos os direitos reservados.
      </p>

      <span className="lg:hidden h-0.5 w-4/5 block bg-white"></span>

      {/* Navigation */}
      <nav >
        <ul
          className="
            lg:flex lg:gap-10 gap-4 items-center
            grid grid-cols-2 place-content-center place-items-center
          "
        >
          {/* Comunidade */}
          <a
            href="/comunidade"
            className="cursor-pointer hover:opacity-80"
          >
            Comunidade
          </a>

          {/* Termos */}
          <a
            href="/termos"
            className="cursor-pointer hover:opacity-80"
          >
            Termos de uso
          </a>

          {/* Language */}
          <li className="w-[175px] flex items-center justify-center">
            <LanguageSelectFooter />
          </li>


          {/* Instagram */}
          <li
            className="
              cursor-pointer
              size-10
              rounded-full
              flex items-center justify-center
              bg-[#0033FF]
            "
          >
            <Instagram />
          </li>
        </ul>
      </nav>
    </footer>
  );
}

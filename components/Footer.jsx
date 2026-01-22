"use client";

import { LanguageSelectFooter } from "./sub-components/LanguageSelectFooter";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

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
        {t('components.footer.copyright')}
      </p>

      <span className="lg:hidden h-0.5 w-4/5 block bg-white"></span>

      {/* Navigation */}
      <nav>
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
            {t('components.footer.community')}
          </a>

          {/* Termos */}
          <a
            href="/termos"
            className="cursor-pointer hover:opacity-80"
          >
            {t('components.footer.terms')}
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
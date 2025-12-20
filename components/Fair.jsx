"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

import Feira1 from "../public/images/feiras/Feira1.png";
import Feira2 from "../public/images/feiras/Feira2.png";
import Feira3 from "../public/images/feiras/Feira3.png";
import Feira4 from "../public/images/feiras/Feira4.png";
import Feira5 from "../public/images/feiras/Feira5.png";
import Feira6 from "../public/images/feiras/Feira6.png";

import FeiraLogo1 from "../public/images/feiras/logo/FeiraLogo1.png";
import FeiraLogo2 from "../public/images/feiras/logo/FeiraLogo2.png";
import FeiraLogo3 from "../public/images/feiras/logo/FeiraLogo3.png";
import FeiraLogo4 from "../public/images/feiras/logo/FeiraLogo4.png";
import FeiraLogo5 from "../public/images/feiras/logo/FeiraLogo5.png";
import FeiraLogo6 from "../public/images/feiras/logo/FeiraLogo6.png";

export default function Fair() {
  const feiras = [
    { id: 1, image: Feira1, logo: FeiraLogo1, title: "Feira de Projetos SENAC RS" },
    { id: 2, image: Feira2, logo: FeiraLogo2, title: "MostraPoa IFRS" },
    { id: 3, image: Feira3, logo: FeiraLogo3, title: "Mostra Científica SENAC SL" },
    { id: 4, image: Feira4, logo: FeiraLogo4, title: "Feevale Inovamundi" },
    { id: 5, image: Feira5, logo: FeiraLogo5, title: "MOCITEC IFSUL Charqueadas" },
    { id: 6, image: Feira6, logo: FeiraLogo6, title: "Desafio Liga Jovem" },
  ];

  const [index, setIndex] = useState(0);

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feiras.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [feiras.length]);

  // Sempre renderiza 3 (anterior, atual, próximo)
  const visibleFeiras = [
    feiras[(index - 1 + feiras.length) % feiras.length],
    feiras[index],
    feiras[(index + 1) % feiras.length],
  ];

  return (
    <section className="w-full py-8 overflow-hidden">
      <h1 className="text-center text-white xl:text-3xl 2xl:mb-25 font-bold xl:mb-20">
        NOSSAS PARTICIPAÇÕES EM FEIRAS
      </h1>

      <div className="flex items-center justify-center 2xl:gap-8 xl:gap-6 px-4">
        {visibleFeiras.map((feira, i) => {
          const isCenter = i === 1;

          return (
            <div
              key={feira.id}
              className={`
                relative rounded-xl overflow-hidden 
                ${isCenter
                  ? "scale-110 z-20 2xl:w-[480px] 2xl:h-[460px] xl:w-[440px] xl:h-[420px]"
                  : "scale-95 opacity-70 2xl:w-[440px] 2xl:h-[420px]  w-[400px] h-[380px]"}
              `}
            >
              <Image
                src={feira.image}
                alt={feira.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-transparent p-2 rounded-md">
                  <Image
                    src={feira.logo}
                    alt="Logo"
                    width={120}
                    height={120}
                  />
                </span>

                <p className="text-white text-sm font-semibold text-right max-w-[150px]">
                  {feira.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

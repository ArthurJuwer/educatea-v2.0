import React from "react";
import Image from "next/image";

import FeiraLogo1 from "../public/images/feiras/logo/FeiraLogo1.png";
import FeiraLogo2 from "../public/images/feiras/logo/FeiraLogo2.png";
import FeiraLogo3 from "../public/images/feiras/logo/FeiraLogo3.png";
import FeiraLogo4 from "../public/images/feiras/logo/FeiraLogo4.png";
import FeiraLogo5 from "../public/images/feiras/logo/FeiraLogo5.png";
import FeiraLogo6 from "../public/images/feiras/logo/FeiraLogo6.png";

export default function FairLogos() {
  const feiras = [
    { id: 1, logo: FeiraLogo1, date: "22/04/2025", title: "Feira de Projetos SENAC RS" },
    { id: 2, logo: FeiraLogo2, date: "10/05/2025", title: "Mostra IFRS" },
    { id: 3, logo: FeiraLogo3, date: "18/06/2025", title: "Mostra Científica" },
    { id: 4, logo: FeiraLogo4, date: "02/07/2025", title: "Feevale Inovamundi" },
    { id: 5, logo: FeiraLogo5, date: "15/08/2025", title: "MOCITEC IFSUL Charqueadas" },
    { id: 6, logo: FeiraLogo6, date: "01/09/2025", title: "Desafio Liga Jovem" },
  ];

  return (
    <div
      className="
        w-full
        flex
        gap-6
        px-4
        overflow-x-auto
        flex-nowrap
        snap-x snap-mandatory
        sm:justify-center
        sm:flex-wrap
        sm:overflow-visible
        sm:gap-20
      "
    >
      {feiras.map((feira) => (
        <div
          key={feira.id}
          className="
            group
            min-w-[160px]
            h-[100px]
            snap-center
            [perspective:1000px]
          "
        >
          {/* Card */}
          <div className="relative w-full h-full transition-transform duration-700 backface-hidden [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

            {/* Front */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={feira.logo}
                alt={feira.title}
                width={200}
                height={140}
                className="object-contain"
              />
            </div>

            {/* Back */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b1320] text-white [transform:rotateY(180deg)] backface-hidden px-3 text-center">
              <p className="text-xs font-semibold">{feira.title}</p>
              <span className="text-sm mt-1 text-gray-300">
                {feira.date}
              </span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

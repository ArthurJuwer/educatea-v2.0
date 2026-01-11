"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Pdf from "../../public/images/icons/pdf.png";
import Forms from "../../public/images/icons/forms.png";
import Drive from "../../public/images/icons/drive.png";

export default function Termos() {
  const [hovered, setHovered] = useState(null);

  const buttons = [
    {
      id: "pdf",
      label: "Licença MIT",
      color: "#F91818",
      icon: Pdf,
    },
    {
      id: "forms",
      label: "Formulários",
      color: "#5A3E9C",
      icon: Forms,
    },
    {
      id: "drive",
      label: "Drive",
      color: "#0B7E13",
      icon: Drive,
    },
  ];

  return (
    <div>
      <hr />

      <motion.div
        className="max-w-11/12 lg:max-w-10/12 2xl:min-h-[70.9dvh] mx-auto flex flex-col gap-6 px-6 py-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold">Termos de Uso</h1>

        <p className='text-lg'>Lorem Ipsum é simplesmente orem Ipsum é simplesmenteorem Ipsum é simplesmenteorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os misturou para criar um livro de amostras de tipos. <br /> <br /> Ele sobreviveu não apenas a ci orem Ipsum é simplesmenteorem Ipsum é simplesmente nco séculos, mas também à transição para a editoração eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com softwares de editoração eletrônica como o Aldus PageMaker. com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com softwares de editoração eletrônica como o Aldus PageMaker.com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente. </p>

        {/* Buttons */}
        <div className="flex gap-4 items-center font-semibold flex-wrap">
          {buttons.map((btn) => {
            const isHovered = hovered === btn.id;

            return (
              <motion.button
                key={btn.id}
                onMouseEnter={() => setHovered(btn.id)}
                onMouseLeave={() => setHovered(null)}
                whileTap={{ scale: 0.96 }}
                animate={{
                  backgroundColor: isHovered ? btn.color : "#ffffff",
                  color: isHovered ? "#ffffff" : btn.color,
                }}
                transition={{ duration: 0.2 }}
                className="relative cursor-pointer flex items-center justify-center gap-2 border-2 rounded-lg h-12 w-56 overflow-hidden"
                style={{
                  borderColor: btn.color,
                }}
              >
                {/* Icon */}
                <motion.div
                  className="absolute left-4"
                  animate={{
                    x: isHovered ? 6 : 0,
                    filter: isHovered ? "brightness(0) invert(1)" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={btn.icon} alt="" className="w-5" />
                </motion.div>

                {/* Text */}
                <motion.span
                  key={isHovered ? "baixar" : "label"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm font-semibold"
                >
                  {isHovered ? "Baixar" : btn.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

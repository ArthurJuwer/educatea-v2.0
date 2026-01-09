import React from "react";
import Image from "next/image";
import IconAcessibilidade from "../../public/images/icons/Acessibilidade.png";

export default function AcessibilidadeButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#F91818] w-[240px] cursor-pointer border-2 border-white rounded-full text-white flex justify-between gap-3 py-1.5 px-5 items-center font-semibold hover:opacity-90 transition"
    >
      <Image src={IconAcessibilidade} className="h-11 w-11" alt="Chatbot" />
      <p className="w-full">Acessibilidade</p>
    </div>
  );
}

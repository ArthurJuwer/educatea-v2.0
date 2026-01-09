import React from "react";
import Image from "next/image";
import ChatFace from "../../public/images/avatars/avatar09.png";

export default function ChatbotButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#F9A318] w-[240px] z-40 cursor-pointer border-2 border-white rounded-full text-white flex justify-between gap-3 py-1.5 px-5 items-center font-semibold hover:opacity-90 transition"
    >
      <Image src={ChatFace} className="size-11" alt="Chatbot" />
      <p className="w-full">Fale com Chatbot</p>
    </div>
  );
}

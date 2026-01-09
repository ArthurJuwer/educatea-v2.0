"use client";

import {
  Power,
  Volume2,
  Search,
  Type,
  Link2,
  Keyboard,
  ZoomIn,
  Plus,
  X,
  Redo2,
  Undo2,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import TextLogo from "../../public/images/logos/TextLogo.png";
import BrasilFlag from "../../public/images/languages/Brasil.png";
import { LanguageSelectFooter } from "../sub-components/LanguageSelectFooter";

export default function AcessibilidadeCard({ onClose }) {
  return (
    <div className="-z-20 relative w-[450px] max-h-[70dvh] overflow-y-auto bg-[#EAEAEA] overflow-x-hidden  rounded-3xl py-4 px-3 flex flex-col text-white shadow-xl">
      {/* Header */}
    <div className="-z-10 bg-[#143A7B] w-[450px] px-4 h-[35%] absolute top-0 right-0"></div>

      <div className="flex items-center justify-between">
              
      <div className=""></div>

      <button onClick={onClose}>
        <ChevronDown className="w-6 h-6 text-white hover:text-gray-400 cursor-pointer" />
      </button> 
      </div>

      <h2 className="text-center text-lg font-semibold my-5">
        Painel de Acessibilidade
      </h2>

      {/* Ações */}
      <div className="flex gap-3 mb-4">
        <ActionButton icon={<Undo2 size={16} />} label="Voltar" />
        <ActionButton icon={<Power size={16} />} label="Desligar" />
        <ActionButton icon={<Redo2 size={16} />} label="Avançar" />
      </div>

      {/* Conteúdo */}
        {/* Daltonismo */}
        <div className="flex flex-col gap-5">
          <Section title="Daltonismo" rightIcon={<Plus size={16} /> } >
              <div className="grid grid-cols-2 gap-3">
                <ColorCard
                  label="Sem daltonismo"
                  gradient="from-indigo-500 via-green-400 to-red-500"
                />
                <ColorCard
                  label="Tritanopia"
                  gradient="from-teal-500 to-red-500"
                />
                <ColorCard
                  label="Protonopia"
                  gradient="from-blue-700 to-yellow-400"
                />
                <ColorCard
                  label="Deuteranopia"
                  gradient="from-green-600 to-yellow-500"
                />
              </div>
              
              <h3 className="font-semibold text-base my-3">Opções Gerais</h3>

              <div className="grid grid-cols-3 gap-3">
                <Option icon={<Volume2 />} label="Leitor de texto" />
                <Option icon={<Search />} label="Lupa" />
                <Option icon={<Type />} label="Fonte Legível" />
                <Option icon={<Link2 />} label="Destacar Links" />
                <Option icon={<Keyboard />} label="Teclado virtual" />
                <Option icon={<ZoomIn />} label="Ampliador de Texto" />
              </div>
         
            </Section>
        
            {/* Modelos prontos */}
          <Section title="Modelos prontos" rightIcon={<Plus size={16} />}>
            <Model label="Pessoa cega" />
            <Model label="Pessoa TDAH" />
            <Model label="Pessoa Dislexa" />
            <Model label="Pessoa com Alta idade" />
            <Model label="Pessoa com Parkinson" />
          </Section>

            <div className="flex items-center justify-center">
            <Image src={TextLogo} className="w-24" alt="" />
          </div>
        </div>
        
        
      
    </div>
  );
}

/* COMPONENTES AUXILIARES */

function ActionButton({ icon, label }) {
  return (
    <button className="flex items-center gap-1 bg-white text-[#143A7B] rounded-full px-3 py-1 text-sm font-medium flex-1 justify-center">
      {icon}
      {label}
    </button>
  );
}

function Section({ title, children, rightIcon }) {
  return (
    <div className="bg-white text-[#454545] rounded-2xl p-4 flex-1 ">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-base">{title}</h3>
        <div className="size-5 bg-[#54536A] text-white flex items-center justify-center rounded-[6px] cursor-pointer">
          {rightIcon}
        </div>
      </div>
      {children}
    </div>
  );
}

function ColorCard({ label, gradient }) {
  return (
    <div className="bg-white rounded-lg p-2 border border-[#CFCFCF]">
      <div className={`h-4 rounded mx-1 my-2 bg-gradient-to-r ${gradient}`} />
      <p className="text-xs text-center">{label}</p>
    </div>
  );
}

function Option({ icon, label }) {
  return (
    <button className="bg-white rounded-lg p-3.5 flex text-center justify-center flex-col items-center gap-2 text-xs border border-[#CFCFCF] text-[#1A3879] hover:bg-gray-50 transition">
      {icon}
      <span className="text-center">{label}</span>
    </button>
  );
}

function Model({ label }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#EFEFEF] last:border-none">
      <div className="flex items-center gap-2">
        <div className="size-6 rounded-full bg-[#E5E5E5]" />
        <span className="text-sm text-[#454545]">{label}</span>
      </div>

      {/* OFF / ON exatamente como na imagem */}
      <div className="relative flex items-center gap-2 text-[11px] text-gray-400">
        <span className="absolute right-10 border border-[#F7F7F7] bg-white p-1 w-14 flex text-center items-center justify-center rounded-full z-50 text-[#454545]">OFF</span>      
        <span className="absolute right-0 bg-[#e4e7eb] p-1 w-14 flex text-center items-center justify-center rounded-full z-10 text-[#454545]">ON</span>
      </div>
    </div>
  );
}

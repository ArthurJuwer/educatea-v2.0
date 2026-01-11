"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import IconsUsers from "../../public/images/icons/iconsUser.png"

export default function ModalUsuario({ isOpen, onClose }) {
  // Estados: 'selection' | 'login' | 'register' | 'register_step2'
  const [view, setView] = useState("selection");
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    if (!isOpen) {
      setView("selection");
      setSelectedTags([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const tags = [
    "Admin", "Desenvolvedor", "Aluno", "AEE", 
    "Psicóloga", "Senac RS", "Professor", "Tutor", 
    "Pessoa com TEA", "TEA 1", "TEA 2", "TEA 3"
  ];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const InputField = ({ label, placeholder, type = "text", info, hasForgot }) => (
    <div className="w-full">
      <label className="block text-lg font-bold text-black mb-1 text-left">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full mt-1 bg-[#D9D9D9] border-none rounded-[7px] font-medium placeholder:font-light p-3 pl-4 placeholder:text-[#828282] outline-none text-[15px]"
        />
        {hasForgot && (
          <button className="absolute right-3 mt-0.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#828282] uppercase">
            Esqueceu?
          </button>
        )}
      </div>
      {info && <p className="text-[12px] text-orange-600 mt-1 font-medium leading-tight">{info}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[415px] bg-white rounded-[20px]  shadow-2xl flex flex-col items-center">
        
        {/* Close Button */}
        <button onClick={onClose} className="cursor-pointer absolute top-8 right-5 text-2xl font-light text-gray-800">
            <X />
        </button>

        {/* --- TELA 1: SELEÇÃO --- */}
        {view === "selection" && (
          <div className="w-full flex flex-col gap-1 animate-in fade-in duration-300">
            <h2 className="text-[26px] font-bold text-center border-b-2 border-[#D9D9D9] py-5 mb-5">Escolha uma opção</h2>
            <div className="p-6 pt-0">
            <button onClick={() => setView("register")} className="w-full bg-[#1A3879] text-white font-bold py-4 rounded-xl cursor-pointer">Criar nova conta</button>
            <div className="flex items-center my-5">
                <div className="flex-grow border-t-2 border-[#D9D9D9]">
                    </div>
                    <span className="px-3 text-[#828282] text-base">ou</span>
                <div className="flex-grow border-t-2 border-[#D9D9D9]">
                    </div>
                </div>
            <button onClick={() => setView("login")} className="w-full border-2 border-[#1A3879] text-[#1A3879] font-bold py-3.5 rounded-xl cursor-pointer">Entrar</button>
            <p className="mt-3 text-center text-xs text-gray-500 px-4">
              Ao possuir uma conta você concorda com os <br />
              <span className="font-bold underline">termos de uso</span> e <span className="font-bold underline">politica de privacidade</span>
            </p>
            </div>
          </div>
        )}

        {/* --- TELA 2: LOGIN --- */}
        {view === "login" && (
          <div className="w-full animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-[26px] font-bold text-center border-b-2 border-[#D9D9D9] py-5 mb-5">Entrar</h2>
            <div className="p-6 pt-0 flex flex-col gap-3">
                <InputField label="Email:" placeholder="ex: joaopedro@gmail.com" type="email" />
                <InputField label="Senha:" placeholder="ex: Aa12345#" type="password" hasForgot />
                <button className="w-full bg-[#1A3879] text-white font-semibold py-3 rounded-xl mt-3 cursor-pointer">Acessar sua conta</button>
                <button onClick={() => setView("selection")} className="w-full text-xs text-gray-400 underline mt-1 cursor-pointer">Voltar</button>
            </div>
          </div>
        )}

        {/* --- TELA 3: CADASTRO PARTE 1 --- */}
        {view === "register" && (
          <div className="w-full animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-[26px] font-bold text-center border-b-2 border-[#D9D9D9] py-5 mb-5">Cadastro Rápido</h2>
            <div className="p-6 pt-0 flex flex-col gap-3">
                <InputField label="Como podemos te chamar?" placeholder="ex: João Pedro" />
                <InputField label="Email:" placeholder="ex: joaopedro@gmail.com" type="email" />
                <InputField label="Senha:" placeholder="ex: a123456#" type="password"  />
                <InputField label="Repita a Senha:" placeholder="ex: Aa12345#" info="**Precisa ter no mínimo 8 caracteres; 1 número e um caractere especial." type="password" />
                
                <button onClick={() => setView("register_step2")} className="w-full bg-[#1A3879] text-white font-bold py-4 rounded-xl mt-2 cursor-pointer">Próximo</button>

                    <div className="flex items-center justify-center">
                        <div className="flex gap-2 mt-6"><div className="w-2.5 h-2.5 rounded-full bg-[#1A3879]"></div><div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </div>
          </div>
        )}

        {/* --- TELA 4: PERSONALIZAÇÃO (SUA NOVA SEÇÃO) --- */}
        {view === "register_step2" && (
          <div className="w-full animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-[26px] font-bold text-center border-b-2 border-[#D9D9D9] py-5 mb-5">Personalize sua conta</h2>
            <div className="p-6 pt-0 flex flex-col gap-3">

                <div className="w-full mb-3">
                    <label className="block text-xl font-bold mb-4">Selecione seu ícone:</label>
                    <div className="flex justify-between items-center">
                    
                    <div className="w-20 h-20 bg-[#5B63B1] rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                    {/* Aqui entrará sua imagem do homem negro futuramente */}
                    <span className="text-white text-xs text-center p-1 cursor-pointer">Ícone aqui</span>
                    </div>
                    
                <Image src={IconsUsers} className="w-66" alt="Chatbot" />
              </div>
            

                

            </div>

            <div className="w-full mb-8">
              <label className="block text-xl font-bold mb-4">Selecione suas tags:</label>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-5 cursor-pointer py-1 rounded-full text-sm font-medium transition-all ${
                      selectedTags.includes(tag) 
                      ? 'bg-[#1A3879] text-white' 
                      : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-[#1A3879] text-white font-bold py-4 rounded-xl shadow-lg cursor-pointer">
              Finalizar
            </button>
            <button onClick={() => setView("register")} className="my-1 text-xs text-gray-400 underline cursor-pointer">Voltar</button>


            <div className="flex justify-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#1A3879]"></div>
            </div>
          </div>
          </div>
        )}
      </div>
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}
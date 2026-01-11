"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import CommentCard from "@/components/ForumComments"; // Seu componente

// Imagens
import avatar06 from "../../../../public/images/avatars/avatar06.png"; // Avatar do usuário logado
import avatar01 from "../../../../public/images/avatars/avatar01.png";
import avatar02 from "../../../../public/images/avatars/avatar02.png";
import avatar03 from "../../../../public/images/avatars/avatar03.png";
import avatar04 from "../../../../public/images/avatars/avatar04.png";
import avatar05 from "../../../../public/images/avatars/avatar05.png";

// Ícones Amigáveis (Lucide)
import { 
  Search, 
  Send, 
  Sparkles, 
  MessageCircle, 
  Heart,
  Bookmark,
  Filter
} from 'lucide-react';

export default function CommunityPage() {
  const [activeFilter, setActiveFilter] = useState("Destaques");
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Simulação de dados
  const comments = [
    { id: 1, text: "Gente, a fase 3 do jogo ajudou muito meu aluno com a questão das cores! 🎨", author: "João Guilherme", image: avatar01 },
    { id: 2, text: "Alguém sabe se vai ter versão mobile? Meus alunos adorariam usar nos tablets.", author: "Maria Clara", image: avatar02 },
    { id: 3, text: "O design está impecável, parabéns aos devs! Muito inclusivo.", author: "Pedro Henrique", image: avatar03 },
    { id: 4, text: "Dica: Usem o modo de alto contraste para alunos com baixa visão, funciona super bem.", author: "Ana Beatriz", image: avatar04 },
    { id: 5, text: "Que orgulho ver esse projeto crescendo! 🚀", author: "Lucas Andrade", image: avatar05 },
  ];

  const filters = [
    { label: "Destaques", icon: Sparkles },
    { label: "Recentes", icon: MessageCircle },
    { label: "Meus Posts", icon: Heart },
    { label: "Dúvidas", icon: Bookmark },
  ];

  return (
    <main className="flex h-screen w-full bg-[#FAFCFF] font-sans overflow-hidden">
      
      {/* --- SIDEBAR DE NAVEGAÇÃO PESSOAL --- */}
      {/* Mantém o usuário situado, mas focado nele mesmo */}
      <aside className="hidden lg:flex w-[280px] flex-col p-6 border-r-2 border-[#D6E1ED] bg-white h-full z-20">
        
        {/* Logo / Brand */}
        <div className="mb-10 flex items-center gap-2 text-[#292F65]">
           <div className="w-8 h-8 bg-[#292F65] rounded-lg"></div>
           <span className="font-bold text-xl tracking-tight">Comunidade</span>
        </div>

        {/* Perfil Mini */}
        <div className="flex flex-col items-center text-center p-6 border-2 border-[#D6E1ED] rounded-2xl bg-[#F8FAFC] mb-8">
            <div className="w-20 h-20 rounded-full border-4 border-white shadow-sm mb-3">
                <Image src={avatar06} alt="Arthur" className="w-full h-full rounded-full" />
            </div>
            <h3 className="font-bold text-[#092B53] text-lg">Arthur Juwer</h3>
            <p className="text-[#BBC9DA] text-sm font-medium">Aluno • Nível 5</p>
        </div>

        {/* Menu Simples */}
        <nav className="space-y-2 flex-1">
            <p className="text-xs font-bold text-[#BBC9DA] uppercase tracking-wider px-2 mb-2">Navegar</p>
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#EBF3FF] text-[#292F65] font-bold rounded-xl border border-[#D6E1ED]">
                <MessageCircle size={20} />
                Feed Geral
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-[#BBC9DA] hover:text-[#292F65] hover:bg-gray-50 font-bold rounded-xl transition-colors">
                <Heart size={20} />
                Favoritos
            </button>
        </nav>
      </aside>

      {/* --- ÁREA PRINCIPAL --- */}
      <section className="flex-1 flex flex-col h-full relative">

        {/* CONTEÚDO COM SCROLL */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-thin scrollbar-thumb-[#D6E1ED] scrollbar-track-transparent">
           
           <div className="mx-auto space-y-8">
              
              {/* 1. CAIXA DE CRIAÇÃO (O CONVITE PARA PARTICIPAR) */}
              {/* Destaque visual para incentivar o usuário a "incrementar" */}
              <div 
                className={`
                    relative bg-white border-2 rounded-2xl p-4 transition-all duration-300
                    ${isInputFocused ? 'border-[#292F65] shadow-lg scale-[1.01]' : 'border-[#D6E1ED]'}
                `}
              >
                 <div className="flex gap-4">
                    <div className="w-14 h-14 p-1 rounded-full border border-[#D6E1ED]">
                        <Image src={avatar06} alt="Arthur" className=" w-full h-full " />
                    </div>
                    <div className="flex-1">
                        <textarea 
                            onFocus={() => setIsInputFocused(true)}
                            onBlur={() => setIsInputFocused(false)}
                            placeholder="Compartilhe sua ideia, dúvida ou feedback..."
                            className="w-full resize-none h-20 outline-none text-[#092B53] placeholder-[#BBC9DA] text-lg font-medium bg-transparent pt-2"
                        />
                        
                        {/* Barra de Ações do Input */}
                        <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                            <div className="flex gap-2">
                                {/* Botões de anexo falsos para dar feeling de software rico */}
                                <button className="p-2 hover:bg-gray-100 rounded-lg text-[#BBC9DA] transition"><span className="text-xs font-bold">📷 Foto</span></button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg text-[#BBC9DA] transition"><span className="text-xs font-bold">📎 Anexo</span></button>
                            </div>
                            <button className="bg-[#292F65] hover:bg-[#1e233b] text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-md shadow-[#292F65]/20">
                                <span>Publicar</span>
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                 </div>
              </div>


              {/* 2. FILTROS AMIGÁVEIS (TABS) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                 {filters.map((filter) => (
                    <button
                        key={filter.label}
                        onClick={() => setActiveFilter(filter.label)}
                        className={`
                            flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border-2 transition-all whitespace-nowrap
                            ${activeFilter === filter.label 
                                ? 'bg-[#292F65] border-[#292F65] text-white shadow-md' 
                                : 'bg-white border-[#D6E1ED] text-[#BBC9DA] hover:border-[#292F65] hover:text-[#292F65]'}
                        `}
                    >
                        <filter.icon size={16} />
                        {filter.label}
                    </button>
                 ))}
                 <button className="ml-auto p-2 text-[#BBC9DA] hover:text-[#292F65]">
                    <Filter size={20} />
                 </button>
              </div>


              {/* 3. FEED DE COMENTÁRIOS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 {comments.map((comment, idx) => (
                    <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="h-full"
                    >
                        {/* Wrapper para dar o estilo de card clicável */}
                        <div className="bg-white border-2 border-[#D6E1ED] rounded-2xl hover:border-[#292F65]/50 hover:shadow-lg transition-all duration-300 cursor-pointer h-full group p-1">
                            <article
                              className={"rounded-lg flex items-center gap-4 cursor-pointer transition-all p-4 lg:py-6 h-[115px] lg:w-[450px] text-sm"}
                            >
                              <img
                                src={comment.image.src}
                                alt={`Avatar de ${comment.author}`}
                                className={"w-12 h-12 rounded-full"}
                              />

                              <div className="flex flex-col">
                                <p className={"text-[13px] line-clamp-2"}>
                                  {comment.text}
                                </p>
                                <span className={"text-[11px] text-xs"}>
                                  {comment.author}
                                </span>
                              </div>
                            </article>
                            
                            {/* Interações Sociais (Like/Reply) - Aparecem sutilmente */}
                            <div className="px-4 pb-3 flex gap-4 text-[#BBC9DA] text-xs font-bold">
                                <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                                    <Heart size={14} /> <span>12</span>
                                </button>
                                <button className="flex items-center gap-1 hover:text-[#292F65] transition-colors">
                                    <MessageCircle size={14} /> <span>Responder</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                 ))}
              </div>

              {/* Loader Final */}
              <div className="text-center py-6">
                 <p className="text-[#BBC9DA] font-medium text-sm animate-pulse">Carregando mais interações...</p>
              </div>

           </div>
        </div>

      </section>
    </main>
  );
}
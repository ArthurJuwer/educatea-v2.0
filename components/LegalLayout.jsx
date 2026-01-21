"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, FileText, Shield, Cookie, Mail } from "lucide-react";

export default function LegalLayout({ children, title, date }) {
  const pathname = usePathname();

  // Função auxiliar para verificar link ativo
  const isActive = (path) => pathname === path;

  // Estilo base para os links do menu
  const linkStyle = (path) => `
    flex items-center gap-3 p-3 rounded-lg transition-all text-sm font-medium
    ${isActive(path) 
      ? "bg-blue-50 text-[#1A3879] shadow-sm ring-1 ring-blue-100" 
      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
  `;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- CABEÇALHO CLEAN --- */}
      <header className="bg-[#1A3879] text-white pt-12 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o início
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {title}
          </h1>
          <p className="text-blue-200 text-sm">
            Última atualização: {date}
          </p>
        </div>
      </header>

      {/* --- CORPO DA PÁGINA --- */}
      <div className="max-w-6xl mx-auto -mt-12 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* MENU LATERAL (STICKY) */}
          

          {/* CONTEÚDO DO TEXTO */}
          <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            {/* Estilos globais de tipografia para o conteúdo legal */}
            <div className="prose prose-blue max-w-none prose-headings:text-[#1A3879] prose-a:text-[#1A3879]">
              {children}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  // Inicializamos como false para ele começar escondido
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Define o timer para mudar o estado após 5000ms (5 segundos)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Limpa o timer caso o componente seja desmontado antes dos 5 segundos
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-14 left-14 w-[600px] rounded-3xl bg-white border border-gray-200 pb-8 p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* Texto Informativo */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-800">
            A sua privacidade é muito importante para nós
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Nós usamos cookies para garantir a melhor experiência e para coletar dados sobre como os 
            visitantes interagem com o nosso site. Ao clicar em "Aceitar", você concorda em usarmos 
            todos os cookies para anúncios, personalizações e análises, como descrito na nossa{' '}
            <a href="#" className="text-blue-800 font-semibold hover:underline">
              Política de cookies.
            </a>
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="grid grid-cols-3 gap-4 items-center">
          <button
            onClick={() => setIsVisible(false)}
            className="bg-[#1e3a8a] text-sm cursor-pointer hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Aceitar todos
          </button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="border border-gray-300 text-sm cursor-pointer hover:bg-gray-50 text-[#1e3a8a] font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Rejeitar todos
          </button>

          <Link
            href={'/cookies'}
            className="text-[#1e3a8a] font-semibold cursor-pointer hover:underline text-sm text-center"
          >
            O que são cookies?
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default CookieBanner;
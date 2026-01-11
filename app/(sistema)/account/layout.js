import { DM_Sans } from "next/font/google";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget"; // Ajuste o caminho ../ se necessário
import AcessibilidadeWidget from "@/components/acessibilidade/AcessibilidadeWidget";
import Sidebar from '@/components/account/Sidebar'; // Ajuste o caminho
import "../globals.css";

import { 
  BookOpen
} from 'lucide-react';

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "EducaTEA - Área do Aluno",
  description: "Plataforma educacional EducaTEA",
};

export default function SistemaLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/* Adicionei 'flex h-screen overflow-hidden' para comportar a Sidebar lateral corretamente */}
      <body className={`${dmSans.className} antialiased flex h-screen overflow-hidden bg-white`}>
        
        {/* Sidebar Fixa a Esquerda */}
        <Sidebar />
        
        {/* Área de Conteúdo Rolável */}
        <div className="flex-1 overflow-y-auto relative z-0">
              <header className="flex justify-between items-center p-6 border-b-2 border-[#D9D9D9] bg-white sticky top-0 z-10">
            <div className="flex items-center gap-4 ml-auto">
                {/* Botão de exemplo (pode ser usado para mobile menu toggle no futuro) */}
                <div className="mr-auto p-2 border rounded cursor-pointer hover:bg-gray-100 text-slate-600">
                  <BookOpen size={20} />
                </div>
              
              <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-200">
                <div className="w-full h-full bg-gray-300"></div> 
              </div>
              <div className="w-8 h-6 rounded bg-green-600 flex justify-center items-center text-white text-xs">
                BR
              </div>
            </div>
          </header>
          {children}
        </div>

        {/* Widgets Flutuantes */}
        <div className="z-50 fixed right-5 bottom-10 flex flex-col gap-4">
          <ChatbotWidget />
          <AcessibilidadeWidget />
        </div>
        
      </body>
    </html>
  );
}
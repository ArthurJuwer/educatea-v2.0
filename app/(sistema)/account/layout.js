import { DM_Sans } from "next/font/google";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget"; // Ajuste o caminho ../ se necessário
import AcessibilidadeWidget from "@/components/acessibilidade/AcessibilidadeWidget";
import Sidebar from '@/components/account/Sidebar'; // Ajuste o caminho
import "../globals.css";
import BrasilFlag from "../../../public/images/languages/Brasil.png";

import { 
  BookOpen
} from 'lucide-react';
import Image from "next/image";

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
              
              <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-200">
                <div className="w-full h-full bg-gray-300"></div> 
              </div>
              <Image src={BrasilFlag} className="w-10 rounded" alt="Logo" />
              
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
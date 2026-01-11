import { DM_Sans } from "next/font/google";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget"; // Ajuste o caminho ../ se necessário
import AcessibilidadeWidget from "@/components/acessibilidade/AcessibilidadeWidget";
import Sidebar from '@/components/account/Sidebar'; // Ajuste o caminho
import "../globals.css";

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
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "EducaTEA",
  description: "Plataforma educacional EducaTEA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.className} relative antialiased`}>
        <Header />
        {children}
        <div className="fixed right-5 bottom-10">
          <ChatbotWidget />
        </div>
        

        <Footer />
      </body>
    </html>
  );
}
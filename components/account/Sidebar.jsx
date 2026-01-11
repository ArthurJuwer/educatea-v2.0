'use client'; // Necessário para hooks de navegação

import Link from 'next/link';
import Image from "next/image";

import { usePathname } from 'next/navigation';
import { Home, MonitorPlay, Award, Download, MessageSquare, LogOut } from 'lucide-react';
import TextLogo from "../../public/images/logos/TextLogo.png";

export default function Sidebar() {
  const pathname = usePathname(); // Pega a rota atual

  const menuItems = [
    { name: 'Geral', icon: Home, href: '/account' }, // Exemplo de rota
    { name: 'Cursos', icon: MonitorPlay, href: '/account/cursos' },
    { name: 'Certificados', icon: Award, href: '/account/certificados' },
    { name: 'Downloads', icon: Download, href: '/account/downloads' },
    { name: 'Comunidade', icon: MessageSquare, href: '/account/comunidade' },
  ];

  return (
    <aside className="w-64 border-r-2 border-[#D9D9D9] flex-shrink-0 flex flex-col text-[#BBC9DA] h-screen sticky top-0">
      {/* Logo Area */}
      <div className="p-6 pt-8">
          <Image src={TextLogo} width={150} height={50} alt="Logo" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 mt-4 overflow-y-auto">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-4 mx-4 px-7 py-3 transition-colors ${
                isActive
                  ? 'bg-[#292F64] text-[#BBC9DA] !ml-0 !mr-8 rounded-r-2xl'
                  : 'hover:bg-[#5c69be] hover:text-[#BBC9DA] !ml-0 !mr-8 rounded-r-2xl'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-6 border-t-2 border-[#D9D9D9]">
        <button className="flex items-center gap-4 text-[#BBC9DA] hover:text-[#292F64] cursor-pointer transition-colors w-full">
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}
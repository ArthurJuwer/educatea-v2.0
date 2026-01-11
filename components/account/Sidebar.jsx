'use client'; // Necessário para hooks de navegação

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MonitorPlay, Award, Download, MessageSquare, LogOut } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname(); // Pega a rota atual

  const menuItems = [
    { name: 'Geral', icon: Home, href: '/dashboard' }, // Exemplo de rota
    { name: 'Cursos', icon: MonitorPlay, href: '/cursos' },
    { name: 'Certificados', icon: Award, href: '/certificados' },
    { name: 'Downloads', icon: Download, href: '/downloads' },
    { name: 'Conta', icon: Home, href: '/account' }, // Adicionei para testar a tela atual
    { name: 'Comunidade', icon: MessageSquare, href: '/comunidade' },
  ];

  return (
    <aside className="w-64 bg-[#2e3457] flex-shrink-0 flex flex-col text-slate-300 h-screen sticky top-0">
      {/* Logo Area */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-yellow-400">EducaTEA</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#1e233b] text-white'
                  : 'hover:bg-[#3e4570] hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-6 border-t border-slate-600 bg-[#2e3457]">
        <button className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors w-full">
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}
'use client';

import { 
  Pencil, 
  Clock, 
  Star, 
  FileText, 
  List, 
  TriangleAlert, 
  BookOpen
} from 'lucide-react';

export default function AccountPage() {
  
  const badges = ['Admin', 'Desenvolvedor', 'Aluno', 'Senac RS', 'Tutor', 'TEA 1'];
  
  const courses = [
    {
      title: 'Curso entre Contínua: confiabilidade e qualidade na implantação de software',
      time: '08h',
      rating: '4.7',
      image: '/placeholder-woman.png'
    },
    {
      title: 'Curso entre Contínua: confiabilidade e qualidade na implantação de software',
      time: '03h',
      rating: '4.9',
      image: '/placeholder-man.png' 
    }
  ];

  const comments = [1, 2, 3, 4, 5];

  return (
    <main className="flex flex-col min-h-screen">

      <div className="p-8 max-w-6xl mx-auto w-full space-y-10 pb-20">
        
        {/* Seção 1: Meu Perfil */}
        <section>
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Meu perfil</h2>
            <button className="bg-[#2e3457] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1e233b] transition">
              Editar perfil
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar Grande */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#2e3457] p-1 border-4 border-slate-100">
                  <div className="w-full h-full rounded-full bg-blue-500 overflow-hidden">
                  </div>
              </div>
              <button className="absolute bottom-1 right-1 bg-[#2e3457] p-2 rounded-full text-white border-2 border-white hover:bg-blue-900">
                <Pencil size={14} />
              </button>
            </div>

            {/* Informações do Usuário */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <h3 className="text-xl font-bold text-slate-900">Arthur Juwer Rambo</h3>
                <span className="text-xl">🇧🇷</span>
              </div>
              <p className="text-slate-600 text-sm font-medium mb-3">arthur.juwer99@gmail.com</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {badges.map((badge, idx) => (
                  <span key={idx} className="bg-black text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* Seção 2: Minha Atividade */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Minha Atividade</h2>
            <div className="flex gap-2">
              <button className="bg-[#2e3457] text-white px-6 py-2 rounded-lg text-sm font-medium">
                Cursos
              </button>
              <button className="bg-white border border-[#2e3457] text-[#2e3457] px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                Comentários
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-6 flex gap-4 hover:shadow-md transition bg-white">
                <div className="w-20 h-20 rounded-full bg-yellow-100 flex-shrink-0 overflow-hidden border">
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-slate-800 leading-tight">
                    {course.title}
                  </h4>
                  <div className="w-16 h-1 bg-green-500 mt-2 mb-3 rounded-full"></div>
                  
                  <div className="flex justify-between text-slate-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{course.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Star size={16} className="fill-slate-300 text-slate-300" />
                      <span className="font-bold">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* Seção 3: Comentários */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Comentários Favoritados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comments.map((_, idx) => (
              <div key={idx} className="border border-blue-200 rounded-lg p-4 bg-white flex gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex-shrink-0"></div>
                <div>
                  <p className="text-[10px] text-slate-500 leading-tight mb-2">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="text-[10px] font-bold text-slate-400">Arthur Juwer</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* Seção 4: Materiais */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Materias Baixados</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 border-2 border-red-500 rounded-lg p-4 min-w-[200px] bg-white hover:bg-red-50 cursor-pointer transition">
              <FileText className="text-red-500" size={24} />
              <span className="font-bold text-slate-900">Licença MIT</span>
            </div>
            <div className="flex items-center gap-3 border-2 border-purple-800 rounded-lg p-4 min-w-[200px] bg-white hover:bg-purple-50 cursor-pointer transition">
              <List className="text-purple-800" size={24} />
              <span className="font-bold text-slate-900">Formulários</span>
            </div>
            <div className="flex items-center gap-3 border-2 border-green-600 rounded-lg p-4 min-w-[200px] bg-white hover:bg-green-50 cursor-pointer transition">
              <div className="w-6 h-6 flex justify-center items-center">
                  <TriangleAlert className="text-yellow-500 fill-green-600" size={24} /> 
              </div>
              <span className="font-bold text-slate-900">Teste de Usabilidade</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
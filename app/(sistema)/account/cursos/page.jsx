import React from 'react'
import avatar02 from "../../../../public/images/avatars/avatar02.png";
import avatar07 from "../../../../public/images/avatars/avatar07.png";
import CursosSection from '@/components/(sistema)/account/CursosSection';

export default function Cursos() {
  const courses = [
    {
      image: avatar02,
      title: 'Curso entre Contínua: confiabilidade e qualidade na implantação de software',
      time: '08h',
      rating: '4.7',
    },
    {
      image: avatar07,
      title: 'Curso entre Contínua: confiabilidade e qualidade na implantação de software',
      time: '03h',
      rating: '4.9',
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">

      <div className="p-16 mx-auto w-full space-y-12 pb-20">
          <section className="relative" >
            <h2 className="text-3xl font-bold text-black mb-8">Cursos</h2>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                <CursosSection courses={courses} />
              </div>
            </section>
        </div>
        </main>
  )
}

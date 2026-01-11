import React from 'react'
import Image from "next/image";
import avatar02 from "../../../../public/images/avatars/avatar02.png";
import avatar07 from "../../../../public/images/avatars/avatar07.png";
import { 
  Clock, 
  Star, 
} from 'lucide-react';

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
            {courses.map((course, idx) => (
              <div key={idx} className="cursor-pointer relative border-2 border-[#D6E1ED] rounded-xl p-5 pt-10 flex flex-col gap-4 hover:shadow-md transition bg-white">

                <div className="flex gap-6">
                  <Image src={course.image} className="w-20 h-auto" alt="Logo" />

                  <h4 className="font-bold w-4/5 text-xl text-[#092B53] leading-tight">
                    {course.title}
                  </h4>
                </div>
                <div className="flex flex-col">
                  <div className="h-1 w-full block mt-3 mb-4">
                      <div className="transform -translate-x-1/2 left-1/2 absolute w-full h-1 bg-[#D6E1ED]"></div>
                      <div className="transform left-0 absolute w-4/5 h-1 bg-[#0B7E13]"></div>
                  </div>

                  <div className="flex justify-between text-[#BBC9DA] text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={24} />
                      <span className="font-semibold text-xl">{course.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#BBC9DA]">
                      <Star size={24} className="fill-slate-300 text-slate-300" />
                      <span className="font-semibold text-xl">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>
        </main>
  )
}

import React from 'react'
import BrasilFlag from "../../../public/images/languages/Brasil.png";
import Image from 'next/image';

export default function Topbar() {
  return (
    <header className="flex justify-between items-center p-6 border-b-2 border-[#D9D9D9] bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4 ml-auto">
        
        <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-200">
            <div className="w-full h-full bg-gray-300"></div> 
        </div>
        <Image src={BrasilFlag} className="w-10 rounded" alt="Logo" />
        
        </div>
    </header>
  )
}

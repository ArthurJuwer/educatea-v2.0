import React from 'react'
import BrasilFlag from "../../../public/images/languages/Brasil.png";
import Image from 'next/image';
import Avatar06 from "../../../public/images/avatars/avatar06.png";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center p-6 border-b-2 border-[#D9D9D9] bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4 ml-auto">
        
        <div className="size-12 rounded-full p-0.5 bg-[#3E489C] overflow-hidden border-2 border-slate-200">
            <Image src={Avatar06} className="object-cover h-full w-full" alt="Logo" />
        </div>
        <Image src={BrasilFlag} className="w-10 rounded" alt="Logo" />
        
        </div>
    </header>
  )
}

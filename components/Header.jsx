import Image from "next/image";
import TextLogo from "../public/images/logos/TextLogo.png";
import BrasilFlag from "../public/images/languages/Brasil.png";

export default function Header() {
  return (
    <div className="h-[13dvh] flex items-center justify-between p-10 bg-white text-black font-bold">
        <nav className="flex items-center gap-x-6">
        <Image src={TextLogo} width={170} height={60} alt="" />
            <ul className="flex items-center gap-x-10">
                <li>
                    <button className="bg-[#1A3879] cursor-pointer text-white px-10 -mr-4 py-3 rounded-full">JOGAR</button>
                </li>
                <li>APRESENTAÇÃO</li>
                <li>FEIRAS</li>
                <li>TRABALHO</li>
                <li>COMUNIDADE</li>
                <li>EQUIPE</li>
            </ul>
        </nav>
        <div className="flex items-center justify-center gap-x-4">
            <button className="bg-[#F9A318] text-white cursor-pointer px-12 py-3 rounded-full" >DISPONÍVEL AGORA</button>
            <button>
                <Image src={BrasilFlag} width={35} height={25} alt="" />
            </button>
        </div>
        
    </div>
  )
}

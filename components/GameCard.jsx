
import Image from "next/image";
import WallpaperLogo from "../public/images/logos/WallpaperLogo.png";

export default function GameCard() {
  return (
    <div className="bg-[#313744] p-6 text-white rounded-2xl w-4/12 flex flex-col gap-2 relative">
        <h1 className="text-xl">Acesse o Educa Tea</h1>
        <div className="flex items-center justify-center gap-x-4">
            <Image src={WallpaperLogo} className="w-1/2" alt="" />
            <p className="w-1/2">Jogo educativo interativo que ajuda profissionais a desenvolverem estratégias inclusivas e práticas eficazes no ensino de alunos com Transtorno do Espectro Autista (TEA).</p>
        </div>
        <button className="bg-[#0033FF] rounded-xl px-16 py-1.5 absolute transform -translate-x-1/2 left-1/2 -bottom-6">Acessar</button>
    </div>
  )
}

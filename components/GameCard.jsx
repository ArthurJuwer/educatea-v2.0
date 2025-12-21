import Image from "next/image";
import WallpaperLogo from "../public/images/logos/WallpaperLogo.png";

export default function GameCard() {
  return (
    <div
      className="bg-[#313744] p-6 pt-5 text-white rounded-2xl 
                 w-10/12 md:w-1/2 lg:w-4/12 
                 flex flex-col gap-4 relative"
    >
      
      <h1 className="text-lg md:text-xl font-semibold">
        Acesse o Educa Tea
      </h1>

      {/* CONTEÚDO */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Image
          src={WallpaperLogo}
          alt="Educa Tea"
          className="sm:w-full md:w-1/2 md:p-2 h-auto"
        />

        <p className="text-sm md:text-base md:w-1/2 text-center md:text-left">
          Jogo educativo interativo que ajuda profissionais a desenvolverem
          estratégias inclusivas e práticas eficazes no ensino de alunos com
          Transtorno do Espectro Autista (TEA).
        </p>
      </div>

      {/* BOTÃO */}
      <button
        className="
          bg-[#0033FF] rounded-xl px-14 py-2 font-semibold cursor-pointer
          text-sm md:text-base

          md:absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-5
        "
      >
        Acessar
      </button>
    </div>
  );
}

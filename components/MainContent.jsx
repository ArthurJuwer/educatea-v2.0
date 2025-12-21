import Image from "next/image";
import MainLogo from "../public/images/logos/MainLogo.png";
import IconYoutube from "../public/images/icons/Youtube.png";

export default function MainContent() {
  return (
    <section className="2xl:min-h-[88dvh] flex flex-col items-center justify-between gap-8 px-6 py-10 bg-[#595959]">
      
      {/* LOGO */}
      <Image
        src={MainLogo}
        width={220}
        height={220}
        alt="Logo principal"
        className="w-[140px] sm:w-[180px] md:w-[220px] h-auto"
      />

      {/* VÍDEO / YOUTUBE */}
      <div className="w-full max-w-[680px] aspect-video bg-white flex items-center justify-center rounded-lg">
        <Image
          src={IconYoutube}
          width={90}
          height={90}
          alt="Youtube"
          className="w-[60px] sm:w-[80px] md:w-[90px] h-auto"
        />
      </div>

      {/* TEXTO */}
      <h1 className="text-center text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight">
        CONHEÇA O PROJETO <br className="hidden sm:block" />
        EDUCATEA!
      </h1>

    </section>
  );
}

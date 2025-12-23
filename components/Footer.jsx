import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        bg-[#242424] text-white text-sm font-semibold
        py-8 px-4
        flex flex-col gap-6
        items-center
        lg:flex-row lg:justify-around lg:gap-0
        lg:mt-12
        text-center lg:text-left
      "
    >
      {/* Copyright */}
      <p>© EducaTEA - Todos os direitos reservados.</p>
      <span className="lg:hidden h-0.5 w-4/5 block bg-white"></span>
      {/* Navigation */}
      <nav>
        <ul
          className="
            lg:flex lg:gap-10 gap-4 items-center
            grid grid-cols-2 place-content-center place-items-center
            
          "
        >
          <li className="cursor-pointer hover:opacity-80">
            Comunidade
          </li>

          <li className="cursor-pointer hover:opacity-80">
            Termos de uso
          </li>

          {/* Language */}
          <li className="flex items-center gap-2">
            <Image
              src="/images/languages/Brasil.png"
              width={20}
              height={20}
              alt="Bandeira do Brasil"
            />
            <span>Português (Brasil)</span>
          </li>

          {/* Instagram */}
          <li className="cursor-pointer size-10 rounded-full flex items-center justify-center bg-[#0033FF] hover:opacity-90">
            <Image
              src="/images/social-medias/Instagram.png"
              width={20}
              height={20}
              alt="Instagram"
            />
          </li>
        </ul>
      </nav>
    </footer>
  );
}

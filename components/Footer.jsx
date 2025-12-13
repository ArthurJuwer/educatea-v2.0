import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center py-6 flex items-center justify-around lg:mt-12 text-sm font-semibold bg-[#242424] text-white">
      <p>© EducaTEA - Todos os direitos reservados.</p>

      <nav>
        <ul className="flex items-center gap-10">
          <li className="cursor-pointer">Comunidade</li>
          <li className="cursor-pointer">Termos de uso</li>

          <li className="flex items-center gap-4">
            <Image
              src="/images/languages/Brasil.png"
              width={20}
              height={20}
              alt="Bandeira do Brasil"
            />
            Português (Brasil)
          </li>

          <li className="cursor-pointer size-10 rounded-full flex items-center justify-center bg-[#0033FF]">
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

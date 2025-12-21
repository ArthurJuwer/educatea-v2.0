import Image from "next/image";
import Linkedin from "../public/images/icons/Linkedin.png"

const desenvolvedores = [
  {
    nome: "Arthur Cidade Matjjie",
    imagem: "/images/team/ArthurCidade.jpg",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },
  {
    nome: "Arthur Juwer Rambo",
    imagem: "/images/team/ArthurJuwer.png",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },
  
  
];

const orientadores = [
  {
    nome: "Gabriele de Oliveira",
    imagem: "/images/team/Gabriele.jpg",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },
  {
    nome: "Gabriel Moraes",
    imagem: "/images/team/GabrielMoraes.jpg",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },
  {
    nome: "Gabriele de Oliveira",
    imagem: "/images/team/Gabriele.jpg",
    linkedin: "https://www.linkedin.com/in/arthurjuwer/",
  },

];

export default function Team() {
  return (
    <section
      id="equipe"
      className="flex flex-col gap-6 items-center justify-center"
    >
      <h1 className="bg-[#0033FF] text-center text-white uppercase font-bold p-3 px-6 w-full text-2xl lg:mb-10">
        Equipe
      </h1>

      <div className="lg:flex lg:flex-col lg:items-center lg:gap-10">
        
        {/* DESENVOLVEDORES */}
        <div className="flex flex-col gap-12">
          <h1 className="uppercase text-center font-bold text-3xl">
            Desenvolvedores
          </h1>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {desenvolvedores.map((dev, index) => (
              <article
                key={index}
                className="flex flex-col items-center justify-center relative"
              >
                <Image
                  src={dev.imagem}
                  alt={dev.nome}
                  width={288}
                  height={288}
                  className="bg-[#D9D9D9] rounded-xl"
                />

                <a
                  href={dev.linkedin}
                  className="absolute top-4 right-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Linkedin}
                    alt="LinkedIn"
                    className="w-full"
                  />
                </a>

                <label className="bg-[#242424] text-white p-3 text-center font-bold w-full -mt-3 rounded-bl-xl rounded-br-xl">
                  {dev.nome}
                </label>
              </article>
            ))}
          </div>
        </div>

        {/* ORIENTADORES */}
        <div className="flex flex-col gap-12">
          <h1 className="uppercase text-center font-bold text-3xl mt-6 lg:mt-0">
            Orientadores
          </h1>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {orientadores.map((ori, index) => (
              <article
                key={index}
                className="flex flex-col items-center justify-center relative"
              >
                <Image
                  src={ori.imagem}
                  alt={ori.nome}
                  width={288}
                  height={288}
                  className="bg-[#D9D9D9] rounded-xl"
                />

                <a
                  href={ori.linkedin}
                  className="absolute top-4 right-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Linkedin}
                    alt="LinkedIn"
                    className="w-full"
                  />
                </a>

                <label className="bg-[#242424] text-white p-3 text-center font-bold w-full -mt-3 rounded-bl-xl rounded-br-xl">
                  {ori.nome}
                </label>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

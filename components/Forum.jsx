"use client";

import { useEffect, useState } from "react";

import avatar01 from "../public/images/avatars/avatar01.png";
import avatar02 from "../public/images/avatars/avatar02.png";
import avatar03 from "../public/images/avatars/avatar03.png";
import avatar04 from "../public/images/avatars/avatar04.png";
import avatar05 from "../public/images/avatars/avatar05.png";
import avatar06 from "../public/images/avatars/avatar06.png";

import CommentCard from "./ForumComments";

export default function Forum() {
  const [isMobile, setIsMobile] = useState(false);

  const comments = [
    {
      text: "Projeto incrível! Vai ajudar muitos professores a trabalharem de forma mais inclusiva. 👏",
      author: "João Guilherme",
      image: avatar01,
    },
    {
      text: "Adorei a ideia! Muito importante trazer tecnologia para apoiar alunos com TEA.",
      author: "Maria Clara",
      image: avatar02,
    },
    {
      text: "Sensacional! Esse jogo tem um propósito lindo e educativo. 💙",
      author: "Pedro Henrique",
      image: avatar03,
    },
    {
      text: "Parabéns pela iniciativa! Educação inclusiva transforma vidas.",
      author: "Ana Beatriz",
      image: avatar04,
    },
    {
      text: "Que orgulho ver estudantes criando algo tão impactante. 🚀",
      author: "Lucas Andrade",
      image: avatar05,
    },
    {
      text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.",
      author: "Arthur Juwer",
      image: avatar06,
    },
    {
      text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.",
      author: "Arthur Juwer",
      image: avatar01,
    },
    {
      text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.",
      author: "Arthur Juwer",
      image: avatar04,
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () =>
      mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const visibleComments = isMobile ? comments.slice(0, 3) : comments;

  return (
    <section
      id="forum"
      className="py-10 lg:py-15 flex flex-col items-center w-full"
    >
      <h1 className="font-bold text-2xl lg:text-3xl mb-10">
        CONFIRA O FÓRUM
      </h1>

      <div className="w-full px-6">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-6
            place-items-center
          "
        >
          {visibleComments.map((comment, index) => (
            <CommentCard
              key={index}
              text={comment.text}
              author={comment.author}
              image={comment.image.src}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center w-full mt-12">
        <a
          href="/forum"
          className="bg-[#0033FF] text-white px-8 py-2 rounded-full font-bold uppercase hover:opacity-90"
        >
          Ver mais
        </a>
        <span className="w-4/5 lg:w-3/5 h-px bg-black block"></span>
      </div>
    </section>
  );
}

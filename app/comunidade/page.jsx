"use client";

import { motion } from "framer-motion";
import CommentCard from "@/components/ForumComments";
import CommentOverlay from "@/components/comunidade/CommentOverlay";

import avatar01 from "../../public/images/avatars/avatar01.png";
import avatar02 from "../../public/images/avatars/avatar02.png";
import avatar03 from "../../public/images/avatars/avatar03.png";
import avatar04 from "../../public/images/avatars/avatar04.png";
import avatar05 from "../../public/images/avatars/avatar05.png";
import avatar06 from "../../public/images/avatars/avatar06.png";
import avatar07 from "../../public/images/avatars/avatar07.png";
import avatar08 from "../../public/images/avatars/avatar08.png";
import avatar09 from "../../public/images/avatars/avatar09.png";

import Search from "../../public/images/icons/Search.png";
import Image from "next/image";

// 👉 Lucide icons
import {
  TrendingUp,
  Clock,
  MapPin,
  GraduationCap,
  SlidersHorizontal,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Comunidade() {
  const [selectedComment, setSelectedComment] = useState(null);

  // 🔹 Typing effect
  const fullTitle = "Olá, Visitante!";
  const fullSubtitle = "Gostaria de procurar um comentário específico?";

  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");

  useEffect(() => {
    let i = 0;
    let j = 0;

    const titleInterval = setInterval(() => {
      setTitleText(fullTitle.slice(0, i + 1));
      i++;

      if (i === fullTitle.length) {
        clearInterval(titleInterval);

        const subtitleInterval = setInterval(() => {
          setSubtitleText(fullSubtitle.slice(0, j + 1));
          j++;

          if (j === fullSubtitle.length) {
            clearInterval(subtitleInterval);
          }
        }, 45);
      }
    }, 55);

    return () => clearInterval(titleInterval);
  }, []);

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
      image: avatar07,
    },
    {
      text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.",
      author: "Arthur Juwer",
      image: avatar08,
    },
    {
      text: "Parabéns pela iniciativa! Educação inclusiva transforma vidas.",
      author: "Ana Beatriz",
      image: avatar09,
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
      image: avatar09,
    },
  ];

  const filters = [
    { label: "Destaques", icon: TrendingUp },
    { label: "Mais Recentes", icon: Clock },
    { label: "Senac São Leopoldo", icon: MapPin },
    { label: "Professores", icon: GraduationCap },
    { label: "Filtro Personalizado", icon: SlidersHorizontal },
  ];

  return (
    <div>
      <hr />

      <section className="max-w-11/12 lg:max-w-10/12 mx-auto flex flex-col gap-6 px-6 py-12">
        {/* Header with reserved space */}
        <div className="relative w-full">
          {/* Invisible text to reserve height */}
          <h1 className="text-3xl font-medium lg:leading-11 w-full opacity-0">
            {fullTitle}
            <br />
            <span className="text-lg lg:text-3xl">
              {fullSubtitle}
            </span>
          </h1>

          {/* Typing text */}
          <h1 className="absolute top-0 left-0 text-3xl font-medium lg:leading-11 w-full">
            {titleText}
            <br />
            <span className="text-lg lg:text-3xl">
              {subtitleText}
            </span>
          </h1>
        </div>

        {/* Search */}
        <div className="relative flex items-center gap-3">
          <input
            type="text"
            placeholder="Busque por algum comentário aqui..."
            className="flex-1 border-2 border-[#CFCFCF] rounded-lg px-4 py-3 placeholder:text-sm"
          />
          <button className="absolute -right-2 bg-[#0033FF] text-white p-4 rounded-full hover:bg-blue-700">
            <Image src={Search} alt="Buscar" />
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mb-6">
          {filters.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="flex items-center justify-center gap-2 py-2.5 text-sm rounded-lg bg-[#0033FF] text-white hover:bg-blue-700 transition"
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        {/* Comments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comments.map((comment, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <CommentCard
                text={comment.text}
                author={comment.author}
                image={comment.image.src}
                comunidade={true}
                onClick={() => setSelectedComment(comment)}
              />
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-[#0033FF] text-white px-8 py-2 rounded-full font-bold uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver mais
          </motion.button>
        </motion.div>
      </section>

      {/* Overlay */}
      <CommentOverlay
        comment={selectedComment}
        onClose={() => setSelectedComment(null)}
      />
    </div>
  );
}

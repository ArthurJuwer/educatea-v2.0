"use client";

import { motion } from "framer-motion";
import CommentCard from "@/components/ForumComments";

import avatar01 from "../../public/images/avatars/avatar01.png";
import avatar02 from "../../public/images/avatars/avatar02.png";
import avatar03 from "../../public/images/avatars/avatar03.png";
import avatar04 from "../../public/images/avatars/avatar04.png";
import avatar05 from "../../public/images/avatars/avatar05.png";
import avatar06 from "../../public/images/avatars/avatar06.png";

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

export default function Comunidade() {
  const comments = [
    { text: "Projeto incrível! Vai ajudar muitos professores a trabalharem de forma mais inclusiva. 👏", author: "João Guilherme", image: avatar01 },
    { text: "Adorei a ideia! Muito importante trazer tecnologia para apoiar alunos com TEA.", author: "Maria Clara", image: avatar02 },
    { text: "Sensacional! Esse jogo tem um propósito lindo e educativo. 💙", author: "Pedro Henrique", image: avatar03 },
    { text: "Parabéns pela iniciativa! Educação inclusiva transforma vidas.", author: "Ana Beatriz", image: avatar04 },
    { text: "Que orgulho ver estudantes criando algo tão impactante. 🚀", author: "Lucas Andrade", image: avatar05 },
    { text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.", author: "Arthur Juwer", image: avatar06 },
    { text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.", author: "Arthur Juwer", image: avatar01 },
    { text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.", author: "Arthur Juwer", image: avatar04 },
    { text: "Parabéns pela iniciativa! Educação inclusiva transforma vidas.", author: "Ana Beatriz", image: avatar04 },
    { text: "Que orgulho ver estudantes criando algo tão impactante. 🚀", author: "Lucas Andrade", image: avatar05 },
    { text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.", author: "Arthur Juwer", image: avatar06 },
    { text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.", author: "Arthur Juwer", image: avatar01 },
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
        {/* Header */}
        <h1 className="text-3xl font-medium lg:leading-11 w-full">
          Olá, Visitante! <br />
          <span className="text-lg lg:text-3xl">
            Gostaria de procurar um comentário específico?
          </span>
        </h1>

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
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <CommentCard
                text={comment.text}
                author={comment.author}
                image={comment.image.src}
                comunidade={true}
              />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
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
    </div>
  );
}

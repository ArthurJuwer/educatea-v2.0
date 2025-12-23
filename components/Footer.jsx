"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ================= VARIANTS ================= */

const footerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
      <motion.p variants={itemVariant}>
        © EducaTEA - Todos os direitos reservados.
      </motion.p>

      <span className="lg:hidden h-0.5 w-4/5 block bg-white"></span>

      {/* Navigation */}
      <motion.nav variants={itemVariant}>
        <ul
          className="
            lg:flex lg:gap-10 gap-4 items-center
            grid grid-cols-2 place-content-center place-items-center
          "
        >
          {/* Comunidade */}
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer hover:opacity-80"
          >
            Comunidade
          </motion.li>

          {/* Termos */}
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer hover:opacity-80"
          >
            Termos de uso
          </motion.li>

          {/* Language */}
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/images/languages/Brasil.png"
              width={20}
              height={20}
              alt="Bandeira do Brasil"
            />
            <span>Português (Brasil)</span>
          </motion.li>

          {/* Instagram */}
          <motion.li
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.25 }}
            className="
              cursor-pointer
              size-10
              rounded-full
              flex items-center justify-center
              bg-[#0033FF]
            "
          >
            <Image
              src="/images/social-medias/Instagram.png"
              width={20}
              height={20}
              alt="Instagram"
            />
          </motion.li>
        </ul>
      </motion.nav>
    </motion.footer>
  );
}

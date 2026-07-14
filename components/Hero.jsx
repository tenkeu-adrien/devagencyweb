"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden pt-24 pb-16"
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-orange-400 font-medium bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            Disponible pour de nouveaux projets
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Salut, je suis{" "}
            <span className="text-orange-500">Adrien Tenkeu</span>
            <br />
            Développeur Web Full-Stack
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mb-8">
            Je conçois et développe des applications web modernes, rapides et
            sur-mesure — du prototype à la mise en production — avec un focus
            particulier sur l'expérience utilisateur et la performance.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#portfolio"
              className="px-7 py-3.5 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-transparent border border-gray-700 text-white rounded-full font-semibold hover:border-orange-500 hover:text-orange-400 transition-colors"
            >
              Me contacter
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/tenkeu-adrien"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:contact@adrien-tenkeu.dev"
              aria-label="Email"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              <HiOutlineMail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-orange-500 to-orange-300 rotate-6" />
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-4 border-gray-800 -rotate-3">
              <Image
                src="/profile.jpg"
                alt="Adrien Tenkeu, développeur web"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Badge flottant */}
            <div className="absolute -bottom-5 -left-5 bg-gray-800 border border-gray-700 rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-bold text-orange-400">3+</p>
              <p className="text-xs text-gray-400">ans d'expérience</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.a
        href="#a-propos"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-orange-400 transition-colors"
        aria-label="Défiler vers le bas"
      >
        <FaArrowDown size={18} />
      </motion.a>
    </section>
  );
}

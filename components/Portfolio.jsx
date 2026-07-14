"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const CATEGORIES = ["Tous", "Frontend", "Full-Stack", "Backend"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Mode",
    description:
      "Boutique en ligne complète avec panier, paiement Stripe et tableau de bord administrateur.",
    category: "Full-Stack",
    tags: ["Next.js", "Tailwind", "Stripe"],
    image: "/1.jpg",
    github: "https://github.com/tenkeu-adrien",
    demo: "#",
  },
  {
    id: 2,
    title: "App Gestion de Projet",
    description:
      "Application web de gestion de tâches en temps réel avec authentification et collaboration d'équipe.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Firebase"],
    image: "/2.jpg",
    github: "https://github.com/tenkeu-adrien",
    demo: "#",
  },
  {
    id: 3,
    title: "Site Vitrine Immobilier",
    description:
      "Site vitrine moderne pour une agence immobilière avec recherche de biens et contact intégré.",
    category: "Frontend",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "/10.jpg",
    github: "https://github.com/tenkeu-adrien",
    demo: "#",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif avec graphiques dynamiques et export de rapports PDF.",
    category: "Backend",
    tags: ["React", "Chart.js", "Express"],
    image: "/carousel-1.jpg",
    github: "https://github.com/tenkeu-adrien",
    demo: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-12">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4"
          >
            Nos Réalisations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Découvrez une sélection de projets que nous avons conçus et
            développés pour nos clients.
          </motion.p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === cat
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-transparent border-gray-700 text-gray-400 hover:border-orange-500 hover:text-orange-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                layout
                className="group relative rounded-xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                  {/* Badge catégorie */}
                  <span className="absolute top-4 left-4 text-xs font-semibold bg-gray-900/80 text-orange-400 px-3 py-1 rounded-full border border-orange-500/30">
                    {project.category}
                  </span>

                  {/* Liens overlay */}
                  <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900/80 text-white p-2 rounded-full hover:bg-orange-500 transition-colors"
                      aria-label={`Code source de ${project.title}`}
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900/80 text-white p-2 rounded-full hover:bg-orange-500 transition-colors"
                      aria-label={`Démo de ${project.title}`}
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full border border-orange-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Lien GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <FaGithub /> Voir sur GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/tenkeu-adrien"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors"
          >
            <FaGithub size={22} />
            Voir tous mes projets sur GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

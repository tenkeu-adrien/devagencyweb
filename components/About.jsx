"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";

const stats = [
  { value: "20+", label: "Projets réalisés" },
  { value: "15+", label: "Clients satisfaits" },
  { value: "3+", label: "Années d'expérience" },
  { value: "100%", label: "Projets livrés à temps" },
];

const values = [
  {
    icon: FaCode,
    title: "Code propre",
    text: "J'écris un code lisible, testé et maintenable, pensé pour évoluer avec votre projet.",
  },
  {
    icon: FaRocket,
    title: "Performance",
    text: "Sites rapides, optimisés pour le SEO et une excellente expérience mobile.",
  },
  {
    icon: FaLightbulb,
    title: "Solutions sur-mesure",
    text: "Chaque projet est unique : j'adapte l'architecture technique à vos besoins réels.",
  },
  {
    icon: FaHandshake,
    title: "Communication",
    text: "Un suivi transparent, des points réguliers et des délais respectés.",
  },
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Colonne texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              À propos de moi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Développeur passionné, orienté résultats
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Je m'appelle <span className="text-white font-medium">Adrien Tenkeu</span>,
              développeur web full-stack spécialisé dans l'écosystème
              JavaScript moderne (React, Next.js, Node.js). Je transforme des
              idées en applications web solides, de la conception de
              l'interface jusqu'au déploiement.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Curieux et rigoureux, j'aime comprendre les besoins réels d'un
              projet avant d'écrire la moindre ligne de code. Que ce soit pour
              une startup qui lance son MVP ou une entreprise qui modernise
              son système, j'apporte une approche pragmatique et une attention
              particulière aux détails.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-extrabold text-orange-400">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne valeurs */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <v.icon className="text-orange-400" size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

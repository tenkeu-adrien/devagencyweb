"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Échange & cadrage",
    text: "On discute de vos objectifs, votre cible et vos contraintes pour cadrer le projet.",
  },
  {
    step: "02",
    title: "Proposition & devis",
    text: "Vous recevez une proposition claire : périmètre, délais et budget, sans surprise.",
  },
  {
    step: "03",
    title: "Conception & développement",
    text: "Design puis développement, avec des points d'étape réguliers pour valider ensemble.",
  },
  {
    step: "04",
    title: "Livraison & suivi",
    text: "Mise en ligne, formation si besoin, puis un accompagnement pour la suite.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-gray-900 py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Notre méthode
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comment nous travaillons avec vous
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-6"
            >
              <span className="text-orange-500/30 font-extrabold text-4xl leading-none">
                {s.step}
              </span>
              <h3 className="text-white font-semibold mt-3 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

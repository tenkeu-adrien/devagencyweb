"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative bg-gray-900 py-20 px-4 md:px-10 text-center overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-6"
        >
          Ce que nous faisons
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Des services digitaux pensés pour votre croissance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400"
        >
          De la conception à la mise en ligne, nous couvrons tous les besoins
          digitaux de votre entreprise : sites web, applications mobiles,
          référencement et publicité en ligne.
        </motion.p>
      </div>
    </section>
  );
}

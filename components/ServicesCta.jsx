"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function ServicesCta() {
  return (
    <section className="bg-orange-500 py-16 px-4 md:px-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-white"
      >
        Prêt à démarrer votre projet ?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg mb-8 text-white/90 max-w-2xl mx-auto"
      >
        Dites-nous ce dont vous avez besoin, nous revenons vers vous sous 24h
        avec une proposition claire.
      </motion.p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link
          href="/contact"
          className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
        >
          Nous contacter
        </Link>
        <Link
          href="/contact#devis"
          className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all inline-flex items-center gap-2"
        >
          Devis gratuit <FaArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

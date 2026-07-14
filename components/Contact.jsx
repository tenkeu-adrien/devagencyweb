"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Remplacer par un vrai appel API (ex: /api/contact) selon vos besoins
    setTimeout(() => setStatus("sent"), 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Discutons de votre projet
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une idée en tête ? Un projet à démarrer ? Envoyez-moi un message,
            je réponds sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                <FaEnvelope className="text-orange-400" />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <a
                  href="mailto:contact@adrien-tenkeu.dev"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  contact@adrien-tenkeu.dev
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-orange-400" />
              </div>
              <div>
                <p className="text-white font-medium">Localisation</p>
                <p className="text-gray-400 text-sm">Disponible en remote</p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/tenkeu-adrien"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-gray-800/50 border border-gray-700 rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Nom</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vous@exemple.com"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Parlez-moi de votre projet..."
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-7 py-3.5 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-60"
            >
              {status === "sending"
                ? "Envoi en cours..."
                : status === "sent"
                ? "Message envoyé ✓"
                : "Envoyer le message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

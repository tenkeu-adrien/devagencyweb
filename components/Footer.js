"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/apropos" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-orange-600">Dev Agency</h2>
          <p className="mt-4 text-white/80">
            Nous créons des solutions digitales sur-mesure : sites web, applications
            mobiles, SEO et SEM. Votre réussite est notre priorité.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4 mb-6 text-orange-500 text-2xl">
            <a href="https://facebook.com/devagenceweb" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/devagencyweb" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/djeudje-tenkeu-adrien-kevin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com/devagencyweb" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>

          <Link
            href="/contact#devis"
            className="inline-block bg-orange-700 text-white px-6 py-3 rounded-full hover:bg-orange-800 transition"
          >
            Devis gratuit
          </Link>
        </motion.div>
      </div>

      <div className="mt-12 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Dev Agency. Tous droits réservés.
      </div>
    </footer>
  );
}

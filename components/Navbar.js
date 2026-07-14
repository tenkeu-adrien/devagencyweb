"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaRegPaperPlane } from "react-icons/fa";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "À propos", href: "/apropos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 backdrop-blur py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-orange-500">
          Dev Agency
        </a>

        <ul className="flex space-x-6 mx-auto">
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <a
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-orange-500 font-semibold"
                    : "text-white"
                } transition-colors text-lg md:text-xl`}
              >
                {link.label}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        <a
          href="/contact#devis"
          className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-700 transition-colors"
        >
          <FaRegPaperPlane className="text-lg" />
          Obtenir un devis
        </a>
      </div>
    </nav>
  );
}

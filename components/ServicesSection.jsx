"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMobileAlt, FaSearch, FaBullhorn, FaWordpress } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const services = [
  {
    icon: <FaComputer className="text-4xl text-orange-500" />,
    title: "Développement Web",
    description: "Sites vitrines, e-commerce, plateformes sur-mesure.",
    link: "/services/developpement-web",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-orange-500" />,
    title: "Développement Mobile",
    description: "Applications mobiles Android et iOS performantes.",
    link: "/services/developpement-mobile",
  },
  {
    icon: <FaSearch className="text-4xl text-orange-500" />,
    title: "SEO",
    description: "Optimisation de votre site pour Google.",
    link: "/services/seo",
  },
  {
    icon: <FaBullhorn className="text-4xl text-orange-500" />,
    title: "SEM",
    description: "Campagnes sponsorisées sur Google & Réseaux sociaux.",
    link: "/services/sem",
  },
  {
    icon: <FaWordpress className="text-4xl text-orange-500" />,
    title: "Création de Site WordPress",
    description:
      "Sites web professionnels, sur-mesure et optimisés pour vos besoins.",
    link: "/services/creation-site-wordpress",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <motion.span
          className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-wider mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nos expertises
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Nos Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.08 },
                },
                hover: {
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="border p-6 rounded-2xl shadow hover:shadow-xl bg-white hover:bg-orange-50 transition-colors duration-300"
            >
              <Link
                href={service.link}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div>{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

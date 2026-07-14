"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiStripe,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Outils & autres",
    skills: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Stripe", icon: SiStripe },
      { name: "Git", icon: FaGitAlt },
      { name: "Docker", icon: FaDocker },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="competences" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
            Boîte à outils
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Compétences techniques
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Les technologies que j'utilise au quotidien pour construire des
            produits web fiables et performants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15, duration: 0.5 }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6"
            >
              <h3 className="text-white font-semibold mb-5">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 hover:border-orange-500/40 transition-colors"
                  >
                    <skill.icon className="text-orange-400 shrink-0" size={20} />
                    <span className="text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

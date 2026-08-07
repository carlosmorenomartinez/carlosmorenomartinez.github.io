import { motion } from "framer-motion";
import { FaReact, FaAndroid } from "react-icons/fa";
import {
  SiKotlin,
  SiFirebase,
  SiGooglecloud,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";
import { BsRobot } from "react-icons/bs";

const technologies = [
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <FaAndroid />,
    name: "Android",
  },
  {
    icon: <SiKotlin />,
    name: "Kotlin",
  },
  {
    icon: <BsRobot />,
    name: "Inteligencia Artificial",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
  },
  {
    icon: <SiGooglecloud />,
    name: "Google Cloud",
  },
  {
    icon: <SiVite />,
    name: "Vite",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
];

export default function TechStack() {
  return (
    <section
      id="tecnologias"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 mb-6">
            Stack tecnológico
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Tecnologías con las que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {" "}desarrollo
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Utilizo herramientas modernas para desarrollar aplicaciones
            Android, aplicaciones web y soluciones basadas en Inteligencia
            Artificial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="bg-[#111827] border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex justify-center text-5xl text-cyan-400">
                {tech.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
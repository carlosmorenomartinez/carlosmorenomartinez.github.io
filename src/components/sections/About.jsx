import { motion } from "framer-motion";

const stats = [
  {
    value: "2+",
    title: "Aplicaciones publicadas",
  },
  {
    value: "IA",
    title: "Integración con Inteligencia Artificial",
  },
  {
    value: "React",
    title: "Frontend moderno",
  },
  {
    value: "Firebase",
    title: "Backend en la nube",
  },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center"
    >
      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 mb-6">
          Sobre mí
        </div>

        <h2 className="text-5xl font-bold leading-tight mb-8">
          Desarrollo aplicaciones que
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            {" "}
            resuelven problemas reales.
          </span>
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-6">
          Soy desarrollador especializado en aplicaciones Android, React,
          Kotlin e Inteligencia Artificial. Disfruto creando soluciones que
          combinan un diseño cuidado con una experiencia de usuario sencilla
          y un rendimiento excelente.
        </p>

        <p className="text-gray-400 text-lg leading-8">
          Mi objetivo es transformar ideas en productos digitales útiles,
          modernos y escalables, aprovechando las tecnologías más actuales
          para ofrecer aplicaciones de alta calidad.
        </p>
      </motion.div>

      {/* Tarjetas */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6"
      >
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-[#111827] border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {item.value}
            </h3>

            <p className="text-gray-400 mt-4 leading-6">
              {item.title}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
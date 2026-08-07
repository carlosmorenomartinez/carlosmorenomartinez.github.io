import { motion } from "framer-motion";
import { FaGooglePlay, FaMobileAlt, FaRobot } from "react-icons/fa";
import finanzcontrol from "../../assets/images/finanzcontrol.png";
import jardin from "../../assets/images/jardin-inteligente.png";

const apps = [
  {
    nombre: "FinanzControl+",
    descripcion:
      "Controla ingresos, gastos y patrimonio desde una única aplicación moderna e intuitiva. Diseñada para ayudarte a gestionar tus finanzas personales de forma sencilla y visual.",
    imagen: finanzcontrol,
    color: "from-emerald-500 to-green-600",
    estado: "Disponible en Google Play",
    estadoColor: "text-emerald-400",
    enlace:
      "https://play.google.com/store/apps/details?id=com.finanzcontrol.plus&hl=es",
    disponible: true,
    tags: ["Android", "Finanzas", "IA"],
  },
  {
    nombre: "Jardín Inteligente",
    descripcion:
      "La Inteligencia Artificial te ayuda a identificar plantas, organizar tareas de mantenimiento y cuidar tu jardín de una forma mucho más sencilla.",
    imagen: jardin,
    color: "from-cyan-500 to-emerald-500",
    estado: "Actualmente en prueba cerrada",
    estadoColor: "text-yellow-400",
    enlace: null,
    disponible: false,
    tags: ["Android", "IA", "Jardinería"],
  },
];

export default function Projects() {
  return (
    <section
      id="apps"
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
            Aplicaciones
          </div>

          <h2 className="text-5xl font-bold">
            Mis proyectos
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Estas son algunas de las aplicaciones que he desarrollado,
            combinando Android, React e Inteligencia Artificial para resolver
            problemas reales con una experiencia moderna y sencilla.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {apps.map((app, index) => (
            <motion.div
              key={app.nombre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#111827] hover:border-cyan-400 transition-all duration-300 shadow-xl"
            >
              <div
                className={`h-2 bg-gradient-to-r ${app.color}`}
              />

              <img
                src={app.imagen}
                alt={app.nombre}
                className="w-full p-8 transition duration-500 group-hover:scale-105"
              />

              <div className="px-8 pb-8">

                <h3 className="text-3xl font-bold">
                  {app.nombre}
                </h3>

                <div className="flex flex-wrap gap-2 mt-5">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-gray-400 leading-8">
                  {app.descripcion}
                </p>

                <div
                  className={`mt-6 flex items-center gap-2 font-semibold ${app.estadoColor}`}
                >
                  <FaRobot />
                  {app.estado}
                </div>

                <div className="mt-8">

                  {app.disponible ? (
                    <a
                      href={app.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 font-semibold hover:scale-105 transition-all duration-300"
                    >
                      <FaGooglePlay />
                      Ver en Google Play
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-3 rounded-xl bg-gray-700 px-6 py-3 text-gray-300 cursor-not-allowed"
                    >
                      <FaMobileAlt />
                      En prueba cerrada
                    </button>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}
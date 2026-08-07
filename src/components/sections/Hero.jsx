import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaChevronDown } from "react-icons/fa";
import finanzcontrol from "../../assets/images/finanzcontrol.png";
import jardin from "../../assets/images/jardin-inteligente.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 py-24 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            Android · React · IA
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight">
            Creo aplicaciones
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              inteligentes
            </span>
            <br />
            que simplifican la vida.
          </h1>

          <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-xl">
            Desarrollo aplicaciones Android modernas, aplicaciones web con
            React e integraciones con Inteligencia Artificial para convertir
            ideas en productos digitales útiles y de alta calidad.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#apps"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Ver aplicaciones
              <FaArrowRight />
            </a>

            <a
              href="#contacto"
              className="flex items-center gap-2 rounded-xl border border-gray-600 px-8 py-4 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              <FaEnvelope />
              Contactar
            </a>

          </div>

          {/* Estadísticas */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">

            <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-5 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
              <p className="text-gray-400 text-sm mt-2">
                Apps publicadas
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-5 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">AI</h3>
              <p className="text-gray-400 text-sm mt-2">
                Inteligencia Artificial
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-5 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">React</h3>
              <p className="text-gray-400 text-sm mt-2">
                Frontend moderno
              </p>
            </div>

          </div>
        </motion.div>

        {/* Imágenes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <motion.img
            src={finanzcontrol}
            alt="FinanzControl+"
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="w-72 rounded-3xl shadow-2xl rotate-[-8deg]"
          />

          <motion.img
            src={jardin}
            alt="Jardín Inteligente"
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="absolute right-0 bottom-[-30px] w-60 rounded-3xl shadow-2xl rotate-[10deg]"
          />
        </motion.div>

      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#apps"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 text-2xl"
      >
        <FaChevronDown />
      </motion.a>
    </section>
  );
}
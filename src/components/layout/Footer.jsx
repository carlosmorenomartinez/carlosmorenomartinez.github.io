import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/10 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >

          {/* Logo */}

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">
              <span className="text-cyan-400">&lt;</span>
              Carlos Moreno
              <span className="text-cyan-400"> /&gt;</span>
            </h3>

            <p className="text-gray-500 mt-2">
              Desarrollo Android · React · Inteligencia Artificial
            </p>
          </div>

          {/* Enlaces */}

          <div className="flex gap-8 text-gray-400">

            <a
              href="https://github.com/carlosmorenomartinez"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://play.google.com/store/apps/developer?id=CarlosMoreno65&hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Google Play
            </a>

            <a
              href="mailto:carlos_morenomartinez@yahoo.es"
              className="hover:text-cyan-400 transition"
            >
              Email
            </a>

          </div>

        </motion.div>

        {/* Línea inferior */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >

          <p className="text-gray-500 text-sm">
            © {year} Carlos Moreno. Todos los derechos reservados.
          </p>

          <a
            href="#inicio"
            className="text-cyan-400 hover:text-white transition"
          >
            ↑ Volver arriba
          </a>

        </motion.div>

      </div>
    </footer>
  );
}
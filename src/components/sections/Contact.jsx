import { motion } from "framer-motion";

const contacts = [
  {
    icon: "📧",
    title: "Email",
    text: "carlos_morenomartinez@yahoo.es",
    link: "mailto:carlos_morenomartinez@yahoo.es",
  },
  {
    icon: "💻",
    title: "GitHub",
    text: "Ver mis proyectos",
    link: "https://github.com/carlosmorenomartinez",
  },
  {
    icon: "📱",
    title: "Google Play",
    text: "Mis aplicaciones",
    link: "https://play.google.com/store/apps/developer?id=CarlosMoreno65&hl=es",
  },
  {
    icon: "📍",
    title: "Ubicación",
    text: "España\nTrabajo en remoto",
    link: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-28 px-6 bg-gradient-to-b from-[#030712] to-[#07111f]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300">
            Contacto
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            ¿Hablamos de tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              próximo proyecto?
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Desarrollo aplicaciones Android, aplicaciones web con React e
            integraciones con Inteligencia Artificial. Si tienes una idea o un
            proyecto en mente, estaré encantado de ayudarte a convertirlo en una
            solución digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {contacts.map((item, index) => {

            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="bg-[#111827] border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-400 transition-all duration-300"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="text-xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 whitespace-pre-line break-all">
                  {item.text}
                </p>
              </motion.div>
            );

            return item.link ? (
              <a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {Card}
              </a>
            ) : (
              <div key={item.title}>
                {Card}
              </div>
            );
          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="mailto:carlos_morenomartinez@yahoo.es"
            className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            🚀 Hablemos sobre tu proyecto
          </a>
        </motion.div>

      </div>
    </section>
  );
}
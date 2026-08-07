import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  {
    name: "Inicio",
    href: "#inicio",
  },
  {
    name: "Apps",
    href: "#apps",
  },
  {
    name: "Sobre mí",
    href: "#sobre-mi",
  },
  {
    name: "Tecnologías",
    href: "#tecnologias",
  },
  {
    name: "Contacto",
    href: "#contacto",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-cyan-500/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}

        <a
          href="#inicio"
          className="text-2xl font-bold tracking-wide"
        >
          <span className="text-cyan-400">&lt;</span>
          Carlos Moreno
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        {/* Menú escritorio */}

        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón móvil */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-cyan-400"
          aria-label="Abrir menú"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Menú móvil */}

      {menuOpen && (
        <div className="md:hidden bg-[#030712] border-t border-cyan-500/10">
          <ul className="flex flex-col py-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
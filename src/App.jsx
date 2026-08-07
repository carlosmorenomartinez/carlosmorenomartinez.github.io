import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
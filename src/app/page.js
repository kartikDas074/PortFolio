import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />

        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

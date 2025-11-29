import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

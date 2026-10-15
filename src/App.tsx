import { useEffect } from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Skills from "./sections/Skills.tsx";
import Experience from "./sections/Experience.tsx";
import Projects from "./sections/Projects.tsx";
import Education from "./sections/Education.tsx";
import Certifications from "./sections/Certifications.tsx";
import Leadership from "./sections/Leadership.tsx";
import Contact from "./sections/Contact.tsx";
import Footer from "./components/Footer.tsx";
import CustomCursor from "./components/CustomCursor.tsx";
import ScrollFeatures from "./components/ScrollFeatures.tsx";

export default function App() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <>
      <ScrollFeatures />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

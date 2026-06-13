import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import PullQuote from "@/components/PullQuote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SpotlightCursor from "@/components/SpotlightCursor";
// Tell Vercel to statically generate this page and cache it on the CDN edge
export const dynamic = "force-static";
export const revalidate = false;

export default function Home() {
  return (
    <>
      <SpotlightCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <PullQuote />
      <Contact />
      <Footer />
    </>
  );
}

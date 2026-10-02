import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import WhyEmessWeb from "./components/WhyEmessWeb";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function AgencyHome() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-black transition-colors duration-500 dark:bg-[#050505] dark:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <WhyEmessWeb />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

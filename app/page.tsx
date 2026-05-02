import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/services/page";
import Process from "@/components/Process";
import TrustedCompanies from "@/components/TrustedCompanies";
import Testimonials from "@/components/Testimonials";
import WhyOrfys from "@/components/WhyOrfys";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/hooks/useScrollToTop";
import ChatWidget from "@/components/chatWidget";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <TrustedCompanies />
        <Testimonials />
        <WhyOrfys />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </>
  );
};

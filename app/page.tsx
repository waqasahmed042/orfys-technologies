import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyOrfys from "@/components/WhyOrfys";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/hooks/scrollToTop";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyOrfys />
        <CTA />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
}

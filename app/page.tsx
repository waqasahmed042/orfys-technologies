import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/services/page";
import Products from "@/components/Products";
import WhyOrfys from "@/components/WhyOrfys";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/hooks/userScrollToTop";
import Testimonials from "@/components/Testimonials";

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
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

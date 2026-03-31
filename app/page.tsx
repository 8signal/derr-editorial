import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SloganBand from "@/components/SloganBand";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import ServicesSection from "@/components/ServicesSection";
import TransformSection from "@/components/TransformSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import MicroInteractions from "@/components/MicroInteractions";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MicroInteractions />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SloganBand />
        <DifferentiatorSection />
        <ServicesSection />
        <TransformSection />
        <TestimonialCarousel />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

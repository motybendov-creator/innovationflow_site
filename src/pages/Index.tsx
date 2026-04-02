import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TimelineSection from "@/components/TimelineSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TimelineSection />
      <DifferentiatorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

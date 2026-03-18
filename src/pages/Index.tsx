import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import AboutSection from "@/components/AboutSection";
import SymptomsSection from "@/components/SymptomsSection";
import ApproachSection from "@/components/ApproachSection";
import ServicesSection from "@/components/ServicesSection";
import TechniquesSection from "@/components/TechniquesSection";
import TransformationSection from "@/components/TransformationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkWithMeSection from "@/components/WorkWithMeSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PainPointsSection />
    <AboutSection />
    <SymptomsSection />
    <ApproachSection />
    <ServicesSection />
    <TechniquesSection />
    <TransformationSection />
    <TestimonialsSection />
    <WorkWithMeSection />
    <Footer />
  </div>
);

export default Index;

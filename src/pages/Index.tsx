import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import TransformationSection from "@/components/TransformationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkWithMeSection from "@/components/WorkWithMeSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PainPointsSection />
    <ServicesSection />
    <ApproachSection />
    <AboutSection />
    <TransformationSection />
    <TestimonialsSection />
    <WorkWithMeSection />
    <Footer />
  </div>
);

export default Index;

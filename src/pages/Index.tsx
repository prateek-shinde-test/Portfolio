import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import BugHuntGame from "@/components/BugHuntGame";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HireMeButton from "@/components/HireMeButton";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <BugHuntGame />
      <ContactSection />
      <Footer />
      <HireMeButton />
    </div>
  );
};

export default Index;

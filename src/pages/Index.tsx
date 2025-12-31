import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ProfileType } from "@/lib/profile-content";

interface IndexProps {
  currentProfile: ProfileType;
}

const Index = ({ currentProfile }: IndexProps) => {
  const handleDownloadResume = () => {
    window.open('https://www.overleaf.com/read/spnvgcbkswvr#fd0d30', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <Navigation />
      <Hero currentProfile={currentProfile} />
      <About currentProfile={currentProfile} />
      <Resume onViewResume={handleDownloadResume} currentProfile={currentProfile} />
      <Achievements currentProfile={currentProfile} />
      <Projects currentProfile={currentProfile} />
      <Certifications currentProfile={currentProfile} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

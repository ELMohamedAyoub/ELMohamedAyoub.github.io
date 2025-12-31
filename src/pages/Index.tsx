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
    const link = document.createElement('a');
    link.href = '/resume-a7f8c9e2d4b1.pdf';
    link.download = 'resume-a7f8c9e2d4b1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
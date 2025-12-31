import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground";
import ProfileSwitcher from "@/components/ProfileSwitcher";
import { PageTransition } from "@/components/PageTransition";
import { useState } from "react";
import { ProfileType } from "@/lib/profile-content";

const queryClient = new QueryClient();

const App = () => {
  const [currentProfile, setCurrentProfile] = useState<ProfileType>('technical');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetProfile, setTargetProfile] = useState<ProfileType>('technical');

  const handleProfileChange = (newProfile: ProfileType) => {
    if (newProfile === currentProfile) return;
    
    setTargetProfile(newProfile);
    setIsTransitioning(true);
    
    // Change profile midway through transition
    setTimeout(() => {
      setCurrentProfile(newProfile);
    }, 600);
    
    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1400);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CustomCursor />
          <AnimatedBackground />
          <PageTransition isTransitioning={isTransitioning} targetProfile={targetProfile} />
          <ProfileSwitcher 
            currentProfile={currentProfile} 
            onProfileChange={handleProfileChange} 
          />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index currentProfile={currentProfile} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

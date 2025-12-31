import { motion } from "framer-motion";
import { useScrollReveal, scrollVariants } from "@/hooks/use-scroll-reveal";
import { Trophy, Award, Target, Briefcase } from "lucide-react";
import InteractiveElement from "@/components/InteractiveElement";
import { ProfileType, copywritingAchievements } from "@/lib/profile-content";

interface AchievementsProps {
  currentProfile: ProfileType;
}

const Achievements = ({ currentProfile }: AchievementsProps) => {
  const { ref, isInView } = useScrollReveal();

  const technicalAchievements = [
    {
      icon: Trophy,
      title: "AI-Powered Autism Detection System",
      date: "2024 - 2025",
      description: "Developed comprehensive AI system for early autism diagnosis using eye-tracking patterns, gaze detection, and ML models. Includes post-diagnosis therapy recommendations and monitoring tools.",
      link: "https://github.com/ELMohamedAyoub/AI-Powered-Autism-Detection-Diagnosis-and-Therapy-App",
    },
    {
      icon: Award,
      title: "Healthcare AI Platform - Your AI Doctor",
      date: "2024 - 2025",
      description: "Built enterprise-grade bilingual voice-enabled patient monitoring platform with clinical data extraction, RAG-enhanced medical guidance, and comprehensive healthcare provider dashboards.",
      link: "https://github.com/ELMohamedAyoub/Your_AI_Doctor",
    },
    {
      icon: Target,
      title: "LIMS On Steroids",
      date: "2024",
      description: "Developed multi-language Laboratory Information Management System with Next.js, NestJS, PostgreSQL, and Prisma. Features RBAC, audit logging, and AI-ready architecture for healthcare labs.",
      link: "https://github.com/ELMohamedAyoub/LIMSOnSteroids",
    },
    {
      icon: Briefcase,
      title: "Full-Stack & AI Engineering",
      date: "2020 - Present",
      description: "Building production-ready applications with modern tech stack: TypeScript, Next.js, NestJS, Python, FastAPI, and Docker. Specialized in healthcare AI and enterprise systems.",
    },
  ];

  const achievements = currentProfile === 'copywriting' 
    ? copywritingAchievements.map(ach => ({ ...ach, icon: Trophy })) 
    : technicalAchievements;
  
  const sectionTitle = currentProfile === 'copywriting' ? 'Featured Work' : 'Achievements';
  const sectionDescription = currentProfile === 'copywriting'
    ? 'Successful marketing campaigns and client results that drive real business growth'
    : 'Major milestones and significant projects showcasing technical expertise';

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={scrollVariants.floatUp.initial}
          animate={isInView ? scrollVariants.floatUp.animate : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            {currentProfile === 'copywriting' ? (
              <><span className="gradient-text">Featured</span> Work</>
            ) : (
              <>Key <span className="gradient-text">Achievements</span></>
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const variant = index % 2 === 0 ? scrollVariants.scattered : scrollVariants.scatteredRight;
            return (
              <InteractiveElement 
                key={index}
                as={(achievement as any).link ? "a" : "div"}
                href={(achievement as any).link}
                target={(achievement as any).link ? "_blank" : undefined}
                rel={(achievement as any).link ? "noopener noreferrer" : undefined}
                className="block"
              >
                <motion.div
                  initial={variant.initial}
                  animate={isInView ? variant.animate : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="glass p-8 rounded-2xl h-full group"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:animate-glow-pulse">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-secondary text-sm font-semibold mb-3">{achievement.date}</p>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              </InteractiveElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
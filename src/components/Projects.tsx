import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ParallaxContainer from "@/components/ParallaxContainer";
import { copywritingProjects, ProfileType } from "@/lib/profile-content";

interface ProjectsProps {
  currentProfile: ProfileType;
}

const Projects = ({ currentProfile }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalProjects = [
    {
      title: "Cardiovascular Disease Prediction (IoT + ML)",
      description: "Engineered ML pipelines combining IoT sensor data from 200+ patient devices for cardiac risk assessment. Trained models with TensorFlow and scikit-learn achieving 91% accuracy, reducing false positives by 15%. Built real-time dashboards visualizing patient health trends and predictive outputs (1,000+ data points/day).",
      badges: ["IoT", "Machine Learning", "Healthcare", "TensorFlow", "Real-Time Analytics"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      title: "AI-Assisted Communication App for Autistic Children",
      description: "Designed NLP-based assistive communication app used by 50+ children in pilot testing. Applied transformer models to interpret speech and detect emotional tone, improving response accuracy by 20%. Enhanced accessibility through user-centered design and adaptive learning, increasing engagement time by 30%.",
      badges: ["NLP", "Transformers", "Healthcare AI", "Accessibility", "PyTorch"],
      link: "https://github.com/ELMohamedAyoub/AI-Powered-Autism-Detection-Diagnosis-and-Therapy-App",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    },
    {
      title: "Logistics Platform - Laboratoire National Mohammed VI",
      description: "Designed logistics platform optimizing delivery routes and real-time tracking for 50+ vehicles. Automated planning workflows, improving resource utilization by 30%. Developed modular dashboards and an interactive public catalog for dynamic updates with real-time driver updates.",
      badges: ["Full-Stack", "React", "Node.js", "Real-Time", "Optimization"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      title: "Patient Management System - Centre Dentaire Mohammed VI",
      description: "Built comprehensive patient management system integrating appointment scheduling and analytics. Reduced administrative workload by 25% through automated data entry. Created dashboards to monitor patient flow and service performance for 200+ daily patients.",
      badges: ["Healthcare", "Full-Stack", "PostgreSQL", "Dashboard", "Automation"],
      image: "https://images.unsplash.com/photo-1609840114035-3c981407e1b6?w=800&q=80",
    },
    {
      title: "Multilingual Healthcare Chatbots (French-Arabic)",
      description: "Developed multilingual healthcare chatbots improving patient engagement for 50+ clients. Implemented automated CRM pipelines with n8n and Zapier to streamline business processes. Built predictive models and integrated automation workflows using cloud APIs.",
      badges: ["NLP", "Chatbots", "Automation", "n8n", "Zapier", "Multilingual"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    },
    {
      title: "AI-Powered Autism Detection System (GitHub)",
      description: "Comprehensive AI system for early autism diagnosis using eye-tracking patterns, gaze detection, and ML models. Includes post-diagnosis therapy recommendations and monitoring tools with FastAPI backend and mobile interface.",
      badges: ["AI/ML", "Computer Vision", "Healthcare", "Python", "Dart"],
      link: "https://github.com/ELMohamedAyoub/AI-Powered-Autism-Detection-Diagnosis-and-Therapy-App",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
    {
      title: "Your AI Doctor - Post-Surgery Monitoring (GitHub)",
      description: "Enterprise-grade bilingual voice-enabled patient monitoring platform with clinical data extraction, RAG-enhanced medical guidance, and comprehensive healthcare provider dashboards. Features real-time voice conversation and symptom tracking.",
      badges: ["Next.js", "AI/ML", "Healthcare", "TypeScript", "RAG"],
      link: "https://github.com/ELMohamedAyoub/Your_AI_Doctor",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
    {
      title: "LIMS On Steroids (GitHub)",
      description: "Multi-language Laboratory Information Management System with French/English UI. Built with NestJS, Next.js, PostgreSQL, and Prisma. Features role-based access control, audit logging, and AI-ready architecture for healthcare labs.",
      badges: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Docker"],
      link: "https://github.com/ELMohamedAyoub/LIMSOnSteroids",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    },
  ];

  const projects = currentProfile === 'copywriting' ? copywritingProjects : technicalProjects;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            {currentProfile === 'copywriting' ? 'Marketing' : 'Featured'} <span className="gradient-text">{currentProfile === 'copywriting' ? 'Campaigns' : 'Work'}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {currentProfile === 'copywriting' 
              ? 'Showcasing successful marketing campaigns and client results'
              : 'Highlighting some of my most impactful and innovative projects in AI and Machine Learning'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ParallaxContainer key={index} strength={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
              >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                        <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <>
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
              </motion.div>
            </ParallaxContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
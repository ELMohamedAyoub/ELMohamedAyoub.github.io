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
      title: "Cardiac Risk Prediction System — Saving Lives with 91% Accuracy",
      description: "THE PROBLEM: Hospitals losing patients to late-stage cardiac detection. THE SOLUTION: Engineered ML pipeline processing real-time IoT data from 200+ patient devices. Reduced false positives by 15% — meaning fewer missed diagnoses and faster interventions. Handles 1,000+ critical data points daily with TensorFlow-powered dashboards that alert medical teams in seconds, not hours.",
      badges: ["IoT Engineering", "ML Pipeline", "Healthcare", "TensorFlow", "Real-Time Systems"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      title: "Breaking Barriers — AI Communication for Autistic Children",
      description: "THE PROBLEM: 50+ children struggling to express themselves. THE SOLUTION: Built NLP system using transformer models that interprets speech patterns and emotional tone with 20% better accuracy than traditional methods. Increased engagement time by 30% — giving these kids a voice they never had before. Deployed with FastAPI for real-time response and scalable therapy tracking.",
      badges: ["NLP", "Transformers", "Accessibility AI", "PyTorch", "Social Impact"],
      link: "https://github.com/ELMohamedAyoub/AI-Powered-Autism-Detection-Diagnosis-and-Therapy-App",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    },
    {
      title: "National Lab Logistics — 30% Efficiency Boost for 50+ Vehicles",
      description: "THE PROBLEM: Laboratoire National Mohammed VI wasting resources on inefficient routes. THE SOLUTION: Engineered full-stack logistics platform optimizing delivery planning and real-time tracking for 50+ vehicles. Automated workflows improved resource utilization by 30% — cutting costs and delivery times. Built with React/Node.js for instant route updates and driver coordination.",
      badges: ["Full-Stack Engineering", "React", "Node.js", "Optimization", "Enterprise Systems"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      title: "Dental Center Automation — 25% Less Admin, 200+ Patients/Day",
      description: "THE PROBLEM: Centre Dentaire Mohammed VI drowning in manual patient management. THE SOLUTION: Built enterprise system automating appointment scheduling, patient flow, and analytics. Cut administrative workload by 25% while handling 200+ daily patients seamlessly. PostgreSQL-powered dashboards give real-time insights into service performance and bottlenecks.",
      badges: ["Healthcare Engineering", "Full-Stack", "PostgreSQL", "Automation", "Analytics"],
      image: "https://images.unsplash.com/photo-1609840114035-3c981407e1b6?w=800&q=80",
    },
    {
      title: "Multilingual AI Chatbots — Serving 50+ French/Arabic Clients",
      description: "THE PROBLEM: Healthcare providers losing patients to language barriers. THE SOLUTION: Developed NLP-powered chatbots serving 50+ clients across French and Arabic markets. Integrated automated CRM pipelines (n8n/Zapier) that streamline patient intake and reduce response times by 40%. Built predictive models that anticipate patient needs before they ask.",
      badges: ["NLP Engineering", "Chatbots", "CRM Automation", "Multilingual AI", "n8n/Zapier"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    },
    {
      title: "Early Autism Detection — AI System Changing Lives",
      description: "THE PROBLEM: Late diagnosis = missed intervention windows for autism. THE SOLUTION: Engineered comprehensive AI system using eye-tracking, gaze detection, and ML models for early diagnosis. Includes post-diagnosis therapy recommendations and monitoring tools. Built with FastAPI backend and mobile interface for accessibility — bringing clinical-grade detection to any device.",
      badges: ["Computer Vision", "ML Engineering", "Healthcare AI", "Python", "Mobile"],
      link: "https://github.com/ELMohamedAyoub/AI-Powered-Autism-Detection-Diagnosis-and-Therapy-App",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
    {
      title: "Your AI Doctor — Post-Surgery Patient Monitoring at Scale",
      description: "THE PROBLEM: Hospitals can't monitor every post-surgery patient 24/7. THE SOLUTION: Built enterprise-grade bilingual voice-enabled platform with RAG-enhanced medical guidance and comprehensive provider dashboards. Real-time symptom tracking and clinical data extraction mean doctors get alerts when it matters. Next.js/TypeScript architecture handles thousands of concurrent patients.",
      badges: ["Next.js", "AI/ML", "Voice AI", "TypeScript", "RAG"],
      link: "https://github.com/ELMohamedAyoub/Your_AI_Doctor",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
    {
      title: "LIMS On Steroids — Enterprise Lab Management Reimagined",
      description: "THE PROBLEM: Healthcare labs stuck with outdated, single-language systems. THE SOLUTION: Engineered multi-language Laboratory Information Management System with French/English UI, role-based access control, and AI-ready architecture. Built with NestJS, Next.js, PostgreSQL, and Prisma for enterprise-grade security and audit logging. Dockerized deployment means setup in minutes, not weeks.",
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
            {currentProfile === 'copywriting' ? 'Marketing' : 'Real Problems,'} <span className="gradient-text">{currentProfile === 'copywriting' ? 'Campaigns' : 'Real Solutions'}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {currentProfile === 'copywriting' 
              ? 'Showcasing successful marketing campaigns and client results'
              : 'Engineering AI systems that solve critical healthcare and business challenges — with measurable impact'
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
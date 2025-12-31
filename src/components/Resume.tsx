import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { ProfileType, copywritingExperience, copywritingEducation } from "@/lib/profile-content";

interface ResumeProps {
  onViewResume: () => void;
  currentProfile: ProfileType;
}

const Resume = ({ onViewResume, currentProfile }: ResumeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalExperiences = [
    {
      date: "Jan 2025 - Oct 2025",
      title: "AI Developer & Tech Consultant",
      company: "Self-Employed",
      points: [
        "Developed multilingual healthcare chatbots (French-Arabic) improving patient engagement for 50+ clients.",
        "Implemented automated CRM pipelines with n8n and Zapier to streamline business processes.",
        "Built predictive models and integrated automation workflows using cloud APIs.",
        "Provided technical consulting services for technology businesses.",
      ],
    },
    {
      date: "Jun 2025 - Aug 2025",
      title: "Software Engineering Intern",
      company: "Laboratoire National Mohammed VI",
      points: [
        "Designed logistics platform optimizing delivery routes and real-time tracking for 50+ vehicles.",
        "Automated planning workflows, improving resource utilization by 30%.",
        "Developed modular dashboards and an interactive public catalog for 500+ partner laboratories.",
        "Implemented real-time driver updates and dynamic route optimization.",
      ],
    },
    {
      date: "Aug 2024",
      title: "Full-Stack Developer Intern",
      company: "Centre Dentaire Mohammed VI",
      points: [
        "Built comprehensive patient management system integrating appointment scheduling and analytics.",
        "Reduced administrative workload by 25% through automated data entry.",
        "Created dashboards to monitor patient flow and service performance for 200+ daily patients.",
        "Implemented secure authentication and role-based access control.",
      ],
    },
    {
      date: "Jan 2023 - Present",
      title: "AI Lead",
      company: "ESM6ISS Student Organization",
      points: [
        "Leading AI research and development initiatives within the university.",
        "Mentoring students in machine learning and software engineering projects.",
        "Organizing workshops and technical training sessions on AI technologies.",
      ],
    },
  ];

  const technicalEducation = [
    {
      date: "2022 - June 2026 (Expected)",
      title: "Software Engineering - AI Focused",
      institution: "École Supérieure Mohammed 6 d'Ingénieurs des Sciences et de la Santé (ESM6ISS)",
      grade: "Casablanca, Morocco",
    },
  ];

  const experiences = currentProfile === 'copywriting' ? copywritingExperience : technicalExperiences;
  const education = currentProfile === 'copywriting' ? copywritingEducation : technicalEducation;
  
  const resumeDescription = currentProfile === 'copywriting' 
    ? "Marketing agency founder and professional copywriter with 6+ months of hands-on experience. Trilingual professional (French, Arabic, English) specializing in digital marketing, social media, and email campaigns for tech and e-commerce clients."
    : "Software Engineering student at ESM6ISS with hands-on experience in AI/ML consulting, data science, full-stack development, and technical advisory. Trilingual professional fluent in French, Arabic, and English.";

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {resumeDescription}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center text-primary"
          >
            Experience
          </motion.h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`relative flex flex-col md:flex-row ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center gap-8`}
                  >
                    {/* Content card */}
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <div className="glass p-6 rounded-xl hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group">
                        <span className="text-secondary text-sm font-semibold block mb-2">{exp.date}</span>
                        <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                        {(exp as any).link ? (
                          <a href={(exp as any).link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors font-medium">
                            {exp.company} →
                          </a>
                        ) : (
                          <span className="text-primary font-medium">{exp.company}</span>
                        )}
                        <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex">
                              <span className="text-primary mr-2 flex-shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-primary"
          >
            Education
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass p-6 rounded-xl hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group"
              >
                <span className="text-secondary text-sm font-semibold block mb-2">{edu.date}</span>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{edu.title}</h4>
                <p className="text-primary mb-2 font-medium">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={onViewResume}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Full Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
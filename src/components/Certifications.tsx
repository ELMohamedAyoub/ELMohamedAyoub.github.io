import { motion } from "framer-motion";
import { useScrollReveal, scrollVariants } from "@/hooks/use-scroll-reveal";
import { Award } from "lucide-react";
import InteractiveElement from "@/components/InteractiveElement";
import { copywritingCertifications, ProfileType } from "@/lib/profile-content";

interface CertificationsProps {
  currentProfile: ProfileType;
}

const Certifications = ({ currentProfile }: CertificationsProps) => {
  const { ref, isInView } = useScrollReveal();

  const technicalCertifications = [
    {
      date: "2024",
      title: "Scientific Computing with Python",
      organization: "freeCodeCamp",
      description: "Comprehensive certification covering Python programming fundamentals, data structures, algorithms, and scientific computing libraries including NumPy, Pandas, and Matplotlib for data analysis and visualization.",
    },
    {
      date: "2024",
      title: "Cisco Ethical Hacker",
      organization: "Cisco Networking Academy",
      description: "Professional certification in ethical hacking and cybersecurity. Covers penetration testing methodologies, vulnerability assessment, network security, and defensive security strategies.",
    },
    {
      date: "2024",
      title: "AWS Cloud Foundations",
      organization: "Amazon Web Services (AWS)",
      description: "Foundational certification in cloud computing covering AWS core services, cloud architecture, security best practices, and deployment strategies for scalable cloud-based solutions.",
    },
    {
      date: "2023 - Present",
      title: "AI & Machine Learning Development",
      organization: "Professional Projects",
      description: "Hands-on experience developing healthcare AI systems including autism detection, cardiovascular disease prediction (91% accuracy), and NLP-based communication apps using TensorFlow, PyTorch, and scikit-learn.",
    },
    {
      date: "2022 - Present",
      title: "Full-Stack Development",
      organization: "Professional Experience",
      description: "Expert-level proficiency in React, Node.js, Next.js, NestJS, TypeScript, and PostgreSQL. Built enterprise applications with Docker deployment, real-time features, and cloud architecture.",
    },
    {
      date: "2022 - Present",
      title: "Technical Consulting & Copywriting",
      organization: "Business & Communication",
      description: "Providing technical consulting services and creating compelling copy for technology products. Helping businesses communicate complex technical concepts clearly and effectively.",
    },
  ];

  const certifications = currentProfile === 'copywriting' ? copywritingCertifications : technicalCertifications;

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={scrollVariants.floatUp.initial}
          animate={isInView ? scrollVariants.floatUp.animate : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            {currentProfile === 'copywriting' ? 'Agency' : 'Expertise &'} <span className="gradient-text">{currentProfile === 'copywriting' ? 'Experience' : 'Experience'}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {currentProfile === 'copywriting'
              ? 'Digital marketing services and client work history'
              : 'Key areas of expertise and professional accomplishments'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const variant = index % 2 === 0 ? scrollVariants.scattered : scrollVariants.scatteredRight;
            return (
              <InteractiveElement key={index} glowColor="hsl(38 92% 50%)">
                <motion.div
                  initial={variant.initial}
                  animate={isInView ? variant.animate : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="glass p-6 rounded-xl h-full group"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:animate-glow-pulse">
                        <Award className="w-6 h-6 text-secondary" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <span className="text-secondary text-xs font-semibold block mb-2">{cert.date}</span>
                      <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2">{cert.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
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

export default Certifications;
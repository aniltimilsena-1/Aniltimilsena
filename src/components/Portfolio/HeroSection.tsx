import { ChevronDown, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-6 md:px-4 pt-20 relative z-10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-10 max-w-4xl"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-2">
          <Sparkles size={14} className="animate-pulse" />
          <span>Available for New Opportunities</span>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight leading-none text-foreground">
            Anil <span className="text-primary italic">Timilsena</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-lg md:text-2xl font-medium text-muted-foreground">
            <span>Software Engineer</span>
            <span className="hidden md:inline">•</span>
            <span>AI/ML Specialist</span>
            <span className="hidden md:inline">•</span>
            <span>Full-Stack Developer</span>
          </div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance"
        >
          I build intelligent, scalable solutions at the intersection of 
          <span className="text-foreground font-semibold"> Deep Learning</span> and 
          <span className="text-foreground font-semibold"> Modern Web Engineering</span>. 
          Currently focused on Generative AI and production-grade ML applications.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button
            onClick={() => onNavigate('projects')}
            size="xl"
            className="px-8 py-7 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-95"
          >
            Explore Projects
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="px-8 py-7 text-lg font-medium border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted rounded-full transition-all duration-300 active:scale-95"
            asChild
          >
            <a href="/Anil_Timilsena_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground">
              <FileText size={20} />
              View Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-8 pt-6">
          {[
            { icon: Github, href: "https://github.com/aniltimilsena-1", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/anil-timilsena-3314b12a9", label: "LinkedIn" },
            { icon: Mail, href: "mailto:aniltimilsena53@gmail.com", label: "Email" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              title={social.label}
            >
              <social.icon size={26} />
            </a>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="pt-20"
        >
          <ChevronDown
            className="mx-auto text-muted-foreground cursor-pointer hover:text-primary transition-colors"
            size={32}
            onClick={() => onNavigate('about')}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

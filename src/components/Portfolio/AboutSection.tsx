import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          {/* Image side */}
          <div className="w-full md:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl relative group">
                <img
                  src="/anil-photo.png"
                  alt="Anil Timilsena"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            </motion.div>
          </div>

          {/* Text side */}
          <div className="w-full md:w-3/5 space-y-8">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold tracking-tight"
              >
                Building the Future with <span className="text-primary">Intelligence</span>
              </motion.h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-lg text-muted-foreground"
            >
              <p>
                An Information Science & Engineering graduate with a profound obsession for how 
                <span className="text-foreground font-medium"> Artificial Intelligence</span> can reshape our reality. 
                My journey is defined by bridging the gap between complex mathematical models and user-centric software applications.
              </p>
              <p>
                Having worked on production-level challenges at <span className="text-foreground font-medium">MindMatrix</span>, 
                I specialize in full-stack engineering with a heavy focus on Generative AI and modern machine learning frameworks.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Experience", value: "GenAI Analyst" },
                  { label: "Education", value: "BE (IS&E)" },
                  { label: "Location", value: "Nepal" },
                  { label: "Focus", value: "AI & Full Stack" }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-muted/50 border border-border/50">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">{stat.label}</p>
                    <p className="text-foreground font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/aniltimilsena-1" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/anil-timilsena-3314b12a9" },
                    { icon: Mail, href: "mailto:aniltimilsena53@gmail.com" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background border border-border shadow-sm hover:border-primary hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const experience = [
  {
    role: 'GenAI Analyst & Android Developer',
    company: 'MindMatrix',
    period: '2026 - Present',
    location: 'Remote',
    desc: 'Engineering next-generation Android applications with integrated Generative AI capabilities. Focusing on on-device LLM inference, vector databases for mobile, and modern clean architecture.',
    achievement: ['Integrated Gemini models for on-device processing', 'Optimized mobile performance for AI workloads']
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 relative z-10 bg-muted/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Professional <span className="text-primary">Journey</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="flex gap-6">
                  <div className="hidden sm:flex p-4 rounded-2xl bg-primary/10 text-primary h-fit">
                    <Briefcase size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                      <span className="text-primary">{exp.company}</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievement.map((ach, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                      {ach}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

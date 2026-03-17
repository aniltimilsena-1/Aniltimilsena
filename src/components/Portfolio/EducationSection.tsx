import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    level: 'Bachelor of Engineering (Information Science)',
    school: 'VTU University, Karnataka',
    period: '2022 - 2026',
    cgpa: '7.0 / 10.0',
    details: 'Focus on AI, Machine Learning, and Software Architecture. Top performer in major technical projects.',
    skills: ['ML', 'Data Science', 'System Design']
  },
  {
    level: 'Higher Secondary Education (Science)',
    school: 'Golden Gate International College',
    period: '2021 - 2022',
    cgpa: '2.88 / 4.0',
    details: 'Majored in Computer Science and Mathematics.',
    skills: ['Advanced Mathematics', 'Physics', 'Programming Foundations']
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Academic <span className="text-primary">Background</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-20" />

          <div className="space-y-16">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`md:flex items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 flex flex-col space-y-4 p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{edu.period}</span>
                      <h3 className="text-xl font-bold text-foreground leading-tight">{edu.level}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground font-medium">
                      <BookOpen size={16} />
                      <span>{edu.school}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.details}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((s, i) => (
                          <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-muted text-muted-foreground">
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-primary font-bold whitespace-nowrap shrink-0">
                        <Award size={16} />
                        <span>{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex md:w-1/2 justify-center relative">
                   <div className="w-12 h-12 rounded-full bg-background border-4 border-primary shadow-xl shadow-primary/20 z-10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

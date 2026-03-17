import { motion } from 'framer-motion';

const skills = [
  { category: 'AI & Machine Learning', items: ['Scikit-learn', 'NLP', 'GenAI'] },
  { category: 'Full-Stack Development', items: ['React', 'Next.js', 'Node.js', 'TailwindCSS'] },
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'SQL'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Docker', 'Vercel'] },
  { category: 'Databases', items: ['MongoDB', 'Redis'] },
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-32 px-6 relative z-10 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Technical <span className="text-primary">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            A comprehensive overview of the tools and technologies I leverage to build the future.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-xl bg-muted text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

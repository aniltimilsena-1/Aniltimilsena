import { ExternalLink, Code2, Zap, Sparkles, Rocket, Droplet, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'QueryPilot: AI SQL Generator',
    desc: 'Transforms natural language into precise SQL queries, bridging the gap between non-technical users and complex databases.',
    tech: ['Flask', 'NLP', 'GenAI', 'Tailwind'],
    highlights: ['NLP-driven SQL generation', 'Interactive UI', 'Secure Execution'],
    link: 'https://github.com/aniltimilsena-1/NaturalLanguageToSQLQueryUsingGoogle',
    icon: Code2,
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    title: 'Speech Emotion Recognition',
    desc: 'Deep learning application that classifies emotions from audio input with high accuracy and real-time processing capabilities.',
    tech: ['TensorFlow', 'Librosa', 'CNN', 'Python'],
    highlights: ['Feature Extraction', 'Real-time Processing', 'Interactive Dashboard'],
    link: 'https://github.com/aniltimilsena-1/SpeechEmotionRecognitionApp',
    icon: Zap,
    color: 'from-amber-500/20 to-orange-500/20'
  },
  {
    title: 'CODEGURU: AI Mentor',
    desc: 'AI-driven chatbot providing real-time technical guidance, code generation, and debugging support for developers.',
    tech: ['Langchain', 'Gemini Pro', 'Django', 'LLM'],
    highlights: ['Code Generation', 'Project Guidance', 'Context Memory'],
    link: 'https://github.com/aniltimilsena-1/chatbot',
    icon: Sparkles,
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Institute Smart Bot',
    desc: 'Real-time information assistant Providing instant admissions and campus facility support for educational institutions.',
    tech: ['Flask', 'TensorFlow', 'NLP', 'TF-IDF'],
    highlights: ['Instant Responses', 'Intent Matching', 'Seamless UX'],
    link: 'https://github.com/aniltimilsena-1/ChatbotUsingTrainedModel',
    icon: Rocket,
    color: 'from-emerald-500/20 to-teal-500/20'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 relative z-10 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A curated selection of my work focusing on Artificial Intelligence and Software Innovation.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-500"
              >
                {/* Visual Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Icon size={24} />
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] uppercase tracking-wider font-bold bg-muted px-3 py-1 rounded-full text-muted-foreground border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-border/30">
                      <ul className="grid grid-cols-1 gap-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/aniltimilsena-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-colors"
          >
            View more on GitHub <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

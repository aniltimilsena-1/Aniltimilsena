import { ExternalLink, Code2, Zap, Sparkles, Rocket, Droplet } from 'lucide-react';

const projects = [
  {
    title: 'QueryPilot: AI-Powered SQL Generator',
    desc: 'Transforms natural language into SQL queries, simplifying database interactions for non-technical users.',
    tech: ['Flask', 'NLP', 'TailwindCSS', 'SQLite', 'GenAI'],
    highlights: ['NLP-driven SQL generation', 'Interactive UI', 'Secure Query Execution'],
    link: 'https://github.com/aniltimilsena-1/NaturalLanguageToSQLQueryUsingGoogle',
    icon: Code2,
  },
  {
    title: 'Speech Emotion Recognition App',
    desc: 'Deep learning application that classifies emotions from audio input with real-time processing.',
    tech: ['TensorFlow', 'Streamlit', 'Librosa', 'CNN/LSTM', 'Python'],
    highlights: ['MFCC Feature Extraction', 'Real-time Processing', 'Interactive UI'],
    link: 'https://github.com/aniltimilsena-1/SpeechEmotionRecognitionApp',
    icon: Zap,
  },
  {
    title: 'CODEGURU: AI Technical Mentor',
    desc: 'AI-driven chatbot providing real-time technical guidance, code generation, and debugging support.',
    tech: ['Langchain', 'Gemini Pro', 'Django', 'LLM', 'Memory Store'],
    highlights: ['AI Code Generation', 'Project Guidance', 'Conversational Memory'],
    link: 'https://github.com/aniltimilsena-1/chatbot',
    icon: Sparkles,
  },
  {
    title: 'Cambridge Institute ChatBot',
    desc: 'Real-time information bot for Cambridge Institute providing admissions and campus facility queries.',
    tech: ['Flask', 'TensorFlow', 'NLP', 'TF-IDF', 'TailwindCSS'],
    highlights: ['Instant Responses', 'Intent Matching', 'Seamless UX'],
    link: 'https://github.com/aniltimilsena-1/ChatbotUsingTrainedModel',
    icon: Rocket,
  },
  {
    title: 'SafeSip: Real-Time Water Safety & Mineral Analysis (AI + Cloud)',
    desc: 'Cost-effective, smart, and cloud-integrated framework to monitor water quality in real time and analyze mineral composition using AI.',
    tech: ['IoT', 'Scikit-learn', 'Python', 'Cloud Integration'],
    highlights: ['Real-time Monitoring', 'AI-Driven Mineral Analysis', 'Scalable Cloud Architecture'],
    link: '#',
    icon: Droplet,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative z-10 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading font-serif">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={idx} 
                className="gradient-border hover-lift p-6 rounded-xl group relative overflow-hidden"
              >
                {/* Background Icon */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent size={80} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="text-primary" size={22} />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-primary mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium transition-colors group/link"
                  >
                    View on GitHub 
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

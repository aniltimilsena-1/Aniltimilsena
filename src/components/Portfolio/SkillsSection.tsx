const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C'] },
  { category: 'ML/AI', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'LLM'] },
  { category: 'Backend', items: ['Django', 'Flask', 'Node.js'] },
  { category: 'Frontend', items: ['React', 'Angular.js', 'TailwindCSS', 'HTML5'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'SQLite'] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading font-serif">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="gradient-border hover-lift p-6 rounded-xl"
            >
              <h3 className="text-lg font-serif font-semibold text-primary mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="skill-badge"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

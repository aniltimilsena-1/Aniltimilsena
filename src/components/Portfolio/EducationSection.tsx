import { GraduationCap } from 'lucide-react';

const education = [
  {
    level: 'Bachelor Degree',
    school: 'VTU University, Karnataka',
    period: '2022 - 2026',
    cgpa: '7/10',
    description: 'Proficient in programming languages (Python, Java, C), machine learning, web development, and database management.',
    projects: ['Speech Emotion Recognition APP', 'NL to SQL Converter'],
  },
  {
    level: 'Higher Secondary Education (Science Stream),
    school: 'Golden Gate International College - NEB Nepal',
    period: '2021 - 2022',
    cgpa: '2.88/4',
    description: 'Excelled in Mathematics, Physics, and Computer Science. Actively participated in science fairs and coding competitions.',
    projects: ['Coding Competitions'],
  },
  {
    level: 'Secondary Education Examination',
    school: 'NEB Nepal',
    period: '2019 - 2020',
    cgpa: '3.5/4',
    description: 'Consistently demonstrated strong academic performance laying the foundation for future studies in science and technology.',
    projects: [],
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading font-serif">
          <span className="gradient-text">My Journey</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`md:flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30" />
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="gradient-border hover-lift p-6 rounded-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-semibold text-foreground">{edu.level}</h3>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4 text-sm">
                      <span className="text-primary font-medium">{edu.period}</span>
                      <span className="text-secondary font-semibold">CGPA: {edu.cgpa}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{edu.description}</p>

                    {edu.projects.length > 0 && (
                      <div className="border-t border-border pt-4">
                        <p className="text-sm font-medium text-primary mb-3">Notable Projects:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.projects.map((proj, i) => (
                            <span
                              key={i}
                              className="text-xs border border-border px-3 py-1 rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                            >
                              {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

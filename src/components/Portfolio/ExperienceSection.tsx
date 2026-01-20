import { Briefcase } from 'lucide-react';

const experience = [
  {
    role: 'Android App Development (Gen AI)',
    company: 'MindMatrix',
    period: '2026',
    desc: 'Built Android applications leveraging Generative AI, focusing on intelligent features, on-device inference, and modern Android architecture at MindMatrix.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative z-10 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading font-serif">
          <span className="gradient-text">Professional Experience</span>
        </h2>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="gradient-border hover-lift p-6 rounded-xl group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-secondary font-medium">{exp.company}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground font-medium md:text-right">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-0 md:pl-14">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

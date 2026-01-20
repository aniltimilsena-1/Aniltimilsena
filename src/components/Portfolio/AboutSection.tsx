import { Github, Linkedin, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading font-serif">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-up">
            <p className="text-muted-foreground leading-relaxed text-lg text-justify">
              I'm a recent Information Science and Engineering graduate from VTU University, Karnataka, with a strong foundation in software development, machine learning, and data science. My passion lies in exploring how AI and deep learning can solve complex real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg text-justify">
              With hands-on experience at MindMatrix and other companies, I've developed a robust understanding of both cutting-edge AI technologies and practical software engineering principles. I'm eager to contribute to innovative projects that push the boundaries of what's possible.
            </p>

            <div className="flex gap-5 pt-4">
              <a
                href="https://github.com/aniltimilsena-1"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-hover text-black dark:text-white p-2 rounded-lg hover:bg-muted"
              >
                <Github size={22} />
              </a>
              <a
                href="#"
                className="icon-hover text-black dark:text-white p-2 rounded-lg hover:bg-muted"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="aniltimilsena53@gmail.com"
                className="icon-hover text-black dark:text-white p-2 rounded-lg hover:bg-muted"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl gentle-pulse" />
            <div className="relative glass-card rounded-2xl p-6 text-center hover-lift">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="/anil-photo.png"
                  alt="Anil Timilsena"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Anil Timilsena</h3>
              <p className="text-muted-foreground">AI & Machine Learning Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

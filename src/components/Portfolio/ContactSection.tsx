import { Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-heading font-serif">
          <span className="gradient-text">Let's Work Together</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-12 text-balance text-center">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 subtle-glow"
          >
            <a href="mailto:aniltimilsena53@gmail.com" className="flex items-center gap-2">
              <Mail size={20} />
              Send Email
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-6 text-base font-medium border-primary/50 text-primary hover:bg-primary/10"
          >
            <a
              href="https://github.com/aniltimilsena-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              View GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

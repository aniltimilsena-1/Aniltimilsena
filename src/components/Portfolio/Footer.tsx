const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4 text-center relative z-10">
      <div className="flex flex-col items-center gap-4">
        <div 
          className="relative group cursor-pointer mb-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-3xl font-black tracking-tighter text-primary drop-shadow-[0_0_12px_rgba(var(--primary),0.8)] opacity-70 group-hover:opacity-100 transition-all duration-300">
            AT
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Anil Timilsena. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

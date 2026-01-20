const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary ambient blob - slow movement */}
      <div 
        className="ambient-blob absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Secondary ambient blob */}
      <div 
        className="ambient-blob absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[100px]"
        style={{ animationDelay: '4s' }}
      />
      
      {/* Accent ambient blob */}
      <div 
        className="ambient-blob absolute bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-accent/10 blur-[120px]"
        style={{ animationDelay: '8s' }}
      />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

export default AmbientBackground;

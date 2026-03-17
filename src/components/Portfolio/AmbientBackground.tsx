const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background transition-colors duration-1000" />
      
      {/* Dynamic Blobs with improved color blending */}
      <div 
        className="ambient-blob absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]" 
        style={{ animationDuration: '25s' }}
      />
      <div 
        className="ambient-blob absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[100px]" 
        style={{ animationDuration: '30s', animationDelay: '-5s' }}
      />
      <div 
        className="ambient-blob absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[110px]" 
        style={{ animationDuration: '35s', animationDelay: '-10s' }}
      />

      {/* Modern Grid/Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default AmbientBackground;

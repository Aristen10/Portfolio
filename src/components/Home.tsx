import DarkVeil from './DarkVeil';

export default function HeroBackground() {
  return (
    
    <div className="relative w-full min-h-screen bg-[#060010] overflow-hidden">
      
     
      <div className="absolute inset-0 z-0 opacity-40"> 
        <DarkVeil
          hueShift={280} 
          noiseIntensity={0.02}
          scanlineIntensity={0.2}
          speed={0.3}
          scanlineFrequency={2.0}
          warpAmount={0.05}
        />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        
        <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] max-w-[200px] bg-[#7C5DFA] opacity-15 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <section id="home" className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
         
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Bonjour, je suis <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5DFA] via-[#5D7CFA] to-[#C084FC]">
                Aristen Sina
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
              Je suis un développeur web passionné par le frontend utilisant React 
              pour la création d'interfaces modernes et innovantes.
            </p>
          </div>

         
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-[#7C5DFA] blur-[60px] opacity-30 rounded-full animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-80 md:h-80 lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src="/desert-sky-clouds-scenery-4k-wallpaper-uhdpaper.com-278@5@d.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
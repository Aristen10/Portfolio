import {
SiTypescript, SiReact} from "react-icons/si";

export default function About() {
 

  return (
    <section id="about" className="relative w-full bg-[#030008] text-white py-24 px-6 overflow-hidden">
     
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C5DFA]/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#5D7CFA]/10 blur-[140px] rounded-full animate-bounce-slow pointer-events-none" />

    
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
        

        <div className="flex-1 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#120d1d] to-[#080808] border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8 transition-transform duration-100 hover:scale-[1.01]">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#7C5DFA]/10 border border-[#7C5DFA]/20 text-[10px] uppercase tracking-[0.2em] text-[#7C5DFA] font-bold mb-6">
              Découvrir mon univers
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Passionné par le <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5DFA] to-[#C084FC]">Design</span><br />
              et le <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D7CFA] to-[#7C5DFA]">Code</span>
            </h2>
            
            <div className="text-gray-400 text-lg leading-relaxed max-w-2xl">
             <p className="inline-flex items-center gap-1 flex-wrap">
                Je suis un développeur créatif spécialisé dans la création d'expériences web 
                modernes et performantes. Avec une expertise en 
                <span className="inline-flex items-center gap-1 mx-1">
                  <SiReact size="1.2em"  className=" text-cyan-400"/> React
                </span>, 
                <span className="inline-flex items-center gap-1 mx-1">
                  <SiTypescript size="1.1em" className=" text-cyan-600" /> TypeScript
                </span> et design UI/UX...
              </p>
            </div>
          </div>

         
          <div className="flex flex-wrap gap-3 pt-4">
           
          </div>
        </div>

        
        <div className="flex-1 w-full max-w-xl self-center">
          <div className="relative group">
        
            <div className="absolute -inset-2 bg-gradient-to-r from-[#7C5DFA] via-[#5D7CFA] to-[#C084FC] rounded-[3rem] blur-xl opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative overflow-hidden rounded-[3rem] aspect-square border border-white/20 bg-[#0a0a0a] shadow-2xl">
              <img 
                src="/img.webp" 
                alt="Espace de travail" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
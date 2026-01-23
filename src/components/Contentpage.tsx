
import { Mail, Phone, MapPin, Send, Facebook, Github,Linkedin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
   
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-[#121212] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
        
      
        <div className="md:w-5/12 bg-[#7C5DFA] p-8 md:p-12 flex flex-col justify-between text-white">
          <div>
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Travaillons <br /> ensemble
            </h1>
            <p className="text-purple-100 mb-12 text-lg">
              Vous avez un projet en tête ? Discutons-en et créons quelque chose d'extraordinaire ensemble.
            </p>

           
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider">Email</p>
                  <p className="font-medium">artysk6@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider">Téléphone</p>
                  <p className="font-medium">+261 33 81 876 20</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider">Localisation</p>
                  <p className="font-medium">Antananarivo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-widest text-purple-200 mb-4">Suivez-moi</p>
            <div className="flex gap-4">
              <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/30 transition-colors">
                <Facebook size={18}/>
              </div>
              <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/30 transition-colors">
                <Github size={18}/>
              </div>
              <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/30 transition-colors">
                <Linkedin size={18} />
              </div>
            </div>
          </div>
        </div>

      
        <div className="md:w-7/12 p-8 md:p-12">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-zinc-400 text-sm font-medium">Nom complet</label>
              <input 
                type="text" 
                placeholder="Votre nom" 
                className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-[#7C5DFA] transition-colors text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-zinc-400 text-sm font-medium">Email</label>
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-[#7C5DFA] transition-colors text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-zinc-400 text-sm font-medium">Sujet</label>
              <input 
                type="text" 
                placeholder="Sujet de votre message" 
                className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-[#7C5DFA] transition-colors text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-zinc-400 text-sm font-medium">Message</label>
              <textarea 
             
                placeholder="Parlez-moi de votre projet..." 
                className="w-full bg-[#1A1A1A] border border-zinc-800 rounded-xl p-4 mt-2 focus:outline-none focus:border-[#7C5DFA] transition-colors text-white resize-none"
              ></textarea>
              <p className="text-zinc-600 text-[10px] text-right">Maximum 500 caractères</p>
            </div>

            <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all transform active:scale-[0.98] mt-8">
              Envoyer le message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
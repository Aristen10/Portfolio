import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe, Send, ArrowRight } from 'lucide-react';


const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center">
        
        <span className="text-white font-bold text-xl tracking-tight">Portfolio</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-zinc-400 text-sm font-medium">
        {['Accueil', 'À Propos', 'Projets', 'Compétences', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>

      <button className="bg-[#5D7CFA] hover:bg-[#4A65D8] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
        Me Contacter
      </button>
    </div>
  </nav>
);


const Hero = () => (
  <section id="accueil" className="min-h-[80vh] flex items-center px-6 py-20 relative overflow-hidden">
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
      <div className="z-10">
        <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight">
          Créateur <br /> 
          <span className="italic text-[#7C5DFA] font-serif">Digital</span>
        </h1>
        <p className="mt-8 text-zinc-400 text-lg max-w-md leading-relaxed">
          Designer & Développeur passionné par la création d'expériences digitales uniques et innovantes.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all">
            Voir mes projets <ArrowRight size={20} />
          </button>
          <button className="border border-zinc-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-900 transition-all">
            Me contacter
          </button>
        </div>
      </div>
      
      <div className="relative flex justify-center">
    
        <div className="absolute w-[400px] h-[400px] bg-[#7C5DFA]/20 blur-[100px] rounded-full -z-10"></div>
        <div className="w-80 h-80 rounded-full border-4 border-[#7C5DFA]/30 overflow-hidden shadow-[0_0_50px_rgba(124,93,250,0.3)]">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            alt="Profil" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>
      </div>
    </div>
  </section>
);

// --- COMPOSANT CONTACT ---
const Contact = () => (
  <section id="contact" className="py-20 px-6">
    <div className="max-w-5xl mx-auto bg-[#121212] rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row">
      <div className="md:w-5/12 bg-[#7C5DFA] p-10 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-4">Travaillons <br /> ensemble</h2>
          <p className="text-purple-100 mb-10">Vous avez un projet en tête ? Discutons-en ensemble.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg"><Mail size={20} /></div>
              <span>artysk6@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg"><Phone size={20} /></div>
              <span>+33 6 12 34 56 78</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg"><MapPin size={20} /></div>
              <span>Antananarivo</span>
            </div>
          </div>
        </div>
        <div className="mt-12 flex gap-4">
          <Github size={20} className="opacity-70 hover:opacity-100 cursor-pointer" />
          <Linkedin size={20} className="opacity-70 hover:opacity-100 cursor-pointer" />
          <Twitter size={20} className="opacity-70 hover:opacity-100 cursor-pointer" />
        </div>
      </div>
      <div className="md:w-7/12 p-10 bg-[#0F0F0F]">
        <form className="space-y-6">
          <div className="grid gap-2">
            <label className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Nom complet</label>
            <input type="text" placeholder="Votre nom" className="bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-[#7C5DFA]" />
          </div>
          <div className="grid gap-2">
            <label className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Email</label>
            <input type="email" placeholder="votre@email.com" className="bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-[#7C5DFA]" />
          </div>
          <div className="grid gap-2">
            <label className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Message</label>
            <textarea  placeholder="Parlez-moi de votre projet..." className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#7C5DFA]"></textarea>
          </div>
          <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all">
            Envoyer le message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

// --- COMPOSANT FOOTER ---
const Footer = () => (
  <footer className="bg-black text-white py-16 px-6 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Restons connectés</h3>
          <p className="text-zinc-500 mb-6">Abonnez-vous à ma newsletter pour les dernières actualités.</p>
          <div className="flex gap-2 bg-zinc-900 p-1.5 rounded-2xl">
            <input type="email" placeholder="Votre email" className="bg-transparent px-4 py-2 flex-1 focus:outline-none text-sm" />
            <button className="bg-white text-black px-6 py-2 rounded-xl text-sm font-bold">S'abonner</button>
          </div>
        </div>
        <div className="md:px-12">
          <h4 className="text-zinc-500 text-xs uppercase font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 font-bold">
            <li><a href="#accueil" className="hover:text-zinc-400">Accueil</a></li>
            <li><a href="#propos" className="hover:text-zinc-400">À Propos</a></li>
            <li><a href="#projets" className="hover:text-zinc-400">Projets</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-zinc-500 text-xs uppercase font-bold mb-6">Contact</h4>
          <p className="text-zinc-400 leading-relaxed">
            123 Avenue des Champs-Élysées<br />75008 Paris, France<br /><br />
            contact@portfolio.com
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 gap-6 text-zinc-500 text-sm">
        <div className="flex gap-6"><Github size={18} /><Linkedin size={18} /><Twitter size={18} /><Globe size={18} /></div>
        <p>© 2026 Portfolio. Tous droits réservés.</p>
        <p>Powered by Readdy | Mentions légales</p>
      </div>
    </div>
  </footer>
);


const PortfolioPage = () => {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-[#7C5DFA] selection:text-white">
      <Navbar />
      <Hero />
      <div className="h-40 bg-gradient-to-b from-black to-[#0F0F0F]"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
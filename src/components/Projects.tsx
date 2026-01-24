"use client";
import { useState } from "react";
import Modal from "./Modal";


interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tech: string[];
  github: string;
}


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

 const projects: Project[] = [
  {
    title: "Lumina",
    description: "Application de lecture en ligne moderne avec une interface immersive.",
    fullDescription: `Application web de lecture en ligne moderne, pensée pour une expérience immersive.
Lumina permet aux utilisateurs de s’inscrire et se connecter, d’accéder à une bibliothèque numérique et de lire du contenu dans une interface élégante et minimaliste, accessible partout.`,
    image: "/Lumina.PNG",
    tech: ["React", "Tailwind", "Prisma", "Next.js", "SQL"],
    github: "https://github.com/Aristen10/Lumina"
  },
  {
    title: "MonBudget",
    description: "Outil de gestion de dépenses personnelles avec visualisation de données.",
    fullDescription: `Application web de gestion de dépenses personnelles avec authentification sécurisée.
MonBudget permet de gérer les dépenses via des opérations CRUD et de visualiser revenus, dépenses et balance grâce à des graphiques interactifs.`,
    image: "/Dashboard.PNG",
    tech: ["React", "Tailwind", "NodeJS", "Express.js", "MongoDB"],
    github: "https://github.com/Aristen10/MonBudget"
  },
];



  return (
    <section id="projects" className="relative w-full bg-[#060010] py-24 overflow-hidden">
      {/* Glows d'arrière-plan */}
      <div className="absolute -bottom-32 -left-32 w-[50vw] h-[50vw] bg-[#7C5DFA]/15 blur-[150px] rounded-full pointer-events-none opacity-70 animate-pulse" />
      <div className="absolute -bottom-40 -right-20 w-[45vw] h-[45vw] bg-[#5D7CFA]/10 blur-[130px] rounded-full pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projets</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7C5DFA] to-[#5D7CFA] rounded-full"></div>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {projects.map((project, index) => (
    <div 
      key={index} 
      className="group bg-white/[0.01] backdrop-blur-sm rounded-3xl p-5 border border-[#7C5DFA]/40 hover:border-[#7C5DFA] hover:bg-white/[0.03] transition-all duration-200 shadow-2xl"
      onClick={() => setSelectedProject(project)}
    >
     
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-8 shadow-inner " >
        <div className="absolute inset-0 bg-gradient-to-t from-[#060010]/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-200" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

   
      <div className="px-4 pb-4">
        <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-[#7C5DFA] transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-base leading-relaxed mb-6">
          {project.description}
        </p>

      
        <button
          onClick={() => setSelectedProject(project)}
          className="flex items-center text-[#7C5DFA] text-sm font-bold uppercase tracking-wider hover:gap-3 gap-2 transition-all duration-300"
        >
          Découvrir le projet 
          <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  ))}
</div>

      </div>

    <Modal 
  isOpen={!!selectedProject} 
  onClose={() => setSelectedProject(null)} 
  title={selectedProject?.title || ""}
>
  {selectedProject && (
    <div className="flex flex-col gap-5 text-left">
      
      
      <img 
        src={selectedProject.image} 
        alt={selectedProject.title} 
        className="w-full h-1/3 object-cover rounded-xl border border-white/10"
      />

      
      <p className="text-gray-200 leading-relaxed text-sm md:text-base">
        {selectedProject.fullDescription}
      </p>

     
      <div className="flex flex-wrap gap-2">
        {selectedProject.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-[#7C5DFA]/10 text-[#7C5DFA] rounded-full text-xs font-semibold border border-[#7C5DFA]/30"
          >
            {t}
          </span>
        ))}
      </div>

     
      <div className="flex items-center gap-4 pt-4">
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7C5DFA] text-white text-sm font-bold hover:bg-[#6b4ff5] transition"
        >
         
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.2 1.4 4 .9.1-.9.5-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.3.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.6 3.3-1.3 3.3-1.3.7 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.4 5.9.5.4.9 1.2.9 2.4v3.5c0 .3.2.6.8.5 4.8-1.6 8.2-6.1 8.2-11.4C23.5 5.7 18.3.5 12 .5z"/>
          </svg>
          Voir sur GitHub
        </a>
      </div>
    </div>
  )}
</Modal>

    </section>
  );
}
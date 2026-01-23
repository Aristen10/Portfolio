import React from "react";
import {
SiTypescript, SiReact,
  SiRedux, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiNextdotjs, SiNpm,
  SiMongodb, SiMysql,
   SiGit, SiGithub,SiPostman
 
} from "react-icons/si";
import Parcours from "./Parcours";

const SkillCard = ({ icon: Icon, label, color }) => (
  <div className="flex flex-col items-center gap-2">
    <Icon size={48} className={color} />
    <span className="text-sm text-gray-300">{label}</span>
  </div>
);

const Skills = () => {
  return (
    <div className="relative h-auto bg-[#030008] overflow-hidden">
 
   <section className="py-16 ">
    <div className="flex items-center justify-center py-4  ">
          <h2 className="text-3xl font-bold text-white mb-10 p-2  border border-violet-300 rounded-tr-2xl rounded-bl-2xl">
            Competences
            </h2>
    </div>
     
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        

      
        <div className="bg-[#2b2e6d] rounded-3xl p-8">
          <h2 className="text-center text-lg text-yellow-400 mb-8">
            Frontend Development
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            <SkillCard icon={SiReact} label="React" color="text-cyan-400" />
            <SkillCard icon={SiTailwindcss} label="Tailwind" color="text-cyan-300" />
            <SkillCard icon={SiTypescript} label="TypeScript" color="text-blue-400" />
            <SkillCard icon={SiNextdotjs} label="Next.js" color="text-white" />
          
            
          
          </div>
        </div>

       
        <div className="bg-[#2b2e6d] rounded-3xl p-8">
          <h2 className="text-center text-lg text-yellow-400 mb-8">
            Backend Development & Tools
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            <SkillCard icon={SiNodedotjs} label="Node.js" color="text-green-500" />
            <SkillCard icon={SiExpress} label="Express" color="text-gray-200" /> 
            <SkillCard icon={SiMongodb} label="MongoDB" color="text-green-400" />
            <SkillCard icon={SiMysql} label="MySQL" color="text-blue-400" />
            <SkillCard icon={SiGithub} label="Github" color="text-white" />
             <SkillCard icon={SiPostman} label="Postman" color="text-orange-600" />
            
           
          </div>
        </div>
        

      </div>
    </section>
    <Parcours/>
</div>

   
  );
};

export default Skills;

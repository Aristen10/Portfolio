
import { School } from "lucide-react";




const parcoursData = [
  {
    title:
      "Licence 3 - Institut Supérieur Polytechnique de Madagascar à Antsobolo (ISPM)",
    year: "2024 - 2025",
  },
  {
    title:
      "Licence 2  - Institut Supérieur Polytechnique de Madagascar à Antsobolo (ISPM)",
    year: "2023 - 2024",
  },
  {
    title:
      "Licence 1 - Institut Supérieur Polytechnique de Madagascar à Antsobolo (ISPM)",
    year: "2022 - 2023",
  },
  {
    title:
      "Baccalauréat série D - Lycée Privee ACEEM Ankadivato (LPA Ankadivato)",
    year: "2021 - 2022",    
  },
];

const Parcours = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-zinc-900 to-black py-16 px-6 rounded-xl overflow-hidden">
      
    <div 
        className="absolute -bottom-32 -left-32 w-[50vw] h-[50vw] bg-[#7C5DFA]/15 blur-[150px] rounded-full pointer-events-none opacity-70 animate-pulse" 
        style={{ animationDuration: '6s' }} 
      />

    
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">
          🎓 Parcours académique
        </h2>

        <div className="space-y-8">
          {parcoursData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 mt-1">
                <School className="text-cyan-600 w-6 h-6 group-hover:scale-110 transition" />
              </div>

              <div>
                <p className="text-white font-medium leading-relaxed">
                  {item.title}
                  <span className="text-cyan-600"> | {item.year}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parcours;

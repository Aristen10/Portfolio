import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import RotatingText from './RotatingText';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
    
      <div className="mx-auto max-w-5xl bg-white/[0.03] backdrop-blur-xl flex justify-between items-center p-4 border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 ">
        
        <div className="flex items-center justify-center">
          <h4 className="font-os text-2xl text-white ">Aris</h4>
          <RotatingText
            texts={['ten', 'Dix', '10', '1010']}
            mainClassName="font-os text-white overflow-hidden justify-center text-2xl xs: text-md"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
         
        <div className="hidden sm:flex  items-center justify-center">
          <a href="#about" className=" px-5 py-2 text-gray-300  hover:bg-[#7C5DFA]/40 transition-colors font-os  tracking-wide rounded-xl">À propos</a>
          <a href="#projects" className="px-5 py-2 text-gray-300  hover:bg-[#7C5DFA]/40 transition-colors font-os  tracking-wide rounded-xl">Projets</a>
          <a href="#contact" className="px-5 py-2  hover:bg-[#7C5DFA]/40  rounded-xl transition-all font-os ">Contact</a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="sm:hidden text-white text-2xl p-1.5 focus:outline-none"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      
      <div className={`${isOpen ? "flex" : "hidden"} sm:hidden bg-black/60 backdrop-blur-2xl max-w-5xl mx-auto mt-3 p-6 space-y-4 items-center flex-col rounded-2xl border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300`}>
        <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block font-os text-lg">À propos</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block font-os text-lg">Projets</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#7C5DFA] font-bold block font-os text-lg">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;

import { Github, Linkedin,Facebook} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex justify-between"> 
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-400">
          <div className='flex flex-col w-28 p-4 gap-8'>
            <div className='flex items-center justify-center'>
              <Linkedin size={20} className="cursor-pointer hover:text-white transition-colors" />

            </div>
            
            <div className="flex justify-between">
                <Github size={20} className="cursor-pointer hover:text-white transition-colors" />
                
                <Facebook size={20} className="cursor-pointer hover:text-white transition-colors" />
              
              </div>

          </div>
              
        </div>

        
       
        <div className="md:col-span-4 space-y-4 text-center">
          <h3 className="text-zinc-500 text-xs uppercase tracking-widest font-bold">
            Contact
          </h3>
  
          <div className="flex flex-row flex-wrap justify-center items-center gap-x-4  p-2 text-md text-zinc-300">
            <p className="hover:text-white transition-colors cursor-pointer shrink-0">
              artysk6@gmail.com
            </p>
            <p className="hover:text-white transition-colors cursor-pointer shrink-0">
              034 81 876 20
            </p>
          </div>
        </div>


        
       
            <div className='flex items-center justify-center text-sm text-zinc-400 '>
                © {new Date().getFullYear()} Aristen. Tous droits réservés.
              </div>    
      </div>
    </footer>
  );
};

export default Footer;
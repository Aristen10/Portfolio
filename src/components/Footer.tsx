
import { Github, Linkedin,Facebook} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="flex items-center justify-center mb-12">
          
        
          

      
         

       
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Contact</h3>
            <div className="space-y-4 text-zinc-400">
              <p className="hover:text-white transition-colors cursor-pointer">artysk6@gmail.com</p>
              <p className="hover:text-white transition-colors cursor-pointer">+261 33 81 876 20</p>
            </div>
          </div>
        </div>


        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
          
     
              <div className="flex gap-6">
                <Github size={20} className="cursor-pointer hover:text-white transition-colors" />
                <Linkedin size={20} className="cursor-pointer hover:text-white transition-colors" />
                <Facebook size={20} className="cursor-pointer hover:text-white transition-colors" />
              
              </div>

        
              <div>
                © 2026 Aristen. Tous droits réservés.
              </div>

         
        </div>

      </div>
    </footer>
  );
};

export default Footer;
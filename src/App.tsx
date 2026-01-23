import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contentpage from "./components/Contentpage";
import Home from "./components/Home";
import Skills from "./components/Skills";




export default function App(){


  return(
     <div className=" text-white min-h-screen bg-[#060010]">
        
      <div className="sticky top-0 z-50 bg-[]/80 backdrop-blur-md ">
        
         <Navbar/>
        
      </div>
      
          <Home/>  
          <About/>
      <div>
           
            <Skills/>             
            <Projects/>
      </div>
          
          <Contentpage/>
          <Footer/>
 
      
      </div>
  )
}
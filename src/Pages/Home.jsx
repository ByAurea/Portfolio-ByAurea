import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import logo from '../imgs/MyLogo.png';
import { Link } from "react-router-dom";
import '../Style/Home.css';

export default function Home() {
  return (
    <>
      {/* Fundo animado */}
      <section>
        <div className="blob-outer-container">
          <div className="blob-inner-container">
            <div className="blob"></div>
          </div>
        </div>
      </section>
      {/* Conteúdo principal da home */}
      <div className="relative z-50 flex items-center justify-center min-h-screen">
        <div className="text-white text-center drop-shadow-lg home-container">
          <img src={logo} alt="" className="h-12 block mx-auto drop-shadow-[0_0_15px_white] home-logo"/>
          <h1 className="text-4xl font-bold pb-3 pt-4 text-shadow-[0_0_20px_white] home-title">Hello, i'm ByAurea</h1>
          <p className="pb-1 text-[20px] home-text">I'm currently a Software Engineering student at FIAP, and I just love making landing-pages.</p>
          <p className="pb-1 text-[20px] home-text">Here you can check out some of my projects and also get to know me more!</p>
          <div className="border-b opacity-65 drop-shadow-[0_0_3px_white]"></div>
          <p className="pt-3 pb-2 animate-pulse font-medium text-[21px] home-text-pulse">What would you like to do first?</p>
          <div className="flex justify-center gap-6 home-links-container">
            <Link to="/projects" className="flex items-center gap-3 text-xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_10px_white] home-link">My Projects <FaArrowUpRightFromSquare size={17}/></Link>
            <Link to="/about" className="flex items-center gap-3 text-xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_10px_white] home-link">About me <FaArrowUpRightFromSquare size={17}/></Link>
          </div>
        </div>
      </div>
    </>
  );
}

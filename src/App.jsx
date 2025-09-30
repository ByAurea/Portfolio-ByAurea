import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import logo from './imgs/MyLogo.png';
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
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
              <div className="text-white text-center drop-shadow-lg">
                <img src={logo} alt="" className="h-12 block mx-auto drop-shadow-[0_0_15px_white]"/>
                <h1 className="text-4xl font-bold pb-3 pt-4 text-shadow-[0_0_20px_white]">Hello, i'm ByAurea</h1>
                <p className="pb-1 text-[17px]">I'm currently a Software Engineering student at FIAP, and i just love making landing-pages.</p>
                <p className="pb-1 text-[17px]">Here you can check out some of my projects and also get to know me more!</p>
                <div className="border-b opacity-65 drop-shadow-[0_0_3px_white]"></div>
                <p className="pt-3 pb-2 animate-pulse font-medium text-[21px]">What would you like to do first?</p>
                <div className="flex justify-center gap-6">
                  <Link to="/projects" className="flex items-center gap-3 text-xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">My Projects <FaArrowUpRightFromSquare size={17}/></Link>
                  <Link to="/about" className="flex items-center gap-3 text-xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">About me <FaArrowUpRightFromSquare size={17}/></Link>
                </div>
              </div>
            </div>
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
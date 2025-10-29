import { Link } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../Style/Menu.css';


export default function Menu() {
  return (
    <div className="relative z-50 flex items-center justify-center min-h-screen" style={{ overflow: 'hidden' }}>

      <div className="absolute inset-0">
        <div className="absolute -top-30 -left-30 w-80 h-80 rounded-full bg-purple-500 blur-3xl z-10 opacity-30"></div>
        <div className="absolute -top-30 -right-30 w-80 h-80 rounded-full bg-red-500 blur-3xl z-10 opacity-30"></div>
        <div className="absolute -bottom-30 -left-30 w-80 h-80 rounded-full bg-blue-500 blur-3xl z-10 opacity-30"></div>
        <div className="absolute -bottom-30 -right-30 w-80 h-80 rounded-full bg-pink-500 blur-3xl z-10 opacity-30"></div>
      </div>

      <div className="text-white text-center px-4">

        <div className="pb-10 md:pb-20">
        <h1 className="text-2xl md:text-4xl font-bold pr-4 md:pr-30 pl-4 md:pl-30 drop-shadow-[0_0_15px_white] border-b-3 rounded-2xl pb-3 menu-title">Menu</h1>
        </div>

        <div className="flex flex-col items-center gap-4 border-white border-2 rounded-4xl shadow-[0_0_15px_white] pt-5 pb-5 px-4 md:px-0">

          <Link to="/" className="text-xl md:text-3xl font-medium transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white] menu-link">Home</Link>

          <Link to="/projects" className="text-xl md:text-3xl font-medium transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white] menu-link">My Projects</Link>

          <Link to="/about" className="text-xl md:text-3xl font-medium transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white] menu-link">About me</Link>

          <a href="../public/ÁUREA-RESUME.pdf" className="  text-center items-center text-xl md:text-3xl font-medium transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white] menu-link">My Resume</a>

          <div className="flex pt-5 z-50 gap-2 md:gap-0 menu-icons-container">
            <a href="https://www.instagram.com/333.kitty/" className="pr-2 md:pr-5 hover:drop-shadow-[0_0_10px_white] transition duration-300"><FaInstagram size={30} className="md:w-10 md:h-10 menu-icons" /></a>
            <a href="https://www.linkedin.com/in/%C3%A1urea-s-carminato-757125254/" className="pr-2 md:pr-5 hover:drop-shadow-[0_0_10px_white] transition duration-300"><FaLinkedin size={30} className="md:w-10 md:h-10 menu-icons" /></a>
            <a href="https://github.com/ByAurea" className="pr-2 md:pr-5 hover:drop-shadow-[0_0_10px_white] transition duration-300"><FaGithub size={30} className="md:w-10 md:h-10 menu-icons" /></a>
            <a href="mailto:aureascarminato@gmail.com" className="pr-2 md:pr-5 hover:drop-shadow-[0_0_10px_white] transition duration-300"><MdEmail size={30} className="md:w-10 md:h-10 menu-icons" /></a>

          </div>
        </div>
      </div>
    </div>
  );
}

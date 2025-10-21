import { Link } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


export default function Menu() {
  return (
    <div className="relative z-50 flex items-center justify-center min-h-screen">
      <div className="text-white text-center ">

        <div className="pb-20">
        <h1 className="text-4xl font-bold pr-30 pl-30 drop-shadow-[0_0_15px_white] border-b-3 rounded-2xl pb-3">Menu</h1>
        </div>

        <div className="flex flex-col items-center gap-4 border-white border-2 rounded-4xl shadow-[0_0_15px_white] pt-5 pb-5">

          <Link to="/" className="text-3xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white] ">Home</Link>

          <Link to="/projects" className="text-3xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">My Projects</Link>

          <Link to="/about" className="text-3xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">About me</Link>

          <a href="../public/ÁUREA-RESUME.pdf" className="  text-center items-center text-3xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">My Resume</a>

          <div className="flex pt-5">
            <a href="" className="pr-5 hover:drop-shadow-[0_0_10px_white] transition duration-300"><FaInstagram size={40} /></a>
            <a href="" className="pr-5 hover:drop-shadow-[0_0_10px_white] transition duration-300"><FaLinkedin size={40} /></a>
            <a href="" className="pr-5 hover:drop-shadow-[0_0_10px_white] transition duration-300"><FaGithub size={40} /></a>
            <a href="" className="pr-5 hover:drop-shadow-[0_0_10px_white] transition duration-300"><MdEmail size={40} /></a>

          </div>
        </div>
      </div>
    </div>
  );
}

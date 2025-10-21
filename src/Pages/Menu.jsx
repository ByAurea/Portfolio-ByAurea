import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="relative z-50 flex items-center justify-center min-h-screen">
      <div className="text-white text-center border-white border-2 rounded-4xl pl-70 pr-70 pt-10 pb-20 shadow-[0_0_15px_white]">
        <h1 className="text-4xl font-bold pb-14 drop-shadow-[0_0_15px_white]">Menu</h1>
        <div className="flex flex-col gap-4">

          <Link to="/" className="text-3xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">Home</Link>

          <Link to="/projects" className="text-3xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">My Projects</Link>

          <Link to="/about" className="text-3xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">About me</Link>

        <div>
          <a href="../public/ÁUREA-RESUME.pdf" className="text-3xl font-semibold transition relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-current after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full hover:drop-shadow-[0_0_10px_white]">My Resume</a>
        </div>
        </div>
      </div>
    </div>
  );
}

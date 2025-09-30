import logo from '../imgs/MyLogo.png';
import { useState, useEffect, useRef } from 'react';

export default function Header(){
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // Set volume to 30%
            if (isPlaying) {
                audioRef.current.play().catch(() => {
                    // Handle autoplay restrictions by browsers
                });
                audioRef.current.muted = false;
            } else {
                audioRef.current.muted = true;
            }
        }
    }, [isPlaying]);

    return (
            <header className="absolute top-0 left-0 w-full z-[60]">
                <nav className="">
                    <div className="flex justify-between items-center w-full text-white">
                        <div className="drop-shadow-[0_0_10px_white] transition ease-in hover:drop-shadow-[0_0_15px_white] hover:scale-115">
                            <a href="#" className="hover:cursor-pointer "><img src={logo} alt="ByAurea logo" className='h-13 pl-10 mt-7'/></a>
                        </div>
                        <div className="flex gap-8 pr-10 mt-5 drop-shadow-[0_0_10px_white]">
                            <button className="w-12 h-12 text-[12px] font-medium rounded-full bg-transparent border-2 border-white shadow-[0_0_10px_white] flex items-center justify-center transition duration-300 hover:cursor-pointer
                            hover:shadow-[0_0_20px_white] hover:animate-pulse " onClick={() => setIsPlaying(!isPlaying)}>
                                <svg width="30" height="10" viewBox="0 0 30 10">
                                    <path d="M0 5 L30 5" stroke="white" strokeWidth="1" fill="none">
                                        {isPlaying && <animate attributeName="d" values="M0 5 L50 5;M0 5 Q7.5 -1 15 5 Q22.5 12 30 5;M0 5 L30 5" dur="1s" repeatCount="indefinite" />}
                                    </path>
                                </svg>
                            </button>
                            <a href="#" className="w-12 h-12 text-[12px] font-medium rounded-full bg-transparent border-2 border-white shadow-[0_0_10px_white] flex items-center justify-center transition duration-300 hover:cursor-pointer
                            hover:bg-white hover:text-black hover:shadow-[0_0_15px_white] hover:animate-pulse ">PT-BR</a>
                            <a href="#" className="w-12 h-12 text-[12px] font-medium rounded-full bg-transparent border-2 border-white shadow-[0_0_10px_white] flex items-center justify-center transition duration-300 hover:cursor-pointer
                            hover:bg-white hover:text-black hover:shadow-[0_0_15px_white] hover:animate-pulse ">MENU</a>
                        </div>
                    </div>
                </nav>
                <audio ref={audioRef} src="src/songs/shiny.mp4" autoPlay loop />
            </header>
    )
}

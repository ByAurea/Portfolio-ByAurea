import logo from '../imgs/MyLogo.png';
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const songs = [
    "src/songs/shiny.mp4",
    "src/songs/Clouds.mp4",
    "src/songs/Im-God.mp4"
];

export default function Header(){
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const isPlaying = true;
    const [isMuted, setIsMuted] = useState(true);
    const [hasStarted, setHasStarted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.src = songs[currentSongIndex];
            audio.volume = 0.2;
            audio.muted = isMuted;
            if (hasStarted) {
                audio.play().catch(() => {});
            }
        }
    }, [currentSongIndex, hasStarted]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.muted = isMuted;
        }
    }, [isMuted]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const handleEnded = () => {
                const nextIndex = (currentSongIndex + 1) % songs.length;
                setCurrentSongIndex(nextIndex);
            };
            audio.addEventListener('ended', handleEnded);
            return () => audio.removeEventListener('ended', handleEnded);
        }
    }, [currentSongIndex]);

    return (
            <header className="absolute top-0 left-0 w-full z-[60]">
                <nav className="">
                    <div className="flex justify-between items-center w-full text-white">
                        <div className="drop-shadow-[0_0_10px_white] transition ease-in hover:drop-shadow-[0_0_15px_white] hover:scale-125">
                            <Link to="/">
                                <img src={logo} alt="ByAurea logo" className='h-13 pl-20 mt-20'/>
                            </Link>
                        </div>
                        <div className="flex gap-8 pr-10 mt-20 mr-13 drop-shadow-[0_0_10px_white]">
                            <button className="w-12 h-12 text-[12px] font-medium rounded-full bg-transparent border-2 border-white shadow-[0_0_10px_white] flex items-center justify-center transition duration-300 hover:cursor-pointer
                            hover:shadow-[0_0_20px_white] hover:animate-pulse " onClick={() => {
                                if (!hasStarted) {
                                    setHasStarted(true);
                                }
                                setIsMuted(!isMuted);
                            }}>
                                <svg width="30" height="10" viewBox="0 0 30 10">
                                    <path d="M0 5 L30 5" stroke="white" strokeWidth="1" fill="none">
                                        {!isMuted && <animate attributeName="d" values="M0 5 L50 5;M0 5 Q7.5 -1 15 5 Q22.5 12 30 5;M0 5 L30 5" dur="1s" repeatCount="indefinite" />}
                                    </path>
                                </svg>
                            </button>
                            <a href="#" className="w-12 h-12 text-[12px] font-medium rounded-full bg-transparent border-2 border-white shadow-[0_0_10px_white] flex items-center justify-center transition duration-300 hover:cursor-pointer
                            hover:bg-white hover:text-black hover:shadow-[0_0_15px_white] hover:animate-pulse">PT-BR</a>
                            <Link to="/menu" className="w-12 h-12 text-[12px] font-medium rounded-full bg-transparent border-2 border-white shadow-[0_0_10px_white] flex items-center justify-center transition duration-300 hover:cursor-pointer
                            hover:bg-white hover:text-black hover:shadow-[0_0_15px_white] hover:animate-pulse ">MENU</Link>
                        </div>
                    </div>
                </nav>
                <audio ref={audioRef} />
            </header>
    )
}

import React, { useState, useEffect, useMemo } from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { RiArrowRightUpLine } from 'react-icons/ri';
import '../Style/Projects.css';

function Projects() {

    //Background Stars

    const stars = useMemo(() => Array.from({ length: 100 }, (_, i) => {
        const size = Math.random() * 3 + 1;
        return (
            <div
                key={i}
                className="star"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${Math.random() * 2}s`,
                }}
            />
        );
    }), []);

    const [auraVisible, setAuraVisible] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div
                className={`aura ${auraVisible ? 'visible' : ''}`}
                style={{ left: mousePos.x - 350 + 'px', top: mousePos.y - 350 + 'px' }}
            />

            {/* Cursor aura ^ */}

            <div className="space-bg">
                {stars}

                <div className="relative z-10 flex items-center justify-center hover:cursor-default">
                    <h1 className="text-white text-2xl md:text-4xl mt-35 font-medium drop-shadow-[0_0_15px_white] antialiased">Projects I've worked on</h1>
                </div>

            {/* Cursor aura */}

                <div className='relative flex justify-center pt-10 z-0'>
                    <button onClick={() => setAuraVisible(true)} className='bg-white p-2 rounded-2xl drop-shadow-[0_0_7px_white] hover:cursor-pointer hover:scale-115 transition ease-in hover:drop-shadow-[0_0_15px_white] duration-150 animate-pulse hover:animate-none'>Can't see anything?</button>
                </div>

                <div className='hover:cursor-default relative z-10 flex items-center justify-center mt-20'>
                    <div className=' p-1 border-4 rounded-3xl font-mono text-2xl md:text-5xl text-center flex flex-col items-center '>
                        <a href="https://goalbreakers-page.vercel.app/"> <h3 className=' m-1 hover:cursor-default transition ease-in-out duration-300 flex gap-1 text-shadow-[0_0_25px_black] hover:bg-[#0000002a] rounded-3xl p-1.5'> Goal Breakers <RiArrowRightUpLine size={50}/> </h3> </a>
                        <a href="https://byaurea.github.io/EcoTrend/"> <h3 className=' m-1 hover:cursor-default transition ease-in-out duration-300 flex gap-1 text-shadow-[0_0_25px_black] hover:bg-[#0000002a] rounded-3xl p-1.5'> EcoTrend  -  E-Commerce <RiArrowRightUpLine size={50}/> </h3> </a>
                        <a href="https://tigrelau.github.io/MelodiaApp/"> <h3 className='m-1 hover:cursor-default transition ease-in-out duration-300 flex gap-1 text-shadow-[0_0_25px_black] hover:bg-[#0000002a] rounded-3xl p-1.5'> Melodia App - Landing-Page <RiArrowRightUpLine size={50}/> </h3> </a>
                        <a href="https://tigrelau.github.io/SistemaCadastroJogadoras/"> <h3 className='m-1 hover:cursor-default transition ease-in-out duration-300 flex gap-1 text-shadow-[0_0_25px_black] hover:bg-[#0000002a] rounded-3xl p-1.5'> Sistema de Cadastro <RiArrowRightUpLine size={50}/></h3></a>
                        <a href="https://byaurea.github.io/FloodShield-LandingPage/"> <h3 className='m-1 hover:cursor-default transition ease-in-out duration-300 flex gap-1 text-shadow-[0_0_25px_black] hover:bg-[#0000002a] rounded-3xl p-1.5'> FloodShield - Landing-Page <RiArrowRightUpLine size={50}/></h3> </a>
                        <a href="https://byaurea.github.io/Vinheria-Agnello/"> <h3 className='m-1 hover:cursor-default transition ease-in-out duration-300 flex gap-1 text-shadow-[0_0_25px_black] hover:bg-[#0000002a] rounded-3xl p-1.5'> Vinheria Agnello - Landing-Page <RiArrowRightUpLine size={50}/></h3></a>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;

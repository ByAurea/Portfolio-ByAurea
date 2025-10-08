import React, { useState, useEffect, useMemo } from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
                    <h1 className="text-white text-4xl mt-35 font-medium drop-shadow-[0_0_15px_white] antialiased">Projects i've worked on</h1>
                </div>

            {/* Cursor aura */}

                <div className='relative flex justify-center pt-10 z-0'>
                    <button onClick={() => setAuraVisible(true)} className='bg-white p-2 rounded-2xl drop-shadow-[0_0_7px_white] hover:cursor-pointer hover:scale-115 transition ease-in hover:drop-shadow-[0_0_15px_white] duration-150 animate-pulse hover:animate-none'>Can't see anything?</button>
                </div>

                <div className=' projectstext relative z-10 flex items-center justify-center mt-20 '>
                    <h1 className='p-1 border-3 font-light text-6xl '>
                        <h3 className=' m-5 hover:-skew-x-10 hover:cursor-default hover:underline decoration-4 transition ease-in-ouy duration-200 flex items-center gap-4'> ECOTREND  -  ECOMMERCE <FaArrowUpRightFromSquare size={45}/> </h3>
                        <h3 className='m-5 hover:-skew-x-10 hover:cursor-default hover:underline decoration-4 transition ease-in-ouy duration-200 flex items-center gap-4  '> MELODIA APP - LANDINGPAGE </h3>
                        <h3 className='m-5 hover:-skew-x-10 hover:cursor-default hover:underline decoration-4 transition ease-in-ouy duration-200 flex items-center gap-4  '> SISTEMA DE CADASTRO JOGADORAS </h3>
                        <h3 className='m-5 hover:-skew-x-10 hover:cursor-default hover:underline decoration-4 transition ease-in-ouy duration-200 flex items-center gap-4  '> FLOODSHIELD - LANDING-PAGE </h3>
                        <h3 className='m-5 hover:-skew-x-10 hover:cursor-default hover:underline decoration-4 transition ease-in-ouy duration-200 flex items-center gap-4  '> AGNELLO - LANDINGPAGE </h3>

                    </h1>
                </div>
            </div>
        </>
    );
}

export default Projects;

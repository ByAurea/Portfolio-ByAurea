import React from 'react';

function Projects() {
    // Generate random stars
    const stars = Array.from({ length: 100 }, (_, i) => {
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
    });

    return (
        <div className="space-bg">
            {stars}
            <div className="blob-outer-container-black">
                <div className="blob-inner-container-black">
                    <div className="blob-black"></div>
                </div>
            </div>
            
            <div className="relative z-10 flex items-center justify-center ">
                <h1 className="text-white text-4xl mt-35 font-medium drop-shadow-[0_0_15px_white]">Projects i've worked on</h1>
            </div>
        </div>
    );
}

export default Projects;

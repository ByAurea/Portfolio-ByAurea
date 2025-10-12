import React, { useState, useEffect, useMemo, useRef } from 'react';

function About() {

    //Background Stars

    const starRefs = useRef([]);

    const stars = useMemo(() => Array.from({ length: 100 }, (_, i) => {
        const size = Math.random() * 3 + 1;
        const directionX = (Math.random() - 0.5) * 2;
        const directionY = (Math.random() - 0.5) * 2;
        return (
            <div
                key={i}
                ref={(el) => { if (el) starRefs.current[i] = el; }}
                className="star"
                data-direction-x={directionX}
                data-direction-y={directionY}
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

    useEffect(() => {
        const animate = () => {
            starRefs.current.forEach((star) => {
                if (star) {
                    const dirX = parseFloat(star.dataset.directionX);
                    const dirY = parseFloat(star.dataset.directionY);
                    let currentX = parseFloat(star.style.left);
                    let currentY = parseFloat(star.style.top);
                    currentX = (currentX + dirX * 0.01) % 100;
                    if (currentX < 0) currentX += 100;
                    currentY = (currentY + dirY * 0.01) % 100;
                    if (currentY < 0) currentY += 100;
                    star.style.left = currentX + '%';
                    star.style.top = currentY + '%';
                }
            });
            requestAnimationFrame(animate);
        };
        animate();
    }, []);





return(
    <>
            <div className="space-bg">
                {stars}
                <div className="relative z-50 flex items-center justify-center min-h-screen text-white">
                    <h1 className="text-4xl font-bold">About Me Page</h1>
                </div>
            </div>
    </>
)
}


export default About;

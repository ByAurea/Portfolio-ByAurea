import React, { useState, useEffect, useMemo, useRef } from 'react';
import me from '../imgs/me.jpeg';
import study from '../imgs/class.jpeg';

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


                <div className="relative z-10 flex items-center justify-center pt-50 text-white typewriter-container">
                    <h1 className="text-4xl font-bold tracking-wide">So, I heard you wanted to get to know me more...</h1>
                </div>

                <div className="parent text-white pt-20 z-550 ">
                <div className="div1 text-2xl pl-20">
                    
                <div className='text-4xl font-medium'>Here's a bit of my journey in the IT area</div> <br />

                Hello! My name is Áurea, I’m 19 years old and currently a Software Engineering student at FIAP in São Paulo, Brazil. <br />
                I’ve loved playing video games since I was a kid, but it took me a while to get my own PC — the one I built myself. <br />
                I also completed a Technical High School in IT (2022–2024) at Senac Nações Unidas, where I started studying HTML, CSS, JavaScript, and Java (yes, I explored some Java back in high school, but I don’t currently use it in my day-to-day projects). <br />
                During that time, I also gained some experience with tools like XAMPP, as well as photo and video editing for school projects. <br />
                Right now, I’m looking for my first opportunity as an intern in the IT field, whether focused on software or hardware. 
                </div>

                <div className="div2 relative z-10 flex drop-shadow-[0_0_10px_white] justify-center"> <img src={me} alt="" className=" w-210 h-120 rounded-xl border-white border-2 hover:drop-shadow-[0_0_20px_white] transition ease-in" /> </div>

                <div className="div3 text-4xl font-medium text-center pb-20 pt-20 border-white"> Some of my skills </div> 

                <div className="div4 pl-20 drop-shadow-[0_0_10px_white] relative z-10 flex"> <img src={study} alt="" className='h-170 rounded-xl border-white border-2 hover:drop-shadow-[0_0_20px_white] transition ease-in'/> </div>
                <div className="div5"> <div className='text-3xl font-medium'>Hard Skills <div className='text-xl font-mono'> (web dev related)</div></div>
                <li className='pb-8 pt-8 text-xl font-medium'>HTML/CSS</li> 
                <li className='pb-8 text-xl font-medium'>JAVASCRIPT</li> 
                <li className='pb-8 text-xl font-medium'>REACT</li> 
                <li className='pb-8 text-xl font-medium'>PYTHON</li> 
                <li className='pb-8 text-xl font-medium'>BOOTSTRAP</li> 
                <li className='pb-8 text-xl font-medium'>TAILWIND</li> 
                <li className='pb-8 text-xl font-medium'>GIT/GITHUB</li> 
                <li className='pb-8 text-xl font-medium'>WORDPRESS</li> 
                <li className='pb-8 text-xl font-medium'>SQL</li> 


                </div>

                <div className="div6"> <div className='text-3xl font-medium pb-15'>Soft Skills</div>
                <li className='pb-8 text-xl font-medium'>SELF-KNOWLEDGE</li> 
                <li className='pb-8 text-xl font-medium'>FAST LEARNING</li> 
                <li className='pb-8 text-xl font-medium'>GOOD COMMUNICATION</li> 
                <li className='pb-8 text-xl font-medium'>ORGANIZATION & PLANNING</li> 
                <li className='pb-8 text-xl font-medium'>RESPONSABILITY & COMMITMENT</li> 
                <li className='pb-8 text-xl font-medium'>EMPHATHY & COLLABORATION</li> 
                <li className='pb-8 text-xl font-medium'>CONTRUCTIVE SELF-CRITICISM</li> 
                <li className='pb-8 text-xl font-medium'>RESILIENCE UNDER PRESSURE</li> 
                </div>
                
                <div className="div7"> <div className='text-3xl font-medium pb-8'>Hard Skills <div className='text-xl font-mono'>(Extra stuff i know)</div></div> 
                <li className='pb-8 text-xl font-medium'>COMPUTER ASSEMBLY</li> 
                <li className='pb-8 text-xl font-medium'>PHOTO AND VIDEO EDITING</li> 
                </div> 

                </div> 


            </div>
    </>
)
}


export default About;

import React, { useState, useEffect, useRef } from 'react';
import me from '../imgs/me.jpeg';
import study from '../imgs/class.jpeg';
import { HiArrowCircleDown } from 'react-icons/hi';
import '../Style/About.css';
// import SplashCursor from '../Components/SplashCursor';

function About() {

    const [arrowOpacity, setArrowOpacity] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            const fadeIn = setInterval(() => {
                setArrowOpacity(prev => {
                    if (prev >= 1) {
                        clearInterval(fadeIn);
                        return 1;
                    }
                    return prev + 0.02; // Gradual increase
                });
            }, 50);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);







return(
    <>
            <div className="">

                {/* Texto Typing */}

                <div className='seta flex flex-col items-center justify-center h-screen'>
                    <div className="relative z-10 flex items-center justify-center text-white typewriter-container">
                        <h1 className="text-lg  font-medium tracking-wide about-title">So, I heard you wanted to get to know me more...</h1>
                    </div>
                    <div className='pt-10 hover:pointer-cursor' style={{ opacity: arrowOpacity }}>
                        <button className='hover:pointer-cursor animate-bounce about-arrow' onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                        <HiArrowCircleDown size={50} color='#ffffff'/>
                        </button>
                    </div>
                </div>

                {/* Conteúdo da página */}

                <div ref={contentRef} className={`parent text-white pt-20 z-550 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'}`}>

                <div className="flex flex-row items-center justify-center pl-40 pr-40">
                    <div className="div2 relative z-10 flex drop-shadow-[0_0_10px_white] justify-center mr-8"> <img src={me} alt="" className=" w-185 h-60 rounded-xl border-white border-2 hover:drop-shadow-[0_0_20px_white] transition ease-in" /> </div>

                    <div className="div1 text-xl">

                    <div className='text-3xl font-medium'>Here's a bit of my journey in the IT area</div> 
                    <br />
                    
                    Hello! My name is Áurea, I’m 19 years old and currently a Software Engineering student at FIAP in São Paulo, Brazil. <br />
                    I’ve loved playing video games since I was a kid, but it took me a while to get my own PC — the one I built myself. <br />
                    I also completed a Technical High School in IT (2022–2024) at Senac Nações Unidas, where I started studying HTML, CSS, JavaScript, and Java (yes, I explored some Java back in high school, but I don’t currently use it in my day-to-day projects). <br />
                    During that time, I also gained some experience with tools like XAMPP, as well as photo and video editing for school projects. <br />
                    Right now, I’m looking for my first opportunity as an intern in the IT field, whether focused on software or hardware.
                    </div>
                </div>

                <div className="div3 text-3xl font-medium text-center pb-20 pt-20 border-white"> Some of my skills </div>

                <div className="flex flex-row items-center justify-center">
                    <div className=" flex flex-row">
                        <div className="div5 mr-10 ml-10">
                            <div className='text-2xl font-medium'>Hard Skills <div className='text-lg font-mono'> (web dev related)</div></div>
                            <li className='pb-8 pt-8 text-lg font-medium'>HTML/CSS</li>
                            <li className='pb-8 text-lg font-medium'>JAVASCRIPT</li>
                            <li className='pb-8 text-lg font-medium'>REACT</li>
                            <li className='pb-8 text-lg font-medium'>PYTHON</li>
                            <li className='pb-8 text-lg font-medium'>BOOTSTRAP</li>
                            <li className='pb-8 text-lg font-medium'>TAILWIND</li>
                            <li className='pb-8 text-lg font-medium'>GIT/GITHUB</li>
                            <li className='pb-8 text-lg font-medium'>WORDPRESS</li>
                            <li className='pb-8 text-lg font-medium'>SQL</li>
                        </div>
                        <hr className="skill-divider" />
                        <div className="div6 mr-10 ml-10"> <div className='text-2xl font-medium pb-10 pt-5'>Soft Skills</div>
                        <li className='pb-8 text-lg font-medium'>SELF-KNOWLEDGE</li>
                        <li className='pb-8 text-lg font-medium'>FAST LEARNING</li>
                        <li className='pb-8 text-lg font-medium'>GOOD COMMUNICATION</li>
                        <li className='pb-8 text-lg font-medium'>ORGANIZATION & PLANNING</li>
                        <li className='pb-8 text-lg font-medium'>RESPONSABILITY & COMMITMENT</li>
                        <li className='pb-8 text-lg font-medium'>EMPHATHY & COLLABORATION</li>
                        <li className='pb-8 text-lg font-medium'>CONTRUCTIVE SELF-CRITICISM</li>
                        <li className='pb-8 text-lg font-medium'>RESILIENCE UNDER PRESSURE</li>
                        </div>
                        <hr className="skill-divider" />
                        <div className=" mr-10 ml-10 "> <div className=' text-2xl font-medium pb-8'>Hard Skills <div className='text-lg font-mono'>(Extra stuff i know)</div></div>
                        <li className='pb-8 text-lg font-medium'>COMPUTER ASSEMBLY</li>
                        <li className='pb-8 text-lg font-medium'>PHOTO AND VIDEO EDITING</li>
                        <li className='pb-8 text-lg font-medium'>FLUENT ENGLISH</li>
                        <li className='pb-1 text-lg font-medium'>FLUENT BRAZILIAN </li>
                        <div className='pb-8 text-lg font-medium'>PORTUGESE</div>
                        <li className='pb-8 text-lg font-medium'>EXCEL/POWERPOINT</li>
                        <li className='pb-8 text-lg font-medium'>CANVA</li>
                        </div>
                    </div>
                    <div className=" pl-20 div4 drop-shadow-[0_0_10px_white] relative z-10 flex "> <img src={study} alt="" className='h-150  rounded-xl border-white border-2 hover:drop-shadow-[0_0_20px_white] transition ease-in'/> </div>
                </div>

                </div>


            </div>
    </>
)
}


export default About;

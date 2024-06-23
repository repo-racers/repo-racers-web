import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

import homeBG from '../../public/assets/home_bg.png';
import homeTrio from '../../public/assets/home_trio.png';

export function Hero() {
    const sceneRef = useRef(null);

    useEffect(() => {
        if (sceneRef.current) {
            const parallaxInstance = new Parallax(sceneRef.current);
            return () => parallaxInstance.destroy(); // Cleanup on component unmount
        }
    }, []);


    return (
        <section className="h-screen flex flex-col justify-center items-center relative">
        <div ref={sceneRef} className="w-full h-screen flex justify-center items-center absolute inset-0 z-[-1] overflow-hidden">
            <img data-depth="1.00" src={homeBG.src} className="absolute" alt="Background" style={{ minWidth: '120vw', minHeight: '120vh' }} />
            <img data-depth="0.80" src={homeTrio.src} className="absolute" alt="Trio" style={{ minWidth: '120vw', minHeight: '120vh' }} />
            <div data-depth="0.00" className="w-full h-full absolute bg-black bg-opacity-50"></div>
        </div>
            <div id="hero" className="py-8 px-4 text-center lg:py-16 lg:px-12 absolute inset-0 overflow-auto w-full">
                <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                    <a href="#" className="w-fit mx-auto flex justify-between items-center transition duration-200 rounded p-1 group gap-2">
                        <span className="block text-m px-2 py-0.5 rounded-full text-white bg-green-600 hover:bg-green-700">New</span>
                        <span className="text-xl font-medium text-white flex gap-6">
                            Introducing Elite Membership !
                            <div className="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
                                <span className="w-2.5 h-[1.5px] rounded bg-gray-950 dark:bg-white scale-0 group-hover:scale-100 transition duration-300"></span>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-950 dark:text-white transition duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </span>
                    </a>
                    <h1 className="mt-8 text-6xl font-semibold text-white">Supercharging GitHub and Azure DevOps.</h1>
                    <p className="mx-auto mt-8 max-w-2xl text-2xl text-white">100% open-source. From enterprise implementations to Copilot fine-tuning, we accelerate your projects with expert support and a commitment to quality.</p>
                    <p className="mx-auto mt-8 max-w-3xl text-3xl text-white">Drive GitHub like you stole it!</p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="rounded-lg bg-green-600 hover:bg-green-700 text-white px-4 py-2 transition duration-150 ease-in-out flex items-center justify-center gap-2 text-sm font-medium" onClick={() => { window.location.href = '#'; }}>
                            <span className="text-lg">Start Building</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

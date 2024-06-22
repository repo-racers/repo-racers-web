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
        <section>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div ref={sceneRef} className="w-screen h-screen flex justify-center items-center absolute inset-0 z-[-1]">
                    <div data-depth="1.00" className="flex justify-center items-center">
                        <img src={homeBG.src} className="w-screen h-screen scale-125" alt="Background" /></div>
                    <div data-depth="0.80" className="flex justify-center items-center">
                        <img src={homeTrio.src} className="w-screen h-screen scale-125" alt="Trio" /></div>
                </div>
            </div>
        </section>
    );
}
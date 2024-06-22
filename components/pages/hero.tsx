import React, { useEffect } from 'react';

import homeBG from '../../public/assets/home_bg.png';
import homeTrio from '../../public/assets/home_trio.png';

export function Hero() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js";
        script.async = true;
        script.integrity = "sha384-VQ/s69HNVae2KRxQ+LtbCGJfHpjBvY9z9DHQ0VYRyyUzOmLwH2+CeplFdhQhVgbe";
        script.crossOrigin = "anonymous";

        // Function to initialize Parallax
        const initParallax = () => {
            const scene = document.getElementById('scene');
            // eslint-disable-next-line no-undef
            const parallaxInstance = new Parallax(scene);
        };

        // Add event listener to call initParallax on script load
        script.addEventListener('load', initParallax);

        document.body.appendChild(script);

        return () => {
            // Clean up: remove event listener and script
            script.removeEventListener('load', initParallax);
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div id="scene" className="w-screen h-screen flex justify-center items-center absolute inset-0 z-[-1]">
                    <div data-depth="1.00" className="flex justify-center items-center">
                        <img src={homeBG.src} className="w-screen h-screen scale-125" alt="Background" /></div>
                    <div data-depth="0.80" className="flex justify-center items-center">
                        <img src={homeTrio.src} className="w-screen h-screen scale-125" alt="Trio" /></div>
                </div>
            </div>
        </section>
    );
}
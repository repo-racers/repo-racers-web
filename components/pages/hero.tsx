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
                <div ref={sceneRef} className="w-full h-screen flex justify-center items-center absolute inset-0 z-[-1] overflow-hidden">
                    <div data-depth="1.00" className="flex justify-center items-center">
                        <img src={homeBG.src} className="w-screen h-screen scale-125" alt="Background" />
                    </div>
                    <div data-depth="0.80" className="flex justify-center items-center">
                        <img src={homeTrio.src} className="w-screen h-screen scale-125" alt="Trio" />
                    </div>
                    <div data-depth="0.00" className="flex justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%' }}>
                        &nbsp;
                    </div>
                </div>
            </div>
            <div id="hero" className="flex flex-col items-start justify-center py-8 px-4 text-center lg:py-16 lg:px-12 absolute inset-0 overflow-auto w-full h-screen">
                <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                    <a href="#" className="w-fit mx-auto flex justify-between items-center transition duration-200 rounded-[--annonce-border-radius] p-1 group gap-2">
                        <span className="block text-m px-2 py-0.5 rounded-full text-white bg-green-600 hover:bg-green-700">New</span>
                        <span className="text-xl font-medium text-white flex gap-6">
                            Introducing Elite Membership !
                            <div className="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
                                <span className="w-2.5 translate-y-[-0.3px] -translate-x-px opacity-0 h-[1.5px] rounded bg-gray-950 dark:bg-white origin-left scale-x-0 transition duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-950 dark:text-white -translate-x-2 transition duration-300 group-hover:translate-x-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </span>
                    </a>
                    <h1 className="mt-8 text-wrap text-6xl font-semibold text-gray-950 text-white">Supercharging GitHub and Azure DevOps.</h1>
                    <p className="text-wrap mx-auto mt-8 max-w-2xl text-2xl text-white">100% open-source. From enterprise implementations to Copilot fine-tuning, we accelerate your projects with expert support and a commitment to quality.</p>
                    <p className="text-wrap mx-auto mt-8 max-w-3xl text-3xl text-white">Drive GitHub like you stole it!</p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4">
                        <div
                            className="cursor-pointer rounded-lg bg-green-600 hover:bg-green-700 text-white px-4 py-2 transition duration-150 ease-in-out flex items-center justify-center gap-2 text-sm font-medium"
                            onClick={() => { window.location.href = '#'; }}
                            role="button"
                            tabIndex={0}
                        >
                            <svg className="size-5 relative" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="opacity-20 dark:opacity-50" d="M7.40705 15L5.10627 16.7375C5.0234 16.8039 4.92499 16.848 4.82033 16.8658C4.71567 16.8836 4.6082 16.8744 4.50806 16.8392C4.40793 16.8039 4.31842 16.7437 4.24798 16.6643C4.17755 16.5849 4.12851 16.4888 4.10549 16.3852L3.13986 12.0391C3.11906 11.9458 3.11993 11.8489 3.14241 11.756C3.16489 11.6631 3.20839 11.5766 3.26955 11.5031L5.63752 8.66484C5.5469 10.4883 5.99221 12.6117 7.40705 15ZM16.7305 11.5031L14.3625 8.66484C14.4571 10.4883 14.0078 12.6117 12.593 15L14.8938 16.7375C14.9766 16.8039 15.075 16.848 15.1797 16.8658C15.2844 16.8836 15.3918 16.8744 15.492 16.8392C15.5921 16.8039 15.6816 16.7437 15.7521 16.6643C15.8225 16.5849 15.8715 16.4888 15.8946 16.3852L16.8602 12.0391C16.881 11.9458 16.8801 11.8489 16.8576 11.756C16.8351 11.6631 16.7917 11.5766 16.7305 11.5031Z" fill="currentColor"></path>
                                <path
                                    d="M11.875 17.5C11.875 17.6658 11.8092 17.8247 11.6919 17.9419C11.5747 18.0591 11.4158 18.125 11.25 18.125H8.75C8.58424 18.125 8.42527 18.0591 8.30806 17.9419C8.19085 17.8247 8.125 17.6658 8.125 17.5C8.125 17.3342 8.19085 17.1753 8.30806 17.0581C8.42527 16.9408 8.58424 16.875 8.75 16.875H11.25C11.4158 16.875 11.5747 16.9408 11.6919 17.0581C11.8092 17.1753 11.875 17.3342 11.875 17.5ZM10 8.75C10.1854 8.75 10.3667 8.69501 10.5208 8.592C10.675 8.48899 10.7952 8.34257 10.8661 8.17126C10.9371 7.99996 10.9557 7.81146 10.9195 7.6296C10.8833 7.44774 10.794 7.2807 10.6629 7.14959C10.5318 7.01847 10.3648 6.92919 10.1829 6.89301C10.001 6.85684 9.81254 6.8754 9.64123 6.94636C9.46993 7.01732 9.32351 7.13748 9.2205 7.29165C9.11748 7.44582 9.0625 7.62708 9.0625 7.8125C9.0625 8.06114 9.16127 8.2996 9.33709 8.47541C9.5129 8.65123 9.75136 8.75 10 8.75ZM17.4703 12.1742L16.5047 16.5203C16.4589 16.7267 16.3615 16.9181 16.2216 17.0766C16.0817 17.2351 15.9039 17.3555 15.7048 17.4266C15.5057 17.4977 15.2918 17.5172 15.0832 17.4831C14.8745 17.4491 14.6779 17.3627 14.5117 17.232L12.3836 15.625H7.61797L5.48828 17.232C5.3221 17.3627 5.12549 17.4491 4.91684 17.4831C4.70819 17.5172 4.49431 17.4977 4.29522 17.4266C4.09613 17.3555 3.91832 17.2351 3.77842 17.0766C3.63853 16.9181 3.54112 16.7267 3.49531 16.5203L2.52969 12.1742C2.48873 11.9877 2.4908 11.7943 2.53574 11.6087C2.58068 11.4231 2.66731 11.2502 2.78906 11.1031L5.02031 8.42656C5.0952 7.44292 5.32102 6.47666 5.68984 5.56172C6.69766 3.03515 8.50234 1.45 9.23437 0.885935C9.45348 0.716157 9.72281 0.624023 10 0.624023C10.2772 0.624023 10.5465 0.716157 10.7656 0.885935C11.4953 1.45 13.3023 3.03515 14.3102 5.56172C14.679 6.47666 14.9048 7.44292 14.9797 8.42656L17.2109 11.1031C17.3327 11.2502 17.4193 11.4231 17.4643 11.6087C17.5092 11.7943 17.5113 11.9877 17.4703 12.1742ZM7.76797 14.375H12.232C13.882 11.4422 14.1906 8.63437 13.1492 6.025C12.2305 3.72187 10.507 2.26562 10 1.875C9.49141 2.26562 7.76797 3.72187 6.84922 6.025C5.80937 8.63437 6.11797 11.4422 7.76797 14.375ZM6.59609 14.832C5.75495 13.3034 5.24453 11.801 5.06484 10.325L3.75 11.9031L4.71562 16.25L4.72969 16.2398L6.59609 14.832ZM16.25 11.9031L14.9352 10.325C14.757 11.7979 14.2477 13.3003 13.407 14.832L15.2703 16.2383L15.2844 16.2484L16.25 11.9031Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <span className="text-nowrap text-lg">Start Building</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

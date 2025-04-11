import { useState } from "react";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);

    const handleNavClick = (sectionId, e) => {
        e.preventDefault();

        if (showNav) {
            toggleBar();
        }

        // Scroll ke section yang dituju
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className='py-2'>
                <div className="flex items-center mx-auto text-sm md:w-[700px] justify-between border border-[#7042F861] bg-[#0300145E] px-[20px] py-[10px] rounded-full text-gray-300">

                    <a
                        onClick={(e) => handleNavClick('home', e)}
                        className="relative hover:cursor-pointer group px-2 py-1 hover:text-purple-400 transition-all duration-300"
                    >
                        Home
                        <span className="absolute bottom-0 left-0 h-0.5 bg-purple-400 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </a>

                    <a
                        onClick={(e) => handleNavClick('portfolio', e)}
                        className="relative hover:cursor-pointer group px-2 py-1 hover:text-purple-400 transition-all duration-300"
                    >
                        Portfolio
                        <span className="absolute bottom-0 left-0 h-0.5 bg-purple-400 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </a>


                    <a
                        onClick={(e) => handleNavClick('contact', e)}
                        className="relative hover:cursor-pointer group px-2 py-1 hover:text-purple-400 transition-all duration-300"
                    >
                        Contact
                        <span className="absolute bottom-0 left-0 h-0.5 bg-purple-400 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </a>
                </div>
            </div>

        </nav>
    );
}
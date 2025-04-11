import { useEffect, useState } from "react";
import { recentProject } from "../data";
import { PiArrowSquareOutBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import AnimatedContent from "./AnimatedContent";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Portfolios() {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        setProjects(recentProject);
    }, []);

    const displayedProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <div className="w-[80%] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                {displayedProjects.map((item, index) => (
                    <AnimatedContent
                        key={index}
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={0.8}
                        threshold={0}
                    >
                        <div className="bg-white/10 p-3 pb-5 rounded-2xl shadow-2xl hover:shadow-purple-500/70 hover:border border-transparent hover:border-purple-900 hover:-translate-y-2 transition-all duration-200">
                            <a
                                href={item.vercel}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="rounded-xl"
                                    src={`assets/img/${item.image}`}
                                    alt={item.title}
                                />
                            </a>
                            <div className="mx-2">
                                <p className="text-purple-300 font-semibold py-5 text-xl">{item.title}</p>
                                <div className="flex justify-between gap-3">
                                    <a className="flex items-center text-sm hover:cursor-pointer text-cyan-500">
                                        <span>Live Demo</span>
                                        <PiArrowSquareOutBold className="ms-1" />
                                    </a>
                                    <a className="flex items-center text-white bg-white/10 hover:cursor-pointer text-sm py-1 px-2 rounded-md">
                                        <span>Details</span>
                                        <FaArrowRight className="ms-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                ))}
            </div>

            <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={0.8}
                threshold={0}
            >
                {projects.length > 6 && (
                    <div className="text-center mt-4">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-full transition duration-300"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </AnimatedContent>

        </div>
    );
}

import { useEffect, useState } from "react";
import { recentProject } from "../data";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { IoMdArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOutBold } from "react-icons/pi";

export default function ProjectDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [project, setProject] = useState([]);

    const handleBack = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    useEffect(() => {
        const selected = recentProject.find((item) => item.id === id);
        setProject(selected);
    }, [id]);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="z-40 px-[25px] flex-grow">
                <div className="my-[25px] text-white lg:flex lg:justify-center lg:items-center lg:gap-13">
                    <div className="lg:max-w-[500px]">
                        <div className="flex items-center mb-7">
                            <button onClick={() => handleBack()} className="bg-white/10 hover:bg-white/20 group transition-all duration-300 relative hover:cursor-pointer border border-white/15 hover:border-white/30 me-2 md:me-4 py-2 px-3 md:px-4 rounded-lg text-sm md:text-lg flex items-center">
                                <IoMdArrowBack className="me-2 group-hover:-translate-x-1 transition-all duration-200"
                                />Back
                            </button>
                            <p className="text-gray-400 text-sm md:text-lg flex items-center">Projects <IoIosArrowForward className="text-xs mx-1" /> <span className="text-white">{project?.title}</span></p>
                        </div>
                        <h1 className="bg-clip-text inline w-full text-4xl md:text-6xl poppins-extrabold bg-gradient-to-b text-transparent from-purple-500 to-cyan-500 [text-shadow:0_0_500px_#7042F88B,0_0_100px_#a855f7]">{project?.title}</h1>
                        <p className="mt-7 text-gray-300 text-sm md:text-[17px]">{project?.description}</p>
                        <div className="flex bg-white/5 mt-5 gap-3 p-3 rounded-xl">
                            <div className="bg-white/5 w-full border border-indigo-500/30 hover:border-indigo-500/60 py-2 px-2 rounded-lg flex items-center transition transform duration-300 hover:scale-105">
                                <div className="p-2 bg-indigo-500/30 rounded-full me-2">
                                    <FaCode className="text-blue-300 md:text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="poppins-semibold text-xl">{project?.techstack?.length}</p>
                                    <p className="text-xs text-gray-400">Technologies</p>
                                </div>
                            </div>
                            <div className="bg-white/5 w-full border border-purple-500/30 hover:border-purple-500/60 py-2 px-2 rounded-lg flex items-center transition-all transform duration-300 hover:scale-105">
                                <div className="p-2 bg-purple-500/30 rounded-full me-2">
                                    <RiStackLine className="text-purple-300 md:text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="poppins-semibold text-xl">{project?.features?.length}</p>
                                    <p className="text-xs text-gray-400">Features</p>
                                </div>
                            </div>
                        </div>
                        <div id="buttons" className="mt-5 flex">
                            <a
                                href={project?.vercel}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden flex items-center bg-gradient-to-t from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/30 text-blue-300 text-sm py-3 px-4 me-2 hover:cursor-pointer">
                                <span className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-purple-500/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                                <span className="relative z-10 flex items-center md:text-lg">
                                    <PiArrowSquareOutBold className="me-2 text-lg md:text-xl transition-transform duration-300 group-hover:rotate-12" />
                                    Live Demo
                                </span>
                            </a>

                            <a
                                href={project?.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden flex items-center bg-gradient-to-t from-purple-500/10 to-fuchsia-500/10 rounded-lg border border-purple-500/30 text-purple-300 text-sm py-3 px-4 hover:cursor-pointer">
                                <span className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-fuchsia-500/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                                <span className="relative z-10 flex items-center md:text-lg">
                                    <FiGithub className="me-2 text-lg md:text-xl transition-transform duration-300 group-hover:rotate-12" />
                                    Github
                                </span>
                            </a>
                        </div>
                        <div className="mt-10">
                            <p className="poppins-semibold flex items-center md:text-xl text-gray-200"><FaCode className="text-blue-400 me-2" /> Technologies Used</p>
                            <div className="flex flex-wrap gap-2 md:gap-4 mt-3 md:mt-6">
                                {project?.techstack?.map((item, index) => (
                                    <span key={index} className="bg-gradient-to-b from-indigo-500/10 hover:from-indigo-500/20 transform cursor-default to-fuchsia-500/10 hover:to-fuchsia-500/20 px-4 py-2 rounded-lg border border-blue-300/10 text-sm text-blue-300 ">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 lg:max-w-[500px]">
                        <div className="flex flex-col items-start">
                            <div className="rounded-2xl overflow-hidden mb-5 hover:border-white/30 hover:scale-105 transition-all transform duration-300">
                                <img className="transition-all transform duration-300 " src={`assets/img/${project?.image}`} alt="" />
                            </div>
                            <ul className="group w-full bg-white/5 p-10 rounded-2xl border list-disc custom-bullets-purple border-white/15 hover:border-white/30 transition-all transform duration-300">
                                <span className="flex items-center poppins-semibold text-gray-200 text-xl mb-8"><FaRegStar className="text-yellow-500 me-2 transition-all transform duration-300 group-hover:rotate-25" />Key Features</span>
                                {project?.features?.map((item, index) => (
                                    <li key={index} className="text-gray-300 mb-4 ms-5 text-sm md:text-[17px]">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <hr className="text-white/15 mt-15" />
                <p className='text-gray-400 text-sm text-center my-5'>© 2025 Roni Saputra. All Rights Reserved.</p>
            </div>
        </div>
    );
}
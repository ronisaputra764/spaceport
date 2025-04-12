import { motion } from "framer-motion";
import Orb from "./Orb";
import AnimatedContent from "./AnimatedContent";

export default function DesktopHeader() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            id="home"
            className="flex flex-row px-20 mt-40 z-[20] w-full 2xl:w-[80%] mx-auto"
        >
            <div className="h-full px-5 text-[#c9c1e3] flex-col gap-5 justify-center grid grid-cols-2 mt-44 text-start">

                <div className="mt-32">

                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 50 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0}
                    >
                        <div className="mb-4 ms-4 border rounded-full py-[8px] px-[12px] opacity-[0.9] inline-block border-[#7042F88B] shadow-[inset_-5px_-5px_10px_0_rgba(59,130,246,0.3)]">
                            <div className="flex fony-semibold items-center bg-clip-text bg-gradient-to-r text-transparent from-purple-500 to-cyan-200 ">
                                <img className="mr-[10px] h-5 w-5" src="/assets/sparkles.svg" alt="" />
                                <h1 className="text-[13px] text-nowrap ">Fullstack Web Developer</h1>
                            </div>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        delay={200}
                        reverse={false}
                        config={{ tension: 80, friction: 50 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                    >
                        <h1 className="bg-clip-text inline w-full ms-4 text-7xl poppins-semibold bg-gradient-to-r text-transparent from-purple-500 to-cyan-500 [text-shadow:0_0_500px_#7042F88B,0_0_100px_#a855f7]">Roni Saputra</h1>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        delay={400}
                        reverse={false}
                        config={{ tension: 80, friction: 50 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                    >
                        <p className="ms-4 text-[#c3c3c3] text-xs sm:text-base mt-2 transition-all duration-700">I'm a web developer specializing in creating dynamic and user-friendly websites.
                            I have experience in front-end and back-end development, along with a passion
                            for crafting intuitive user interfaces and efficient code
                        </p>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        delay={600}
                        reverse={false}
                        config={{ tension: 80, friction: 50 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                    >
                        <div className="flex gap-3 ms-4 mt-4">
                            <a className="flex items-center bg-white/5 border border-gray-700 text-sm py-2 px-4 rounded-full">
                                <span>React</span>
                            </a>
                            <a className="flex items-center bg-white/5 border border-gray-700 text-sm py-2 px-4 rounded-full">
                                <span>Javascript</span>
                            </a>
                            <a className="flex items-center bg-white/5 border border-gray-700 text-sm py-2 px-4 rounded-full">
                                <span>Node.js</span>
                            </a>
                            <a className="flex items-center bg-white/5 border border-gray-700 text-sm py-2 px-4 rounded-full">
                                <span>Tailwind</span>
                            </a>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        delay={800}
                        reverse={false}
                        config={{ tension: 80, friction: 50 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                    >
                        <div className="flex gap-12  px-5 mt-6 mb-6">
                            <div className="bg-black inline">
                                <div className="relative inline-flex group">
                                    <div
                                        className="absolute transitiona-all duration-100 opacity-70 -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-[#FF44EC]  rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 ">
                                    </div>
                                    <a href="CV_Roni_Saputra.pdf" download="CV_Roni_Saputra.pdf" title="Get quote now" target="_blank"
                                        className="relative text-nowrap inline-flex items-center justify-center px-8 py-4 text-md font-semibold text-white transition-all duration-100 bg-[#030014] font-pj rounded-xl focus:outline-none "
                                        role="button">Download CV
                                    </a>
                                </div>
                            </div>

                            <div className="bg-black inline">
                                <div className="relative inline-flex group">
                                    <div
                                        className="absolute transitiona-all duration-200 opacity-70 -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-[#FF44EC]  rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 animate-tilt">
                                    </div>
                                    <a href="mailto:ronisaputra764@gmail.com?" title="Get quote now"
                                        className="relative text-nowrap  inline-flex items-center justify-center px-8 py-4 text-md font-semibold text-white transition-all duration-100 bg-[#030014] font-pj rounded-xl focus:outline-none "
                                        role="button">Send Me Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    config={{ tension: 80, friction: 50 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0}
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0], // Nilai y: mulai dari 0, ke -15, kembali ke 0
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity, // Ulang animasi tanpa batas
                            ease: "easeInOut",
                        }}
                        className="relative  flex flex-row-reverse mt-[50px]"
                    >
                        <div className="w-[500px] h-[500px] absolute z-20 ms-[320px] " >
                            <Orb
                                hoverIntensity={0.5}
                                rotateOnHover={true}
                                hue={0}
                                forceHoverState={false}
                            />
                        </div>
                        <div className="absolute mt-[75px] me-[75px] rounded-full mx-auto w-[350px] h-[350px] overflow-hidden">
                            <img src="/assets/img/IMG_3552.jpg" alt="" />
                        </div>
                    </motion.div>
                </AnimatedContent>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className=" "
                >

                </motion.div>

            </div>
        </motion.div>
    );
}

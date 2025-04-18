import { motion } from "framer-motion";
import Orb from "./Orb";
import AnimatedContent from "./AnimatedContent";

export default function MobileHeader() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            id="home"
            className="flex flex-col px-6 mt-20 z-20 w-full mx-auto"
        >
            {/* Image Section - Now at the top */}
            <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 50 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0}
                className="order-first mb-8" // Added order-first and margin-bottom
            >
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="flex justify-center transition-all scale-95 hover:scale-100"
                >
                    <div className="relative w-[300px] h-[300px] z-20">
                        <Orb
                            hoverIntensity={0.5}
                            rotateOnHover={true}
                            hue={0}
                            forceHoverState={false}
                            size={300} // Adjust orb size for mobile
                        />
                        <div className="absolute top-[50px] left-[50px] rounded-full w-[200px] h-[200px] overflow-hidden border-4 border-purple-500/30">
                            <img
                                src="/assets/img/IMG_3552.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </AnimatedContent>

            {/* Content Section */}
            <div className="text-[#c9c1e3] flex flex-col gap-3 md:text-start">
                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 50 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0}
                >
                    <div className="mx-3 border rounded-full py-[6px] px-[10px] opacity-[0.9] inline-block border-[#7042F88B] shadow-[inset_-5px_-5px_10px_0_rgba(59,130,246,0.3)]">
                        <div className="flex font-semibold items-center justify-center bg-clip-text bg-gradient-to-r text-transparent from-purple-500 to-cyan-200">
                            <img className="mr-[10px] h-4 w-4" src="/assets/sparkles.svg" alt="" />
                            <h1 className="text-xs md:text-[13px]">Fullstack Web Developer</h1>
                        </div>
                    </div>
                </AnimatedContent>

                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    delay={200}
                    reverse={false}
                    config={{ tension: 80, friction: 50 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                >
                    <h1 className="bg-clip-text text-4xl poppins-semibold px-3 bg-gradient-to-r text-transparent from-purple-500 to-cyan-500 [text-shadow:0_0_500px_#7042F88B,0_0_100px_#a855f7]">
                        Roni Saputra
                    </h1>
                </AnimatedContent>

                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    delay={400}
                    reverse={false}
                    config={{ tension: 80, friction: 50 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                >
                    <p className="text-[#c3c3c3] mx-3 text-sm transition-all duration-700">
                        I'm a web developer specializing in creating dynamic and user-friendly websites.
                        I have experience in front-end and back-end development.
                    </p>
                </AnimatedContent>

                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    delay={600}
                    reverse={false}
                    config={{ tension: 80, friction: 50 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                >
                    <div className="flex flex-wrap gap-3 mt-4 px-4">
                        {['React', 'Javascript', 'Node.js', 'Tailwind'].map((tech) => (
                            <a key={tech} className="flex items-center bg-white/5 border border-gray-700 hover:cursor-pointer text-xs py-1 px-3 rounded-full">
                                <span>{tech}</span>
                            </a>
                        ))}
                    </div>
                </AnimatedContent>

                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    delay={800}
                    reverse={false}
                    config={{ tension: 80, friction: 50 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                >
                    <div className="flex flex-col sm:flex-row  gap-4 mt-6 px-3">
                        <GradientButton text="Download CV" href="CV_Roni_Saputra.pdf" />
                        <GradientButton text="Send Me Email" href="mailto:ronisaputra764@gmail.com?" />
                    </div>
                </AnimatedContent>
            </div>
        </motion.div>
    );
}

// Reusable Gradient Button Component
const GradientButton = ({ text, href }) => (
    <div className="relative inline-flex group w-full sm:w-auto">
        <div className="absolute transition-all duration-200 opacity-70 -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-[#FF44EC] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1"></div>
        <a href={href} target="_blank" className="relative w-full text-center inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-[#030014] rounded-xl focus:outline-none">
            {text}
        </a>
    </div>
);
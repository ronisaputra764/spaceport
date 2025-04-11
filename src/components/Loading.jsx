import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "./Particles";
import SplitText from "./SplitText";
import AnimatedContent from "./AnimatedContent";
import "./Loading.css";

export default function Loading({ onComplete }) {
    const [isExiting, setIsExiting] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setLoadingProgress(prev => {
                const newProgress = prev + Math.random() * 10;
                if (newProgress >= 100) {
                    clearInterval(timer);
                    startExitAnimation();
                }
                return Math.min(newProgress, 100);
            });
        }, 300);

        return () => clearInterval(timer);
    }, []);

    const startExitAnimation = () => {
        setIsExiting(true);
        setTimeout(() => {
            onComplete?.(); // Call the completion callback
        }, 0);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 1,
                ease: "easeInOut",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
        exit: {
            opacity: 0,
            y: -100,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
        }
    };

    return (
        <AnimatePresence>
            {!isExiting ? (
                <motion.div
                    key="loading"
                    className="flex pb-72 mt-24 lg:mt-64 flex-col items-center relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    {/* Background Particles */}

                    <div className="fixed inset-0 z-0">
                        <Particles
                            particleColors={['#ffffff', '#ffffff']}
                            particleCount={500}
                            particleSpread={10}
                            speed={0.1}
                            particleBaseSize={50}
                            moveParticlesOnHover={false}
                            alphaParticles={false}
                            disableRotation={false}
                        />
                    </div>


                    {/* Astronaut */}
                    <motion.div variants={itemVariants}>
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={true}
                            config={{ tension: 80, friction: 50 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={0.5}
                            threshold={0.2}
                        >
                            <div data-js="astro" className="astronaut">
                                <div className="head" />
                                <div className="arm arm-left" />
                                <div className="arm arm-right" />
                                <div className="body">
                                    <div className="panel" />
                                </div>
                                <div className="leg leg-left" />
                                <div className="leg leg-right" />
                                <div className="schoolbag" />
                            </div>
                        </AnimatedContent>
                    </motion.div>

                    {/* Text Elements */}
                    <motion.div className="relative" variants={itemVariants}>
                        <SplitText
                            text="Welcome To My"
                            className="text-gray-300 text-2xl md:text-7xl poppins-semibold "
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 80, friction: 50 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={0.5}
                            threshold={0.2}
                        >
                            <div className="bg-clip-text inline w-full text-2xl md:text-7xl poppins-semibold bg-gradient-to-r text-transparent from-purple-500 to-cyan-500 [text-shadow:0_0_500px_#7042F88B,0_0_100px_#a855f7]">
                                Portfolio Website
                            </div>
                        </AnimatedContent>
                    </motion.div>

                    {/* Loading Bar (optional) */}
                    <motion.div>
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 80, friction: 50 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={0.5}
                            threshold={0.2}
                        >
                            <motion.div
                                className="w-44 md:w-64 h-2 bg-gray-700 rounded-full mt-3 md:mt-8 overflow-hidden"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${loadingProgress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </AnimatedContent>
                    </motion.div>


                </motion.div>
            ) : (
                <motion.div
                    key="exit-overlay"
                    className="fixed inset-0 bg-black z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            )}
        </AnimatePresence>
    );
}
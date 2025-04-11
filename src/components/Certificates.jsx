import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedContent from "./AnimatedContent";

const certificateImg = [
    {
        img: "/assets/img/alibaba-certificate.jpg",
        alt: "Alibaba Cloud Certificate"
    },
    {
        img: "/assets/img/alibaba-certificate2.png",
        alt: "Alibaba Cloud Advanced Certificate"
    },
    {
        img: "/assets/img/purwadhika-certificate.jpeg",
        alt: "Purwadhika Certification"
    },
    {
        img: "/assets/img/codepolitan.jpg",
        alt: "Codepolitan Certification"
    },
    {
        img: "/assets/img/codepolitan2.jpg",
        alt: "Codepolitan Certification"
    },
    {
        img: "/assets/img/codepolitan3.jpg",
        alt: "Codepolitan Certification"
    },
    {
        img: "/assets/img/codepolitan4.jpg",
        alt: "Codepolitan Certification"
    },
];

export default function Certificates() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [showAll, setShowAll] = useState(false);

    // Ambil hanya 6 data jika showAll false
    const displayedCertificates = showAll ? certificateImg : certificateImg.slice(0, 6);

    return (
        <div className="w-[80%] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
                {displayedCertificates.map((item, index) => (
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
                        <motion.div
                            onClick={() => setSelectedImg(item)}
                            className="bg-white/10 backdrop-blur-none p-3 rounded-2xl cursor-pointer overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <motion.img
                                className="w-full h-auto object-cover rounded-lg"
                                src={item.img}
                                alt={item.alt}
                                initial={{ opacity: 1 }}
                                whileHover={{ opacity: 0.9 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>
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
                {certificateImg.length > 6 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-full transition duration-300"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </AnimatedContent>

            {/* Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImg(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                        />
                        {/* Modal Content */}
                        <motion.div
                            className="relative z-10 max-w-4xl w-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10">
                                <motion.img
                                    src={selectedImg.img}
                                    alt={selectedImg.alt}
                                    className="max-w-full max-h-[80vh] object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                />
                            </div>

                            <motion.button
                                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImg(null);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            {selectedImg.alt && (
                                <motion.p
                                    className="text-white text-center mt-4 text-sm"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {selectedImg.alt}
                                </motion.p>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

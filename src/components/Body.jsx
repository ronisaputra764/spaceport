import { useState } from "react";
import Projects from "./Projects";
import Certificates from "./Certificates";
import TechStack from "./TechStack";
import Tab from "./Tab";
import AnimatedContent from "./AnimatedContent";

export default function Body() {
    const [content, setContent] = useState(0);

    const renderContent = () => {
        switch (content) {
            case 0:
                return <Projects />;
            case 1:
                return <Certificates />;
            case 2:
                return <TechStack />;
            case 3:
                return <Projects filterAI={true} />;
            default:
                return <Projects />;
        }
    };


    return (
        <div id="portfolio" className="z-10 flex flex-col mt-20 lg:mt-96 lg:w-[80%] mx-auto">
            <div className="text-center mb-5 sm:mb-10">
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={0.5}
                    threshold={0}
                >
                    <h1 className="bg-clip-text inline mx-3 w-full text-3xl md:text-5xl poppins-semibold bg-gradient-to-r text-transparent from-purple-500 to-cyan-500 [text-shadow:0_0_500px_#7042F88B,0_0_100px_#a855f7]">Portfolio Showcase</h1>
                </AnimatedContent>

                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0}
                >
                    <p className="text-gray-400 text-xs sm:text-[18px] w-[80%] mt-2 sm:mt-5 md:w-[700px] mx-auto">Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
                </AnimatedContent>


            </div>

            <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0}
            >
                <Tab setContent={setContent} />
            </AnimatedContent>

            {renderContent()}

        </div>
    );
}
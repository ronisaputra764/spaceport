import { useMediaQuery } from 'react-responsive';
import DesktopExperience from "./DesktopExperience";
import MobileExperience from './MobileExperience';
import AnimatedContent from './AnimatedContent';
export default function Experience() {
    const isDesktop = useMediaQuery({ minWidth: 1024 }); // md breakpoint

    return (
        <div id="experience" className='z-20 mt-10'>

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
                <div className='text-center'>
                    <h1 className="bg-clip-text inline text-4xl md:text-5xl poppins-semibold bg-gradient-to-t text-transparent from-purple-500 to-cyan-500 [text-shadow:0_0_500px_#7042F88B,0_0_100px_#a855f7]">My Career & <br /> Experience</h1>
                </div>
            </AnimatedContent>

            {isDesktop ? <DesktopExperience /> : <MobileExperience />}
        </div>
    );
}
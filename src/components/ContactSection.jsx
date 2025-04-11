import AnimatedContent from "./AnimatedContent";
import Comment from "./Comment";
import GetInTouch from "./GetInTouch";
import GlassIcons from './GlassIcons';
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaThreads } from "react-icons/fa6";

const items = [
    { icon: <FaFacebook />, color: 'custom', label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100005200095348' },
    { icon: <FaInstagram />, color: 'custom', label: 'Instagram', url: 'https://www.instagram.com/ronysptra764/' },
    { icon: <FaGithub />, color: 'custom', label: 'Github', url: 'https://github.com/ronisaputra764' },
    { icon: <FaLinkedin />, color: 'custom', label: 'Linkedin', url: 'https://www.linkedin.com/in/roni-saputra-8ab9762aa/' },
    { icon: <MdOutlineEmail />, color: 'custom', label: 'Email', url: 'mailto:ronisaputra764@gmail.com?' },
    { icon: <FaThreads />, color: 'custom', label: 'Threads', url: 'https://www.threads.net/@ronysptra764' },

];

export default function ContactSection() {
    return (
        <div id="contact" className="w-[90%] mx-auto flex flex-col items-center pb-0 p-4 z-10 ">
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
                <h1 className="bg-clip-text inline text-4xl md:text-5xl poppins-semibold bg-gradient-to-r text-transparent from-purple-500 to-cyan-500 [text-shadow:0_0_500px_#7042F88B,0_0_100px_#a855f7]">Contact Me</h1>
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
                <p className="text-gray-400 text-xs text-center sm:text-[14px] w-[80%] mt-2 md:w-[700px] mx-auto">Got a question? Send me a message, and I'll get back to you soon.</p>
            </AnimatedContent>
            <div className="flex flex-col mt-8 gap-7 justify-center xl:flex-row">
                <GetInTouch />
                <Comment />
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
                <div className='w-[70%] md:w-80 mt-[50px] mb-[150px] md:mb-[400px] text-white'>
                    <GlassIcons items={items} className="custom-class" />
                </div>
            </AnimatedContent>

            <p className='text-gray-400 text-sm text-center'>© 2025 Roni Saputra. All Rights Reserved.</p>
        </div>
    );
}
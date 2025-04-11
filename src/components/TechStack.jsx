import StackIcon from "tech-stack-icons";
import AnimatedContent from "./AnimatedContent";

const techIcons = [
    { icon: "reactjs", name: "React" },
    { icon: "vuejs", name: "Vue.js" },
    { icon: "js", name: "JavaScript" },
    { icon: "vitejs", name: "Vite" },
    { icon: "typescript", name: "TypeScript" },
    { icon: "html5", name: "HTML5" },
    { icon: "css3", name: "CSS3" },
    { icon: "mongodb", name: "MongoDB" },
    { icon: "npm", name: "NPM" },
    { icon: "nextjs2", name: "Next.js" },
    { icon: "tailwindcss", name: "Tailwind CSS" },
    { icon: "nodejs", name: "Node.js" },
    { icon: "laravel", name: "Laravel" },
    { icon: "firebase", name: "Firebase" },
    { icon: "php", name: "PHP" },
    { icon: "bootstrap5", name: "Bootstrap 5" },
    { icon: "chrome", name: "Chrome" },
    { icon: "chakraui", name: "Chakra UI" },
    { icon: "github", name: "GitHub" },
    { icon: "prettier", name: "Prettier" },
    { icon: "postman", name: "Postman" },
    { icon: "alpinejs", name: "Alpine.js" },
    { icon: "figma", name: "Figma" }
];

export default function TechStack() {
    return (
        <div className="w-[90%] md:w-[80%] xl:w-[70%] max-w-6xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 text-[10px] sm:text-sm xl:text-lg gap-4 p-4">
                {techIcons.map((item, index) => (



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
                        <div
                            className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg py-4 xl:py-8  flex flex-col items-center justify-center gap-2 border border-white/10 hover:border-purple-400/30 group"
                        >
                            <StackIcon
                                name={item.icon}
                                className="w-6 h-6 sm:w-10 sm:h-10 xl:h-12 xl:w-12 text-white group-hover:text-purple-400 transition-colors duration-300"
                            />
                            <p className="poppins-semibold text-center text-gray-400 group-hover:text-white transition-colors duration-300">
                                {item.name}
                            </p>
                        </div>
                    </AnimatedContent>

                ))}
            </div>
        </div>
    );
}
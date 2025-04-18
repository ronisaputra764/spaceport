import Body from "../components/Body";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Experience from "../components/Experience";
import { useMediaQuery } from "react-responsive";
import Hero from "../components/Hero";


function Home() {
    const isDesktop = useMediaQuery({ minWidth: 1124 });

    return (
        <div className="flex flex-col gap-20">
            {isDesktop && <Hero />}
            <Navbar />
            <Header />
            <Body />
            <Experience />
            <ContactSection />
            <div className="relative">
                <img className="w-[300px] md:w-[700px] absolute bottom-0 left-1/2 transform -translate-x-1/2" src="/halfmoon.webp" alt="" />
            </div>
        </div>
    );
}

export default Home;
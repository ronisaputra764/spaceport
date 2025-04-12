import { useState, useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import ContactSection from "./components/ContactSection";
import Experience from "./components/Experience";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 7000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div >
      <div className="flex flex-col gap-20">
        <Navbar />
        <Hero />
        <Header />
        {/* <Body />
        <Experience />
        <ContactSection /> */}

        {/* <div className="fixed" >
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
        </div> */}

        <div className="relative">
          <img className="w-[300px] md:w-[700px] absolute bottom-0 left-1/2 transform -translate-x-1/2" src="/halfmoon.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

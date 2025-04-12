import Body from "./components/Body";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import ContactSection from "./components/ContactSection";
import Experience from "./components/Experience";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1124 });
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
        {isDesktop && <Hero />}
        <Header />
        <Body />
        <Experience />
        <ContactSection />

        <div className="" style={{ width: '100%', height: '100%', position: 'fixed' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="relative">
          <img className="w-[300px] md:w-[700px] absolute bottom-0 left-1/2 transform -translate-x-1/2" src="/halfmoon.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

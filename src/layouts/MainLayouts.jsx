import { Outlet } from "react-router-dom";
import Particles from "./Particles";

export default function MainLayout() {


    return (
        <div>
            <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
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
            <Outlet />
        </div>
    );
}
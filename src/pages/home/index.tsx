import { SpotLight, useDepthBuffer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AboutPage from "pages/about";
import ProjectsPageList from "pages/projects-list";
import MovingSpot from "shared/moving-spot";
import Rig from "shared/rig";

const Lightning = () => {
    const depthBuffer = useDepthBuffer({ frames: 1 })

    return (
        <>
            <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[0, 1.5, 0]} />
        </>
    )
}

const HomePage = () => {

    return (
        <div id="canvas-container">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 75, position: [50, 50, 50] }} eventPrefix="client">
                <mesh position={[0, 10, -1]} receiveShadow>
                    <planeGeometry args={[50, 50]} />
                </mesh>
                <color attach="background" args={['#202020']} />
                <fog attach="fog" args={['#202020', 5, 20]} />
                {/* <ambientLight intensity={0.015} /> */}
                <ProjectsPageList />
                <AboutPage />
                <Rig />
            </Canvas>
        </div>

    );
}

export default HomePage;
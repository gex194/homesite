import { Environment, Gltf, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PortalFrame from "shared/portal-frame";
import Rig from "shared/rig";

const HomePage = () => {
    return (
        <div id="canvas-container">
            <Canvas camera={{fov: 75, position: [50,50,50]}} eventPrefix="client">
            <color attach="background" args={['#f0f0f0']} />
            <directionalLight />
                <PortalFrame id="/projects" name={`pro\njects`} author="-" bg="#ffffff" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]}>
                    <Gltf src="pc/awakened_pc.glb" scale={0.001} position={[0, -0.7, -2]} />
                </PortalFrame>
                <PortalFrame id="/about" name={`about`} author="-" bg="#d3d3d3" position={[1.15, 0, 0]} rotation={[0, -0.5, 0]}>
                    <Gltf src="pc/awakened_pc.glb" scale={0.001} position={[0, -2, -3]} />
                </PortalFrame>
                <Rig />
                <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_lagoon_night_1k.hdr" />
            </Canvas>
        </div>

    );
}

export default HomePage;
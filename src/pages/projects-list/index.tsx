import { Gltf } from "@react-three/drei";
import PortalFrame from "shared/portal-frame";

const ProjectsPageList = () => {
    return (
        <PortalFrame id="projects" name={`pro\njects`} author="-" bg="#d1d1ca" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]}>
            <ambientLight />
            <Gltf src="assets/pc/awakened_pc.glb" scale={0.001} position={[0, -0.7, -5]} />
        </PortalFrame>
    );
}

export default ProjectsPageList;
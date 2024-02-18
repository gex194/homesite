import { Gltf } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PaperTablet = (props) => {
    return (
        <RigidBody colliders={"cuboid"}>
            <Gltf src="assets/paper_tablet/paper_tablet.glb"
                scale={4}
                position={[-0.1, -1.5, -4]}
                rotation={[-1.55, 0, 0]}
                receiveShadow
                castShadow />
        </RigidBody>
    );
}

export default PaperTablet;
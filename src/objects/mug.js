import { Gltf } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Mug = (props) => {
    return (
        <RigidBody colliders={false} restitution={0}>
            <Gltf src="assets/mug/coffee_mug.glb"
                scale={0.2}
                position={[3.3, -6.58, -3]}
                rotation={[0, 2, 0]}
                receiveShadow
                castShadow />
                <CuboidCollider args={[0.25,0.3,0.3]} position={[1.17,-1.22,-3.77]} />
        </RigidBody>
    );
}

export default Mug;
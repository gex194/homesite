import { Gltf } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Table = () => {
    return (
        <RigidBody colliders={false} restitution={0}>
            <Gltf src="assets/table/table.glb"
                scale={0.2}
                position={[13, -6, -34]}
                receiveShadow />
            <CuboidCollider args={[3.5, 2.1, 1.9]} position={[-1.2, -3.6, -4.3]} />
        </RigidBody>
    );
}

export default Table;
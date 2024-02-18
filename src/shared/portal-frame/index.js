import { useCursor, Text, MeshPortalMaterial, SpotLight } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { easing, geometry } from "maath";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useLocation, useRoute } from "wouter";

extend(geometry);

const PortalFrame = ({ id, name, author, bg, width = 1, height = 1.7, children, ...props }) => {
    const portal = useRef();
    const [, setLocation] = useLocation();
    const [, route] = useRoute('/:id');
    const [hovered, hover] = useState(false);
    useCursor(hovered);
    useFrame((state, dt) => easing.damp(portal.current, 'blend', route?.id == id ? 1 : 0, 0.2, dt))
    return (
        <group {...props}>
            <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false} >
                {name}
            </Text>
            <Text fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
                {id}
            </Text>
            <Text fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
                {author}
            </Text>
            <mesh
            castShadow
            receiveShadow
            name={id}
            onDoubleClick={(e) => (e.stopPropagation(), setLocation(e.object.name))}
            onPointerOver={(e) => hover(true)} 
            onPointerOut={() => hover(false)}>
                <roundedPlaneGeometry args={[width, height, 0.1]} />
                <MeshPortalMaterial ref={portal} events={route?.id === id} side={THREE.DoubleSide}>
                    <color attach="background" args={[bg]} />
                    {children}
                </MeshPortalMaterial>
            </mesh>
        </group>
    );
}

export default PortalFrame;
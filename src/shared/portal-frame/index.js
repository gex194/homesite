import { useCursor, Text, MeshPortalMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { easing, geometry } from "maath";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as THREE from "three";

extend(geometry);

const addUrlPath = (value) => {
    window.location.pathname = window.location.pathname + value;
}

const PortalFrame = ({ id, name, author, bg, width = 1, height = 1.7, children, ...props }) => {
    const portal = useRef();
    const location = useLocation();
    console.log(location.pathname)
    const navigate = useNavigate();
    const [hovered, hover] = useState(false);
    useCursor(hovered);
    useFrame((state, dt) => easing.damp(portal.current, 'blend', location.pathname == id ? 1 : 0, 0.2, dt))
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
            name={id} 
            onDoubleClick={(e) => (e.stopPropagation(), navigate(e.object.name))} 
            onPointerOver={(e) => hover(true)} 
            onPointerOut={() => hover(false)}>
                <roundedPlaneGeometry args={[width, height, 0.1]} />
                <MeshPortalMaterial ref={portal} events={location?.pathname === id} side={THREE.DoubleSide}>
                    <color attach="background" args={[bg]} />
                    {children}
                </MeshPortalMaterial>
            </mesh>
        </group>
    );
}

export default PortalFrame;
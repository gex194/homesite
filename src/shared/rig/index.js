import { CameraControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { useLocation } from "react-router"
import * as THREE from "three"

const Rig = ({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) => {
    const { controls, scene } = useThree()
    const location = useLocation();
    useEffect(() => {
        const active = scene.getObjectByName(location?.pathname)
        if (active) {
            active.parent.localToWorld(position.set(0, 0.5, 0.25))
            active.parent.localToWorld(focus.set(0, 0, -2))
        }
        controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
    })
    return (
        <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2}></CameraControls>
    )
}

export default Rig;
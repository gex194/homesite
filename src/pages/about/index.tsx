import { CuboidCollider, Physics } from "@react-three/rapier";
import Mug from "objects/mug";
import PaperTablet from "objects/papet-tablet";
import Table from "objects/table";
import PortalFrame from "shared/portal-frame";

const AboutPage = () => {
    return (
        <PortalFrame id="about" name={`about`} author="-" bg="#d3d3d3" position={[1.15, 0, 0]} rotation={[0, -0.5, 0]}>
            <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} intensity={3} />
            <Physics debug>
                <PaperTablet />
                <Mug />
                <Table />
                <CuboidCollider args={[10, 1, 10]} position={[0,-7.35,0]} />
            </Physics>
        </PortalFrame>
    );
}

export default AboutPage;
import { Canvas } from "@react-three/fiber"
import Column from "../build/build"
import { OrbitControls } from "@react-three/drei"

export default function Experience() {
	return (
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [2, 14, 14],
			}}
		>
			<directionalLight
				position={[3, 2, 4]}
				intensity={1}
				color={"#e8dfdd"}
			/>
			<OrbitControls
				minAzimuthAngle={Math.PI * -0.5}
				maxAzimuthAngle={Math.PI * 0.7}
				minPolarAngle={Math.PI * 0.1}
				maxPolarAngle={Math.PI * 0.4}
			/>
			<ambientLight intensity={0.2} />
			<Column />
			<mesh rotation={[Math.PI * 1.5, 0, 0]}>
				<planeGeometry args={[12, 12]} />
				<meshPhongMaterial color={"white"} />
			</mesh>
		</Canvas>
	)
}

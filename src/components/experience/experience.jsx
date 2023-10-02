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
				enableDamping
				enablePan={false}
				// enableZoom={false}
				minAzimuthAngle={Math.PI * -0.5}
				maxAzimuthAngle={Math.PI * 0.7}
				minPolarAngle={Math.PI * 0.1}
				maxPolarAngle={Math.PI * 0.4}
				minDistance={5}
				maxDistance={30}
				rotateSpeed={0.5}
				dampingFactor={0.05}
			/>
			<ambientLight intensity={0.2} />
			<Column />
		</Canvas>
	)
}

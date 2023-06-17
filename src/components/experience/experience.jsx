import { Canvas } from "@react-three/fiber"
import { BoxGeometry } from "three"

export default function Experience() {
	return (
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [3, 8, 8],
			}}
		>
			<directionalLight
				position={[3, 2, 4]}
				intensity={1}
				color={"#e8dfdd"}
			/>
			<ambientLight intensity={0.2} />
			<mesh>
				<boxGeometry />
				<meshBasicMaterial color={"red"} />
			</mesh>
		</Canvas>
	)
}

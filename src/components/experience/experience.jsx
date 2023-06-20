import { Canvas } from "@react-three/fiber"
import Column from "../build/build"

export default function Experience() {
	return (
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [2, 8, 8],
			}}
		>
			<directionalLight
				position={[3, 2, 4]}
				intensity={1}
				color={"#e8dfdd"}
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

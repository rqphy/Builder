import { Canvas } from "@react-three/fiber"
import Column from "../column/column"

export default function Experience() {
	return (
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				// position: [2, 8, 8],
				position: [0, 2, 8],
			}}
		>
			<directionalLight
				position={[3, 2, 4]}
				intensity={1}
				color={"#e8dfdd"}
			/>
			<ambientLight intensity={0.2} />
			<Column />
		</Canvas>
	)
}

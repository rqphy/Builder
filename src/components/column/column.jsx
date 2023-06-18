import { useState } from "react"
import Cube from "../cube/cube"
export default function Column() {
	const [cubeCount, setCubeCount] = useState(1)

	const handleColumnClick = () => {
		// update cubeCount
		console.log(cubeCount + 1)
		setCubeCount(cubeCount + 1)
		// todo create cube
	}

	return (
		<group onClick={handleColumnClick}>
			{[...new Array(cubeCount)].map((el, index) => (
				<Cube pos={[0, index, 0]} key={index} />
			))}
		</group>
	)
}

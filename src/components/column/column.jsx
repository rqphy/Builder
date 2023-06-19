import { useState } from "react"
import Cube from "../cube/cube"
export default function Column({ size = 2 }) {
	const [cubesPositions, setCubesPositions] = useState([[0, 0, 0]])

	const handleCubeClick = (_event) => {
		const buildCoords = findBuildCoords(
			_event.point,
			_event.eventObject.position
		)
		console.log(buildCoords)
		setCubesPositions([...cubesPositions, buildCoords])
	}

	const findBuildCoords = (point, eventObjectPos) => {
		const objectPos = [...Object.values(eventObjectPos)]
		const pointerPos = [...Object.values(point)]
		const directionIndex = pointerPos.findIndex((x) => x % 1 === 0)
		const newCoords = [...objectPos]
		if (directionIndex === -1) return
		newCoords[directionIndex] = pointerPos[directionIndex] + size / 2
		return newCoords
	}

	return (
		<group>
			{cubesPositions.map((position) => (
				<Cube
					key={position.toString()}
					size={size}
					pos={position}
					handleClick={handleCubeClick}
				/>
			))}
		</group>
	)
}

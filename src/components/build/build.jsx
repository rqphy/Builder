import { useState } from "react"
import Cube from "../cube/cube"
export default function Build({ size = 2 }) {
	const [cubes, setCubes] = useState([
		{
			pos: [0, 0, 0],
			color: "red",
		},
	])

	const handleCubeClick = (_event) => {
		// obstruct raycaster
		_event.stopPropagation()

		// get new cube coords
		const buildCoords = findBuildCoords(
			_event.point,
			_event.eventObject.position
		)

		// build new cube
		if (!buildCoords) return
		setCubes([
			...cubes,
			{
				pos: buildCoords,
				color: `hsl(${Math.random() * 360}, 100%, 75%)`,
			},
		])
	}

	// todo: fix undefined coords issue
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
			{cubes.map((cube) => (
				<Cube
					key={cube.pos.toString()}
					size={size}
					pos={cube.pos}
					color={cube.color}
					handleClick={handleCubeClick}
				/>
			))}
		</group>
	)
}
import { useState } from "react"
import Cube from "../cube/cube"

function fillCubeBase(size, limits) {
	const base = []

	for (let x = -limits; x <= limits; x++) {
		for (let z = -limits; z <= limits; z++) {
			base.push({
				pos: [x * size, size / 4, z * size],
				color: "white",
				isBase: true,
			})
		}
	}

	return base
}

export default function Build({ size = 2, limits = 2 }) {
	const [cubesList, setCubesList] = useState([...fillCubeBase(size, limits)])

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
		setCubesList([
			...cubesList,
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
		const directionIndex = pointerPos.findIndex((x) => x % (size / 2) === 0)

		console.log(pointerPos, directionIndex)

		// Check limits
		if (
			(objectPos[directionIndex] > (limits - 1) * size ||
				objectPos[directionIndex] < -(limits - 1) * size) &&
			directionIndex != 1
		)
			return false

		const newCoords = [...objectPos]
		if (directionIndex === -1) return

		// check direction
		if (pointerPos[directionIndex] - objectPos[directionIndex] > 0) {
			newCoords[directionIndex] = pointerPos[directionIndex] + size / 2
		} else {
			newCoords[directionIndex] = pointerPos[directionIndex] - size / 2
		}

		return newCoords
	}

	return (
		<group>
			{cubesList.map((cube) => (
				<Cube
					key={cube.pos.toString()}
					size={size}
					pos={cube.pos}
					color={cube.color}
					handleClick={handleCubeClick}
					isBase={cube.isBase ?? false}
				/>
			))}
		</group>
	)
}

export default function Cube({ pos = [0, 0, 0], color = "red", size = 2 }) {
	const handleCubeClick = (_event) => {
		console.log(_event.eventObject.position)
		findBuildCoords(_event.point, _event.eventObject.position)
	}

	const findBuildCoords = (point, eventObjectPos) => {
		const objectPos = [...Object.values(eventObjectPos)]
		const pointerPos = [...Object.values(point)]
		const directionIndex = pointerPos.findIndex((x) => x % 1 === 0)
		const newCoords = [...objectPos]
		if (directionIndex === -1) return
		newCoords[directionIndex] = pointerPos[directionIndex] + size / 2
		console.log(newCoords)
	}

	return (
		<mesh scale={size} position={pos} onClick={handleCubeClick}>
			<boxGeometry />
			<meshBasicMaterial color={color} />
		</mesh>
	)
}

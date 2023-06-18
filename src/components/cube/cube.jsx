export default function Cube({ pos = [0, 0, 0], color = "red" }) {
	const handleCubeClick = (_event) => {
		console.log(_event.point)
		findBuildCoords(_event.point)
	}

	const findBuildCoords = (point) => {
		const coords = [...Object.values(point)]
		const directionIndex = coords.findIndex((x) => x % 0.5 === 0)
		const newCoords = [0, 0, 0]
		if (directionIndex === -1) return
		newCoords[directionIndex] = coords[directionIndex] + 1
		console.log(newCoords)
	}

	return (
		<mesh position={pos} onClick={handleCubeClick}>
			<boxGeometry />
			<meshBasicMaterial color={color} />
		</mesh>
	)
}

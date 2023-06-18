export default function Cube({ pos = [0, 0, 0], color = "red", size = 2 }) {
	const handleCubeClick = (_event) => {
		console.log(_event.point)
		findBuildCoords(_event.point)
	}

	const findBuildCoords = (point) => {
		const coords = [...Object.values(point)]
		const directionIndex = coords.findIndex((x) => x % 1 === 0)
		const newCoords = [0, 0, 0]
		if (directionIndex === -1) return
		newCoords[directionIndex] = coords[directionIndex] + size / 2
		console.log(newCoords)
	}

	return (
		<mesh scale={size} position={pos} onClick={handleCubeClick}>
			<boxGeometry />
			<meshBasicMaterial color={color} />
		</mesh>
	)
}

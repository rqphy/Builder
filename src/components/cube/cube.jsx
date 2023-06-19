export default function Cube({
	pos = [0, 0, 0],
	color = "red",
	size = 2,
	handleClick,
}) {
	return (
		<mesh scale={size} position={pos} onClick={handleClick}>
			<boxGeometry />
			<meshBasicMaterial color={color} />
		</mesh>
	)
}

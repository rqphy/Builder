export default function Cube({
	pos = [0, 0, 0],
	color = "red",
	size = 2,
	handleClick,
	isBase = false,
}) {
	return (
		<mesh
			scale={[size, isBase ? size / 2 : size, size]}
			position={pos}
			onClick={handleClick}
		>
			<boxGeometry />
			<meshBasicMaterial color={color} />
		</mesh>
	)
}

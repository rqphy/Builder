export default function Cube({ pos = [0, 0, 0], color = "red" }) {
	return (
		<mesh position={pos}>
			<boxGeometry />
			<meshBasicMaterial color={color} />
		</mesh>
	)
}

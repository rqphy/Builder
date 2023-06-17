import Cube from "../cube/cube"
export default function Column() {
	return (
		<group>
			<Cube pos={[0, 0, 0]} />
			<Cube pos={[0, 1, 0]} color="blue" />
		</group>
	)
}

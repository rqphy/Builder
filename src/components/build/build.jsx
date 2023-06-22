import { useState } from "react"
import Cube from "../cube/cube"
export default function Build({ size = 2 }) {
    const [cubesList, setCubesList] = useState([
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
        console.log(pointerPos)
        const directionIndex = pointerPos.findIndex((x) => x % 1 === 0)
        const newCoords = [...objectPos]
        if (directionIndex === -1) return

        // check direction
        if (pointerPos[directionIndex] > 0) {
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
                />
            ))}
        </group>
    )
}

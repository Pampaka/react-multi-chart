import { useMemo } from 'react'

import { useChart, useMinMax } from './index'

const useScales = () => {
	const {
		width,
		height,
		data,
		options: {
			x: { d: dX, prop: propX }
		}
	} = useChart()

	const [minX, maxX, diffX] = useMinMax(data.map(i => i[propX]))

	const scaleCoordX = useMemo(() => {
		// значения для шкалы
		const scaleX = [minX]
		for (let i = Math.ceil(minX); i < maxX; i += dX) {
			if (i !== minX) scaleX.push(i)
		}
		scaleX.push(maxX)

		//координаты шкалы
		return scaleX.reduce((acc, val) => {
			acc.push(((val - minX) / diffX) * width)
			return acc
		}, [])
	}, [minX, maxX, dX, diffX, width])

	const scaleCoordY = useMemo(() => {
		//количество делений
		const scaleCnt = (diffX / dX) * (height / width)

		//координаты шкалы
		const coords = []
		for (let i = 0; i <= scaleCnt; i++) {
			coords.push((i / scaleCnt) * height)
		}

		return coords
	}, [diffX, dX, height, width])

	return [scaleCoordX, scaleCoordY]
}

export default useScales

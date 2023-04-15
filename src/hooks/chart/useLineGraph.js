import { useMemo } from 'react'

import { useChart, useMinMax } from './index'

import { getCoord } from '../../utils/chart'

const useLineGraph = ({ prop: propY, start = 0, end = 1 }) => {
	const {
		data,
		width,
		height,
		options: {
			x: { prop: propX }
		}
	} = useChart()

	const [[minY, , dY], [minX, , dX]] = useMinMax(data, [propY, propX])

	//координаты графика
	return useMemo(() => {
		const graph = []
		data.forEach(item => {
			const { [propY]: valY, [propX]: valX } = item
			// prettier-ignore
			const coord = getCoord({ valX, valY, minX, minY, diffX: dX, diffY: dY, width, height, start, end })

			graph.push(coord)
		})

		// возвращает d для <path/>
		return graph.reduce((acc, [x, y], i) => {
			if (i === 0) {
				acc += `M ${x} ${y}`
			} else {
				acc += ` L ${x} ${y}`
			}
			return acc
		}, '')
	}, [data, propX, propY, height, minY, dY, minX, dX, width, start, end])
}

export default useLineGraph

import { useChart, useMinMax } from './index'
import { useMemo } from 'react'

const useLineGraph = propY => {
	const {
		data,
		width,
		height,
		options: {
			x: { prop: propX }
		}
	} = useChart()

	const [minY, , dY] = useMinMax(data.map(i => i[propY]))
	const [minX, , dX] = useMinMax(data.map(i => i[propX]))

	//координаты графика
	return useMemo(() => {
		const sortData = data.sort((itemA, itemB) => itemA[propX] - itemB[propX])
		const graph = []
		sortData.forEach(item => {
			const { [propY]: valY, [propX]: valX } = item

			const x = ((valX - minX) / dX) * width
			const y = height - ((valY - minY) / dY) * height

			graph.push([x, y])
		})

		return graph
	}, [data, propX, propY, height, minY, dY, minX, dX, width])
}

export default useLineGraph

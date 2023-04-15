import { useChart, useMinMax } from './index'
import { useMemo } from 'react'

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
		const sortData = data.sort((itemA, itemB) => itemA[propX] - itemB[propX])
		const graph = []
		sortData.forEach(item => {
			const { [propY]: valY, [propX]: valX } = item

			// координата по x
			const x = ((valX - minX) / dX) * width

			// координата по y для общей высоты
			let y = ((valY - minY) / dY) * height
			// координата по y для графика нужной высоты
			y *= end - start
			// сдвиг координаты относительно старта
			y += start * height
			// обратная координата, так как у svg нуль сверху
			y = height - y

			graph.push([x, y])
		})

		return graph
	}, [data, propX, propY, height, minY, dY, minX, dX, width, start, end])
}

export default useLineGraph

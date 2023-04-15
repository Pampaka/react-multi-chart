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
		const graph = []
		data.forEach(item => {
			const { [propY]: valY, [propX]: valX } = item

			// координата по x
			const x = ((valX - minX) / dX) * width

			// координата по y для общей высоты | ((valY - minY) / dY) * height
			// координата по y для графика нужной высоты | ... * (end - start)
			// сдвиг координаты относительно старта | ... + (start * height)
			// обратная координата, так как у svg нуль сверху | height - ...
			const y = height - (((valY - minY) / dY) * height * (end - start) + start * height)

			graph.push([x, y])
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

import { useCallback, useMemo } from 'react'

import { useChart, useMinMax } from './index'

import { getY, getX } from '../../utils/chart'

const useBarGraph = ({ prop: propY, cntBars = 1, start = 0, end = 1 }) => {
	const {
		data,
		width,
		height,
		options: {
			x: { d: dX, prop: propX }
		}
	} = useChart()

	const [[minY, , diffY], [minX, , diffX]] = useMinMax(data, [propY, propX])

	// возвращает d для path для одного столбика
	const getBar = useCallback(
		([x, y]) => {
			const floor = height - height * start
			return `M ${x} ${y} L ${x - 10} ${y} L ${x - 10} ${floor} L ${x} ${floor} Z`
		},
		[height, start]
	)

	return useMemo(() => {
		const coords = []

		// цена деления для одного столбика
		let dBar = dX / cntBars
		// значение следующей цены деления
		let nextDX = data.at(-1)[propX] - (data.at(-1)[propX] % dBar)

		// текущая средняя координата Y
		let currY = 0
		let cntY = 0
		// текущая координата X
		let currX = getX({ valX: nextDX, minX, diffX, width })

		for (let i = data.length - 1; i >= 0; i--) {
			const { [propX]: valX, [propY]: valY } = data[i]

			// минимальная координата (что бы не было столбцов высотой 0, минимальная высота будет в половину максимальной)
			const startBar = start + (end - start) / 2

			if (valX <= nextDX) {
				coords.push([currX, currY])

				cntY = 1
				currY = getY({ valY, minY, diffY, height, start: startBar, end })

				if (nextDX - valX > dBar) nextDX -= Math.floor((nextDX - valX) / dBar) * dBar
				currX = getX({ valX: nextDX, minX, diffX, width })
				nextDX -= dBar
			} else {
				cntY++
				currY = (getY({ valY, minY, diffY, height, start: startBar, end }) + currY) / cntY
			}
		}
		if (cntY) coords.push([currX, currY])

		return coords.map(coord => getBar(coord))
	}, [data])
}

export default useBarGraph

import React, { createContext } from 'react'

import Scales from './Scales'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'

import style from '../App.module.css'
import { useSortData } from '../hooks/chart'

const defaultOptions = {
	x: { d: 1, prop: '' },
	graphs: []
}

export const ChartContext = createContext({
	data: [],
	width: 400,
	height: 300,
	options: { ...defaultOptions }
})

const Chart = ({ options = { ...defaultOptions }, data = [], width = 400, height = 300 }) => {
	const sortData = useSortData(data, options.x.prop)

	return (
		<ChartContext.Provider value={{ width, height, data: sortData, options }}>
			<svg
				className={style.svg}
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
			>
				<Scales />
				{options.graphs.map(graph => {
					if (graph.type === 'line') return <LineGraph key={graph.prop} options={graph} />
					if (graph.type === 'bar') return <BarGraph key={graph.prop} options={graph} />
				})}
			</svg>
		</ChartContext.Provider>
	)
}

export default Chart

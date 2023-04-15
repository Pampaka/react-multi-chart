import React, { createContext } from 'react'

import Scales from './Scales'
import LineGraph from './LineGraph'

import style from '../App.module.css'

const defaultOptions = {
	x: { d: 1 },
	lines: []
}

export const ChartContext = createContext({
	data: [],
	width: 400,
	height: 300,
	options: { ...defaultOptions }
})

const Chart = ({ options = { ...defaultOptions }, data = [], width = 400, height = 300 }) => {
	return (
		<ChartContext.Provider value={{ width, height, data, options }}>
			<svg
				className={style.svg}
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
			>
				<Scales />
				{options.lines.map(line => (
					<LineGraph key={line.prop} options={line} />
				))}
			</svg>
		</ChartContext.Provider>
	)
}

export default Chart

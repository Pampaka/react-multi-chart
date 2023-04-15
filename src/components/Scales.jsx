import React from 'react'

import { useChart, useScales } from '../hooks/chart'

const Scales = () => {
	const { width, height } = useChart()
	const [scaleCoordX, scaleCoordY] = useScales()

	return (
		<>
			{scaleCoordX.map(val => (
				<line
					key={val}
					x1={val}
					y1={0}
					strokeWidth={1}
					x2={val}
					y2={height}
					stroke={'#C6C6C6'}
				/>
			))}
			{scaleCoordY.map(val => (
				<line
					key={val}
					x1={0}
					y1={val}
					strokeWidth={1}
					x2={width}
					y2={val}
					stroke={'#C6C6C6'}
				/>
			))}
		</>
	)
}

export default Scales

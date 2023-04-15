import React from 'react'
import { useBarGraph } from '../hooks/chart'

const BarGraph = ({ options }) => {
	const graph = useBarGraph(options)

	return (
		<>
			{graph.map((d, idx) => (
				<path key={idx} fill={options.color} d={d} />
			))}
		</>
	)
}

export default BarGraph

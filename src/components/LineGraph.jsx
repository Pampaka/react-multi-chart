import React from 'react'

import { useLineGraph } from '../hooks/chart'

const LineGraph = ({ options: { prop: propY, color } }) => {
	const graph = useLineGraph(propY)

	return (
		<>
			{graph.map(
				([x, y], idx) =>
					idx !== graph.length - 1 && (
						<line
							key={idx}
							x1={x}
							y1={y}
							strokeWidth={1}
							x2={graph[idx + 1][0]}
							y2={graph[idx + 1][1]}
							stroke={color}
						/>
					)
			)}
		</>
	)
}

export default LineGraph

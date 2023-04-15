import React from 'react'

import { useLineGraph } from '../hooks/chart'

const LineGraph = ({ options = {} }) => {
	const { color } = options

	const graph = useLineGraph(options)

	return <path strokeWidth={2} stroke={color} fill={'transparent'} d={graph} />
}

export default LineGraph

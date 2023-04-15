import React from 'react'

import { useScales } from '../hooks/chart'

const Scales = () => {
	const d = useScales()

	return <path strokeWidth={1} stroke={'#C6C6C6'} d={d} />
}

export default Scales

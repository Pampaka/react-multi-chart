import { useMemo } from 'react'

const useMinMax = (data = [], props = []) => {
	return useMemo(() => {
		let minCur = props.map(prop => data[0][prop])
		let maxCur = [...minCur]

		data.forEach(val => {
			props.forEach((prop, i) => {
				if (val[prop] < minCur[i]) minCur[i] = val[prop]
				if (val[prop] > maxCur[i]) maxCur[i] = val[prop]
			})
		})

		return props.map((prop, i) => [minCur[i], maxCur[i], maxCur[i] - minCur[i]])
	}, [data, props])
}

export default useMinMax

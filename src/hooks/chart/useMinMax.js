import { useMemo } from 'react'

const useMinMax = (data = []) => {
	return useMemo(() => {
		let minCur = data[0]
		let maxCur = data[0]

		data.forEach(val => {
			if (val < minCur) minCur = val
			if (val > maxCur) maxCur = val
		})

		return [minCur, maxCur, maxCur - minCur]
	}, [data])
}

export default useMinMax

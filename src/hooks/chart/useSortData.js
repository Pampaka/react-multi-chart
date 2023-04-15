import { useMemo } from 'react'

const useSortData = (data, sortProp) => {
	return useMemo(() => {
		return data.sort((itemA, itemB) => itemA[sortProp] - itemB[sortProp])
	}, [data, sortProp])
}

export default useSortData

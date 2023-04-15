import { useContext, useMemo } from 'react'

import { ChartContext } from '../../components/Chart'

const useChart = () => {
	const context = useContext(ChartContext)

	const sortData = useMemo(() => {
		return context.data.sort(
			(itemA, itemB) => itemA[context.options.x.prop] - itemB[context.options.x.prop]
		)
	}, [context.data, context.options.x.prop])

	return { data: sortData, ...context }
}

export default useChart

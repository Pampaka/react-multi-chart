import { useContext, useMemo } from 'react'

import { ChartContext } from '../../components/Chart'

const useChart = () => {
	return useContext(ChartContext)
}

export default useChart

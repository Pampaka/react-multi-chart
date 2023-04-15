import Chart from './components/Chart'

import style from './App.module.css'

const data = [
	{ press: 720, temp: -3, time: 8 },
	{ press: 722, temp: 0, time: 7.3 },
	{ press: 716, temp: 1, time: 6.8 },
	{ press: 719, temp: 3, time: 6 },
	{ press: 723, temp: 0, time: 5.9 },
	{ press: 720, temp: -3, time: 5.2 },
	{ press: 722, temp: -5, time: 4.1 },
	{ press: 721, temp: -2, time: 2.9 }
]

const options = {
	x: {
		prop: 'time',
		d: 1
	},
	lines: [
		{ prop: 'temp', type: 'line', color: '#14fc52' },
		{ prop: 'press', type: 'line', color: '#c42c12' }
	]
}

function App() {
	const width = 1200
	const height = 900

	//цены деления
	const dX = 1

	return (
		<div className={style.App}>
			<Chart options={options} data={data} width={width} height={height} dX={dX} />
		</div>
	)
}

export default App

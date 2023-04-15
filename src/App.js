import Chart from './components/Chart'

import style from './App.module.css'

const data = [
	{ humidity: 38, press: 720, temp: -3, time: 8 },
	{ humidity: 35, press: 722, temp: 0, time: 7.3 },
	{ humidity: 32, press: 716, temp: 1, time: 6.8 },
	{ humidity: 39, press: 719, temp: 3, time: 6 },
	{ humidity: 45, press: 723, temp: 0, time: 5.9 },
	{ humidity: 47, press: 720, temp: -3, time: 5.2 },
	{ humidity: 52, press: 722, temp: -5, time: 4.1 },
	{ humidity: 56, press: 721, temp: -2, time: 2.9 }
]

const options = {
	x: {
		prop: 'time',
		d: 1
	},
	graphs: [
		{ prop: 'press', type: 'bar', cntBars: 5, color: '#1470CF', start: 0.05, end: 0.35 },
		{ prop: 'humidity', type: 'line', color: '#259825', start: 0.4, end: 0.65 },
		{ prop: 'temp', type: 'line', color: '#1470CF', start: 0.7, end: 0.95 }
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

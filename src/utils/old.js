const data = [
	[1.5, 0.7],
	[5, 1],
	[2, 2],
	[7, 3],
	[5, 4],
	[4, 5],
	[5, 5.2]
]

const width = 400
const height = 300

//цены деления
const divY = 1
const divX = 1

//минимумы и максимумы
const [[minY, maxY], [minX, maxX]] = data.reduce(
	(acc, [y, x]) => {
		let [minY, maxY] = acc[0]
		let [minX, maxX] = acc[1]

		if (y < minY) minY = y
		if (y > maxY) maxY = y

		if (x < minX) minX = x
		if (x > maxX) maxX = x

		return [
			[minY, maxY],
			[minX, maxX]
		]
	},
	[
		[data[0][0], data[0][0]],
		[data[0][1], data[0][1]]
	]
)
const [dY, dX] = [maxY - minY, maxX - minX]

// значения для шкал
const scaleY = [minY]
const scaleX = [minX]
for (let i = Math.ceil(minY); i < maxY; i += divY) {
	if (i !== minY) scaleY.push(i)
}
for (let i = Math.ceil(minX); i < maxX; i += divX) {
	if (i !== minX) scaleX.push(i)
}
scaleY.push(maxY)
scaleX.push(maxX)

//координаты шкал
const scaleCoordX = scaleX.reduce((acc, val) => {
	acc.push(((val - minX) / dX) * width)
	return acc
}, [])
const scaleCoordY = scaleY.reduce((acc, val) => {
	const coord = height - ((val - minY) / dY) * height
	acc.push(coord)
	return acc
}, [])

//координаты графика
const sortData = data.sort(([, a], [, b]) => a - b)
const graph = sortData.reduce((acc, [valY, valX]) => {
	const y = height - ((valY - minY) / dY) * height
	const x = ((valX - minX) / dX) * width
	acc.push([y, x])
	return acc
}, [])

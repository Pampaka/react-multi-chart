/**
 * Возвращает координаты точки по X
 * @param {Object} options
 * @param options.valX значение по X
 * @param options.minX минимальное значение по X
 * @param options.diffX разница между min и max по X
 * @param options.width ширина графика
 * @returns {number}
 */
export function getX({ valX, minX, diffX, width }) {
	return ((valX - minX) / diffX) * width
}

/**
 * Возвращает координаты точки по Y
 * @param {Object} options
 * @param options.valY значение по Y
 * @param options.minY минимальное значение по Y
 * @param options.diffY разница между min и max по Y
 * @param options.height высота графика
 * @param options.start начало графика по высоте (0 .. 1)
 * @param options.end конец графика по высоте (0 .. 1)
 * @returns {number}
 */
export function getY({ valY, minY, diffY, height, start, end }) {
	// координата по y для общей высоты | ((valY - minY) / dY) * height
	// координата по y для графика нужной высоты | ... * (end - start)
	// сдвиг координаты относительно старта | ... + (start * height)
	// обратная координата, так как у svg нуль сверху | height - ...
	return height - (((valY - minY) / diffY) * height * (end - start) + start * height)
}

/**
 * Возвращает координаты точки для графика
 * @param {Object} options
 * @param options.valX значение по X
 * @param options.valY значение по Y
 * @param options.minX минимальное значение по X
 * @param options.minY минимальное значение по Y
 * @param options.diffX разница между min и max по X
 * @param options.diffY разница между min и max по Y
 * @param options.width ширина графика
 * @param options.height высота графика
 * @param options.start начало графика по высоте (0 .. 1)
 * @param options.end конец графика по высоте (0 .. 1)
 * @returns {number[]}
 */
export function getCoord(options) {
	return [getX(options), getY(options)]
}

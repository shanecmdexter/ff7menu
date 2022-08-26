export function saveData() {}

export function addToViews(viewName) {
	let found = localStorage.getItem('ff7-data')

	/**
	 * {
	 *  "views": "['value-a', 'value-b']",
	 *  "lastUpdated": 1231330493094038
	 * }
	 */

	let foundData = {
		views: [],
		lastUpdated: Date.now()
	}

	if (typeof found === 'string' && found.indexOf('views') !== -1) {
		foundData = JSON.parse(found)
	}

	let newData = {
		...foundData,
		lastUpdated: Date.now()
	}

	newData.views.push(viewName)

	localStorage.setItem('ff7-data', JSON.stringify(newData))
}

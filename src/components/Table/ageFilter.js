export const ageFilterData = {
	filter: (units, filterData) => {
		let array = [];
		if (filterData.all) {
			return units
		} else {
			units.filter(e => {
				if (filterData.dark && e.age === "Dark")
					array.push(e)
				else if (filterData.feudal && e.age === "Feudal")
					array.push(e)
				else if (filterData.castle && e.age === "Castle")
					array.push(e)
				else if (filterData.imperial && e.age === "Imperial")
					array.push(e)
				return array
			})
		}
		return array
	}
}

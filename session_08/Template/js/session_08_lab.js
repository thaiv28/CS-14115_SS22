
// Global variable with 60 attractions (JSON format)
// console.log(attractionData);

dataFiltering();

function dataFiltering() {

	// sort attractionData
	let sortedAttractions = attractionData.sort((a,b) => {
		return b.Visitors - a.Visitors
	})

	// slice top 5
	let slicedAttractions = sortedAttractions.slice(0,5)

	// logging data
	//console.log(slicedAttractions)

	renderBarChart(slicedAttractions)

}




function dataManipulation() {
	//console.log('changing category')

	// grab category
	let category = document.getElementById("attraction-category").value

	let filteredData = []

	if (category !== "all"){
		// filter by category
		filteredData = attractionData.filter(function (attractionDictionary){
			return attractionDictionary.Category === category
		})
	} else {
		filteredData = attractionData;
	}

	// sort attractionData
	let sortedAttractionsByCategory = filteredData.sort((a,b) => {
		return b.Visitors - a.Visitors
	})

	let slicedAttractions = sortedAttractionsByCategory.slice(0,5)

	renderBarChart(slicedAttractions)



}
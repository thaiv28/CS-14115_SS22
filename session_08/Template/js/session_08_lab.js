
// Global variable with 60 attractions (JSON format)
// console.log(attractionData);

let typePark = "all";

renderBarChart(dataFiltering());

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

function dataManipulation(){
	let selectBox = document.getElementById("attraction-category");
	let selectedValue = selectBox.value;

	console.log(selectedValue);
	typePark = selectBox.value;

	renderBarChart(dataFiltering());
}

function checkType(value) {
	return value.Category == typePark;
}

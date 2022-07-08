
// Global variable with 60 attractions (JSON format)
// console.log(attractionData);

dataFiltering(attractionData);

function dataFiltering(data) {

	let attractions = data;

	// sort attractions
	let sortedAttractions = attractions.sort((a,b) => {return b["Visitors"]-a["Visitors"]})

	// grab top 5 attractions via slicing
	let finalData = sortedAttractions.slice(0,5)

	// render the bar chart using the final data
	renderBarChart(finalData)
}



function dataManipulation(){

	let selectBox = document.getElementById("attraction-category");
	let selectedValue = selectBox.options[selectBox.selectedIndex].value;
	console.log(selectedValue)

	let filteredAttractions = attractionData.filter(function(attraction){
		return attraction.Category === selectedValue
	})

	console.log(filteredAttractions)

	dataFiltering(filteredAttractions)
}
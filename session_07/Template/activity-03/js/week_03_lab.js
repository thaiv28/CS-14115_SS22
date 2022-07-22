
// Global variable with 60 attractions (JSON format)
// console.log(attractionData);

dataFiltering();

function dataFiltering() {
	let attractions = attractionData;

	console.log('hello from your js file. Good luck with the lab!')

	attractions.sort((a, b) => parseFloat(b["Visitors"]) - parseFloat(a["Visitors"]));

	let topAttractions = attractions.slice[1,5]

	console.log(topAttractions);

	renderBarChart(topAttractions);
	/* **************************************************
	 *
	 * ADD YOUR CODE HERE (ARRAY/DATA MANIPULATION)
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

}
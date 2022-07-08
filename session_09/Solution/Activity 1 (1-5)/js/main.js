
// SVG Size
var width = 700,
	height = 500;


// Load CSV file
d3.csv("data/wealth-health-2014.csv").then(function(data){

	// Analyze the dataset in the web console
	console.log(data);
	console.log("Countries: " + data.length);

	// Convert numeric values to numbers
	data.forEach(function(d) {
		d.Income = +d.Income;
		d.LifeExpectancy = +d.LifeExpectancy;
		d.Population = +d.Population;
	});

	// Append a new SVG area
	var svg = d3.select("#chart-area").append("svg")
			.attr("width", width)
			.attr("height", height);

	// X scale
	var incomeScale = d3.scaleLinear()
		.domain([0, d3.max(data, function(d){ return d.Income })])
		.range([0, width]);

		console.log(incomeScale.range(),incomeScale.domain())

	// Y scale
	var lifeExpectancyScale = d3.scaleLinear()
		.domain([d3.min(data, function(d){ return d.LifeExpectancy }), d3.max(data, function(d){ return d.LifeExpectancy })])
		.range([height, 0]);

	// Try scale functions in the web console
	console.log(incomeScale(5000));
	console.log(lifeExpectancyScale(68));

});

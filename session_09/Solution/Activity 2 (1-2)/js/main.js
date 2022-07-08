
// SVG Size
var width = 700,
		height = 500;


// Load CSV file
d3.csv("data/wealth-health-2014.csv").then(function(data){

	// Analyze the dataset in the web console
	console.log(data);
	console.log("Countries: " + data.length)

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

	// Axis padding
	var padding = 30;

	// X scale
	var incomeScale = d3.scaleLinear()
		.domain([0, d3.max(data, function(d){ return d.Income })])
		.range([padding, width-padding]);

	// Y scale
	var lifeExpectancyScale = d3.scaleLinear()
		.domain([d3.min(data, function(d){ return d.LifeExpectancy }), d3.max(data, function(d){ return d.LifeExpectancy })])
		.range([height-padding, padding]);

	// Try scale functions in the web console
	console.log(incomeScale(5000));
	console.log(lifeExpectancyScale(68));

	// Map data to visual elements (SVG circles)
	var circles = svg.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", "country-circle")
		.attr("cx", function(d){ return incomeScale(d.Income); })
		.attr("cy", function(d){ return lifeExpectancyScale(d.LifeExpectancy); })
		.attr("r", 4)
		.attr("stroke", "#333")
		.attr("fill", "red");
	

	// Create axes functions
	var xAxis = d3.axisBottom()
		.scale(incomeScale)
		.tickFormat(d3.format(",d"))
		.ticks(10);

	var yAxis = d3.axisLeft()
		.scale(lifeExpectancyScale)
		.ticks(10);

  // Append axes to the SVG drawing area

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height - padding) + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis);

});

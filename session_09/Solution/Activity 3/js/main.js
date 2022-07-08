
// SVG Size
var width = 700,
		height = 500;


// Load CSV file
d3.csv("data/wealth-health-2014.csv").then(function(data){

	// Convert numeric values to numbers
	data.forEach(function(d) {
		d.Income = +d.Income;
		d.LifeExpectancy = +d.LifeExpectancy;
		d.Population = +d.Population;
	});

	// Sort countries descending by population
	data.sort(function(a, b) {
	  return b.Population - a.Population;
	});

	// Append a new SVG area
	var svg = d3.select("#chart-area").append("svg")
			.attr("width", width)
			.attr("height", height);

	// Axis padding
	var padding = 30;

	// X scale
	var incomeScale = d3.scaleLog()
		.domain([d3.min(data, function(d){ return d.Income }) - 100, d3.max(data, function(d){ return d.Income })])
		.range([padding, width-padding]);

	// Y scale
	var lifeExpectancyScale = d3.scaleLinear()
		.domain([d3.min(data, function(d){ return d.LifeExpectancy }) - 5, d3.max(data, function(d){ return d.LifeExpectancy }) + 5])
		.range([height-padding, padding]);

	// Radius Scale
	var populationScale = d3.scaleLinear()
		.domain(d3.extent(data, function(d){ return d.Population }))
		.range([4, 30]);

	// Region Scale (ordinal)
	var regionScale = d3.scaleOrdinal(d3.schemeCategory10);

	// Map data to visual elements (SVG circles)
	var circles = svg.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", "country-circle")
		.attr("cx", function(d){ return incomeScale(d.Income); })
		.attr("cy", function(d){ return lifeExpectancyScale(d.LifeExpectancy); })
		.attr("r", function(d){ return populationScale(d.Population); })
		.attr("stroke", "#333")
		.attr("opacity", 0.7)
		.attr("fill", function(d){ return regionScale(d.Region); });
	

	// Create axes functions

	var xAxis = d3.axisBottom()
    .scale(incomeScale)
    .tickFormat(d3.format(",d"))
    .tickValues([1000, 2000, 4000, 8000, 16000, 32000, 100000]);

	var yAxis = d3.axisLeft()
    .scale(lifeExpectancyScale)
    .ticks(10);


  // Append axes to the SVG drawing area

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height - padding) + ")")
      .call(xAxis)
    .append("text")
    	.attr("class", "axis-label")
      .attr("y", -15)
      .attr("x", width - padding)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Income per Person (GDP per Capita)");

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis)
    .append("text")
    	.attr("class", "axis-label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("x", -padding)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Life Expectancy");

});

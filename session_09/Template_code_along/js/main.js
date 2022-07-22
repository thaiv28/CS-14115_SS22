
// SVG Size
let width = 700,
	height = 500;


// Load CSV file
d3.csv("data/wealth-health-2014.csv", d => {

	d.Income = +d.Income;
	d.Population = +d.Population;
	d.LifeExpectancy = +d.LifeExpectancy;

	return d;
}).then( data => {

	// Analyze the dataset in the web console
	console.log(data);

	let sort = data.sort( (a,b) =>{
		return b.Population - a.Population
	})

	drawChart(sort)

});

function drawChart(data){

	// Margin object with properties for the four directions
	let margin = {top: 20, right: 30, bottom: 20, left: 70};

// Width and height as the inner dimensions of the chart area
	let width = 700 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

// Define 'svg' as a child-element (g) from the drawing area and include spaces
	let svg = d3.select("#chart-area").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	//console.log(svg);

	// scales

	// x
	let IncomeScale = d3.scaleLinear()
		.domain([d3.min(data, d=> d.Income),d3.max(data, d=>d.Income)])
		.range([0, width])

	// y
	let LifeExpectancyScale = d3.scaleLinear()
		.domain(d3.extent(data, d => d.LifeExpectancy))
		.range([height, 0])

	// r
	let PopulationScale = d3.scaleLinear()
		.domain(d3.extent(data, d => d.Population))
		.range([3,20])

	// color
	let colorPalette = d3.scaleOrdinal(d3.schemeCategory10);


	// AXIS

	// x axis
	let xAxis = d3.axisBottom().scale(IncomeScale)

	// y axis
	let yAxis = d3.axisLeft().scale(LifeExpectancyScale)

	// create x axis group
	svg.append('g')
		.attr("class", "x-axis")
		.attr("transform", `translate (0, ${height})`)
		.call(xAxis)

	// create y axis group
	let yAxisGroup = svg.append('g')
		.attr("class", "y-axis")


	yAxisGroup.call(yAxis)



	console.log(xAxis)





	console.log(IncomeScale(13000), LifeExpectancyScale(75))

	// binding data to html elements
	let circles = svg.selectAll(".country-circle").data(data)

	//
	circles.enter().append("circle")
		.attr("r", function(d) {
			return PopulationScale(d.Population)
		})
		.attr("cx", d => IncomeScale(d.Income))
		.attr("cy", d => LifeExpectancyScale(d.LifeExpectancy))
		.attr("fill", function (d) {
			return colorPalette(d["Region"])
		} )
	//console.log(circles)




}

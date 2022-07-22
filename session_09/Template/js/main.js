let data = [];
// Load CSV file
 d3.csv("data/wealth-health-2014.csv", d => {
	d.LifeExpectancy = +d.LifeExpectancy;
	d.Population = +d.Population;
	d.Income = +d.Income;
	return d;

}).then( data => {

	// Analyze the dataset in the web console
	console.log(data);
	console.log("Countries: " + data.length)

	let sort = data.sort((b,a) => {
		return a.Population - b.Population
	})

	drawChart(sort)

	 console.log(data)
});



function drawChart(data){
	// Margin object with properties for the four directions
	let margin = {top: 20, right: 10, bottom: 40, left: 60};

	// SVG Size
	let width = 700 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	// Append a new SVG area
	let svg = d3.select("#chart-area").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	//scales x-axis (incomeScale) to proper sizing based on minIncome, maxIncome
	let maxIncome = d3.max(data, function(d) {
		return d.Income;
	});

	let minIncome = d3.min(data, function(d) {
		return d.Income;
	});

	let incomeScale = d3.scaleLog()
		.domain([minIncome - 100, maxIncome + 100])
		.range([0, width])

	//scales y-axis (lifeExpectancyScale) to proper sizing based on minLife, maxLife
	let maxLife = d3.max(data, function(d) {
		return d.LifeExpectancy;
	});

	let minLife = d3.min(data, function(d) {
		return d.LifeExpectancy;
	});

	let lifeExpectancyScale = d3.scaleLinear()
		.domain([minLife, maxLife])
		.range([height, 0])

	//create population scale
	let maxPop = d3.max(data, function(d) {
		return d.Population;
	});

	let minPop = d3.min(data, function(d) {
		return d.Population;
	});

	let populationScale = d3.scaleLinear()
		.domain([minPop, maxPop])
		.range([4, 30])

	//create color palette
	let colorPalette = d3.scaleOrdinal(d3.schemeCategory10);

	let group = svg.append("g")

	//binding data to placeholder html elements
	let circles = svg.selectAll(".country-circle").data(data)

	circles.enter()
		.append("circle")
		.attr("class", "country-circle")
		.attr("id", (d,i) => '${circle} + i')
		.attr("cx", d => incomeScale(d.Income))
		.attr("cy", d => lifeExpectancyScale(d.LifeExpectancy))
		.attr("r", d => populationScale(d.Population))
		.attr("fill", (d) => {
			return colorPalette(d["Region"])
		})
		.on("mouseover", function(event, d) {
			console.log(event)
			d3.select(this)
				.style("stroke", "black")
		})
		.on("mouseout", function(event, d) {
			d3.select(this)
				.style("stroke-width", 0)
		})
		// group.append("circle")


	let xAxis = d3.axisBottom().scale(incomeScale)
		.tickFormat(d3.format("~g"))
		.tickValues([0, 1000, 5000, 10000, 50000, 100000])
		// .axisLabel("Income")
	svg.append("g")
		.attr("class", "axis x-axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	let yAxis = d3.axisLeft()
		.scale(lifeExpectancyScale)
	svg.append("g")
		.attr("class", "axis y-axis")
		.attr("transform", "translate(0,0)")
		.call(yAxis);

	console.log(maxIncome)
	console.log(circles)
}


function switchColor() {
	d3.selectAll("#circle_1")
		.attr("fill", "blue")
}

function doStuff() {
	console.log("1")
	d3.selectAll(".country-circle")
		.transition()
		.duration(500)
		.attr("cx", 0)
		.attr("cy", 460)
}
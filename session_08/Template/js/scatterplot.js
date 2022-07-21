

// SCATTER PLOT

// margin conventions
let marginScatter = {top: 40, right: 20, bottom: 40, left: 90},
    widthScatter = 500 - marginScatter.left - marginScatter.right,
    heightScatter = 400 - marginScatter.top - marginScatter.bottom;


let svgScatter = d3.select("#scatter-chart-area").append("svg")
    .attr("width", widthScatter + marginScatter.left + marginScatter.right)
    .attr("height", heightScatter + marginScatter.top + marginScatter.bottom)
    .append("g")
    .attr("transform", "translate(" + marginScatter.left + "," + marginScatter.top + ")");


let cleanedData = []

attractionData.forEach(function (attraction, index) {

    // convert to number
    attraction.Rating = +attraction.Rating

    // create revenue key value pair
    attraction.Revenue = attraction.Visitors*5

    cleanedData.push(attraction)
})

let circles = svgScatter.selectAll(".attraction-circle").data(cleanedData)

// in class live coding session
circles.enter()
    .append("circle")
    .attr("class", "attraction-circle")
    .attr("id", (d,i) => {
        console.log(d,i);
        return "circle_" + i
    })
    .attr("r", 5)

    // rating on x
    .attr("cx", (d,i) => {return d.Rating*100})

    // visitors on y
    .attr("cy", d => d.Visitors/1000000)

    .attr("fill", (d,i) => {
        if (d.Category === "Theme Park"){
            return "yellow"
        } else {
            return "black"
        }
    })







console.log(circles.enter())

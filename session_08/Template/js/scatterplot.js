
// SCATTER PLOT

// margin conventions
let marginScatter = {top: 40, right: 20, bottom: 40, left: 90},
    widthScatter = 500 - marginScatter.left - marginScatter.right
// CHART AREA

let marginScatter = {top: 40, right: 20, bottom: 40, left: 90},
    widthScatter = $('#scatter-chart-area').width() - marginScatter.left - marginScatter.right,
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







let svg = d3.select('#drawing-area').append('svg')
.attr('width', 900)
.attr('height', 500)


// number of pets
let rScale = d3.scaleLinear()
    .range([10,50])
    .domain([0,5])


// number of pets
let xScale = d3.scaleLinear()
    .range([50,800])
    .domain([0,5])


// number of climbs
let yScale = d3.scaleLinear()
    .range([50,450])
    .domain([0,6])

let circles = svg.selectAll('.student').data(students)

circles.enter()
    .append('circle')
    .attr('r', function (d,i) {
        return rScale(d.numberOfPets)
    })
    .attr('cx', function(d,i){
        console.log(d,i)
        return xScale(d.numberOfPets)
    })
    .attr('cy', function (d,i) {
        return yScale(d.numberOfClimbs)
    })
    .attr("fill", function (d,i) {
        if(d.fromState === "MA"){
            return "#FF0000"
        }
    })

    .on("mouseover", function (event, d) {
        console.log(d.firstname)
    })

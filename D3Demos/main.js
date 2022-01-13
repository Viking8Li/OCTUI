const MARGIN

const svg = d3.select("#chart-area").append("svg")
                .attr("width",400)
                .attr("height",400)

d3.json("data/buildings.json").then(data => {
    data.forEach(d => {
        d.height = Number(d.height)
    })

//Band Scale(starting x, width)
const x = d3.scaleBand()
            .domain(data.map(d=>d.name))
            .range([0, 400])
            .paddingInner(0.3)
            .paddingOuter(0.2)

//test band Scale
console.log(x("Lotte World Tower"))

//Linear Scale
const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.height)])
            .range([0,400])

//cirtual rects created in a temp area of D3
const rects = svg.selectAll("rect")
    .data(data)

//Enter selection(enter the rects into the DOM)
rects.enter().append("rect")
            .attr("y",0)
            .attr("x", (d,i) => x(d.name))
            .attr("width", x.bandwidth)
            .attr("height", d => y(d.height))
            .attr("fill", "blue")

});
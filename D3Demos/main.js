const svg = d3.select("#chart-area").append("svg")
                .attr("width",400)
                .attr("height",400)

d3.json("data/buildings.json").then(data => {
    data.forEach(d => {
        d.height = Number(d.height)
    })

//Linear Scale
const y = d3.scaleLinear()
            .domain([0, 828])
            .range([0,400])


//cirtual rects created in a temp area of D3
const rects = svg.selectAll("rect")
    .data(data)

//Enter selection(enter the rects into the DOM)
rects.enter().append("rect")
            .attr("y",0)
            .attr("x", (d,i) => i * 60)
            .attr("width", 40)
            .attr("height", d => y(d.height))
            .attr("fill", "blue")

});
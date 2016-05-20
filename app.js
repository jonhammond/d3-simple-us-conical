var width = 960;
var height = 1160;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

d3.json("us.json", function(error, us) {
  if (error) {
    return console.error(error)
  }

  var projection = d3.geo.albers()
    .scale(900)
    .translate([width / 2, height / 2])
    .center([0, 40])
    // .rotate([0, -100])
    // .parallels([23, 50])
    // .scale(6000)
    // .translate([width / 2, height / 2]);

  var path = d3.geo.path()
    .projection(projection);

  var subunits = topojson.feature(us, us.objects.subunits)

  svg.append("path")
    .datum(subunits)
    .attr("d", path);
    // .attr("d", d3.geo.path().projection(d3.geo.mercator()));
  console.log(us)
})

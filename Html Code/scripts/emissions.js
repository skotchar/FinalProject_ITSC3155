function loadData() {
    const csv_data = fetch("./datasets/worldMapData (2).json")
    .then(response => {
    return response.json();
    })
    .then(data => saveData(data));

    function saveData(data) {
        const selects = document.querySelectorAll('select');
        for (const select of selects) {
            setupSelectorsOptions(select, data)
        }
    }

    console.log(data1);
    function setupSelectorsOptions(element,data) {
        for (var x = 0; x < data.values.length; x++ ) {
            single_entry = data.values[x].name;
            console.log(single_entry);
            newElement = document.createElement("option");
            newElement.value = single_entry;
            newElement.text = single_entry;
            element.add(newElement);
        }
    }
}

function selectACountryHome(element) {
    var value = element.value;
    location.href='visualize_and_tutorial.html';
    //locations(value);
    var imHidden = document.getElementById('hidden_data');
    imHidden.value = value;
}

function makeAPlan() {
    var percent = prompt("Enter a percentage between 0 and 100");
    makeAPlanChart(percent, document.getElementById('hidden_data').text);
}

function afunc(value=1) {
    // set the dimensions and margins of the graph
var margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/skotchar/FinalProject_ITSC3155/main/Html%20Code/datasets/Data.csv", function(data) {

    // List of groups (here I have one group per column)
    var allGroup = ["valueA", "valueB", "valueC"]

    // add the options to the button
    d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
      .domain([0,10])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain( [0,20])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Initialize line with group a
    var line = svg
      .append('g')
      .append("path")
        .datum(data)
        .attr("d", d3.line()
          .x(function(d) { return x(+d.time) })
          .y(function(d) { return y(+d.valueA) })
        )
        .attr("stroke", function(d){ return myColor("valueA") })
        .style("stroke-width", 4)
        .style("fill", "none")

    // A function that update the chart
    function update(selectedGroup) {

      // Create new data with the selection?
      var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })

      // Give these new data to update line
      line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(function(d) { return x(+d.time) })
            .y(function(d) { return y(+d.value) })
          )
          .attr("stroke", function(d){ return myColor(selectedGroup) })
    }
})

}
/*
function makeAPlanChart(value, country) {

    var data1 = d3.json("https://raw.githubusercontent.com/skotchar/FinalProject_ITSC3155/main/Html%20Code/datasets/LineChartData.csv", function(data, country) {
        var ys = [];
        var year;
        var co2kt;
        var data_bunch;
        for (const item of data) {
               if ("Country Name" == country) {
                    year = 2005;
                    co2kt = parseInt(item.2005, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2006;
                    co2kt = parseInt(item.2006,64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2007;
                    co2kt = parseInt(item.2007, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2008;
                    co2kt = parseInt(item.2008, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2009;
                    co2kt = parseInt(item.2009, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2010;
                    co2kt = parseInt(item.2010, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2011;
                    co2kt = parseInt(item.2011, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2012;
                    co2kt = parseInt(item.2012, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2013;
                    co2kt = parseInt(item.2013, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2014;
                    co2kt = parseInt(item.2014, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2015;
                    co2kt = parseInt(item.2015, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    year = 2016;
                    co2kt = parseInt(item.2016, 64);
                    data_bunch = {"year":year , "emission" :co2kt};
                    ys.push(data_bunch);
                    break;
                }
        }
        return ys
    });

    var discount_data1 = data1
    var multiplier = (percent/100.0)
    for (var i = 0; i < discount_data1.length; i ++) {
        discount_data1[i].emission -= (parseInt(discount_data1[i].emission, 64)*multiplier)
    }

    var vis = d3.select("#visualisation");
    WIDTH = 500;
    HEIGHT = 500;
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    }

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2005,2016]);
    yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,50000000]);

    xAxis = d3.svg.axis()
    .scale(xScale);

    yAxis = d3.svg.axis()
    .scale(yScale);

    vis.append("svg:g")
    .call(xAxis);

    vis.append("svg:g")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);

    vis.append("svg:g")
    .call(yAxis);

    yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

    vis.append("svg:g")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

    var lineGen = d3.svg.line()
      .x(function(d) {
        return xScale(d.year);
      })
      .y(function(d) {
        return yScale(d.sale);
      });

      vis.append('svg:path')
          .attr('d', lineGen(data))
          .attr('stroke', 'red')
          .attr('stroke-width', 2)
          .attr('fill', 'none');
}
*/

function selectACountry(element) {
    // TODO uses this function to change graph second option
}
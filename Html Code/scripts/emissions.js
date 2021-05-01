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
    // TODO set maps on visualization page to graph emissions for value
}

function afunc() {
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
})

}
/*
function locations(country) {
    anychart.data.loadJsonFile("https://raw.githubusercontent.com/skotchar/FinalProject_ITSC3155/main/Html%20Code/datasets/NewWorldMapData.json", function (data) {
            var Data = data.values;
            var y = [];

            for (var i = 0; i < Data.length; i++) {
                if ("Country Name" == country) {
                    y.push(parseInt(Data[i].2005));
                    y.push(parseInt(Data[i].2006));
                    y.push(parseInt(Data[i].2007));
                    y.push(parseInt(Data[i].2008));
                    y.push(parseInt(Data[i].2009));
                    y.push(parseInt(Data[i].2010));
                    y.push(parseInt(Data[i].2011));
                    y.push(parseInt(Data[i].2012));
                    y.push(parseInt(Data[i].2013));
                    y.push(parseInt(Data[i].2014));
                    y.push(parseInt(Data[i].2015));
                    y.push(parseInt(Data[i].2016));
                }
        }

        var trace1 = {
            x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            y = y,
            type: 'scatter'
        };

        var data = [trace1];

        Plotly.newPlot('visual_graph_back', data);
    }
}
*/
function selectACountry(element) {
    // TODO uses this function to change graph second option
}
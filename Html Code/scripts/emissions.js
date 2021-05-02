function loadData() {
    var data = ["Canada", "United States", "Russia", "China", "Australia", "Greenland", "Brazil", "Mexico", "Argentina", "Nigeria"];
    saveData(data);

    function saveData(data) {
        const selects = document.querySelectorAll('select');
        for (const select of selects) {
            setupSelectorsOptions(select, data)
        }
    }

    function setupSelectorsOptions(element, data) {
        for (var x = 0; x < data.length; x++) {
            single_entry = data[x];
            console.log(single_entry);
            newElement = document.createElement("option");
            newElement.value = single_entry;
            newElement.text = single_entry;
            element.add(newElement);
        }
    }
}
function makeAPlan() {
    var percent = prompt("Enter a percentage between 0 and 100");
    /*
        this will call to added a second line to the already generated graph if it has to line edit the second line
    */
    makeAPlanChart(percent, dataset, country);
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

function selectACountry(element) { }

function top10() {
    var Canada = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [561425.034, 571993.328, 571846.648, 561791.734, 532191.71, 527263.262, 522774.854, 517721.728, 519188.528, 540614.809, 549430.277,
            544894.198],
        type: 'scatter'
    };

    var United_States = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [5789727.291, 5697285.888, 5789030.561, 5614110.994,
            5263505.457, 5395532.125, 5270047.385, 5081999.958,
            5170359.99, 5225412.661, 5126913.374, 5006302.077],
        type: 'scatter'
    };

    var Russia = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [1615089.813, 1669262.404, 1666886.188, 1714978.893,
            1574045.082, 1670531.186, 763405.295, 1807244.28,
            1739426.782, 1736984.56, 1698213.369, 1732026.776],
        type: 'scatter'
    };

    var China = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [5896957.705, 6529291.518, 6697654.489, 7553070.247,
            7557789.676, 8776040.416, 9733538.12, 10028573.94,
            10258007.13, 10291926.88, 10145004.86, 9893037.952],
        type: 'scatter'
    };

    var Australia = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [350172.831, 365346.877, 372090.49, 385904.079,
            394792.887, 390861.863, 391818.95, 388126.281,
            372317.844, 361316.844, 365332.209, 375907.837],
        type: 'scatter'
    };

    var Greenland = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [608.722, 627.057, 638.058, 660.06,
            575.719, 663.727, 707.731, 568.385,
            553.717, 506.046, 509.713, 509.713],
        type: 'scatter'
    };

    var Brazil = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [347308.9, 347668.3, 363212.7, 387631.2,
            367147.4, 419754.2, 439412.9, 470028.7,
            503677.1, 533530.2, 504388.5, 462298.7],
        type: 'scatter'
    };

    var Mexico = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [466361.7, 479251.2, 480520, 493251.8,
            475950.9, 464308.2, 484429, 496324.8,
            490340.2, 481499.1, 482947.6, 486405.5],
        type: 'scatter'
    };

    var Argentina = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [162110.7, 175436.6, 175176.3, 189107.2,
            179961.7, 187904.4, 191622.8, 193027.2,
            193701.9, 195777.5, 201168, 201347.6],
        type: 'scatter'
    };

    var Nigeria = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [106119.3, 98238.93, 94868.96, 95987.39,
            76079.25, 114150, 131685.6, 119008.8,
            124329.6, 130130.8, 115928.5, 120369.3],
        type: 'scatter'
    };

    var Empty = {
        x: [],
        y: [],
        type: 'scatter'
    };

    var data = [Canada, United_States,Russia, China, Australia, Greenland, Brazil, Mexico, Argentina, Nigeria, Empty];
}
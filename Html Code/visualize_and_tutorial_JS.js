// JavaScript source code
function location(country) {
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

        Plotly.newPlot('visual_graph', data);
    }
}
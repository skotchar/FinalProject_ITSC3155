function makeAPlan() {
    var percents = prompt("Enter a percentage between 0 and 100");

    var value = document.getElementById('makeASelect').value;
    if (value == '') {
        alert("no input country selected. using Canada's data instead.");
        value = "Canada";
    }
    countries(value, percents);
    function countries(selection, percent){
var data = [];
switch(selection) {
    case 'Canada':
        var Canada = {
        x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
        y: [561425.034,571993.328,571846.648,561791.734,532191.71, 527263.262,522774.854,517721.728,519188.528,540614.809,549430.277,
        544894.198],
        type: 'scatter',
        name: 'Canada'
        };
        data.push(Canada);
        break;
    case 'United States':
        var United_States = {
          x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [5789727.291,5697285.888,5789030.561,5614110.994,
             5263505.457,5395532.125,5270047.385,5081999.958,
             5170359.99,5225412.661,5126913.374,5006302.077],
          type: 'scatter',
          name: 'US'
        };
        data.push(United_States);
        break;
    case 'Russia':
        var Russia = {
          x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [ 1615089.813,1669262.404,1666886.188,1714978.893,
               1574045.082,1670531.186,763405.295,1807244.28,
               1739426.782,1736984.56,1698213.369,1732026.776],
          type: 'scatter',
          name: 'Russia'
        };
        data.push(Russia);
        break;
    case 'China':
        var China = {
          x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [ 5896957.705,6529291.518,6697654.489,7553070.247,
               7557789.676,8776040.416,9733538.12,10028573.94,
              10258007.13,10291926.88,10145004.86,9893037.952],
          type: 'scatter',
          name: 'China'
        };
        data.push(China);
        break;
    case 'Australia':
        var Australia = {
          x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [ 350172.831,365346.877,372090.49,385904.079,
               394792.887,390861.863,391818.95,388126.281,
               372317.844,361316.844,365332.209,375907.837],
          type: 'scatter',
          name: 'Australia'
        };
        data.push(Australia);
        break;
    case 'Greenland':
        var Greenland = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [608.722,627.057,638.058,660.06,
          575.719,663.727,707.731,568.385,
          553.717,506.046,509.713,509.713],
          type: 'scatter',
          name: 'Greenland'
        };
        data.push(Greenland);
        break;
    case 'Brazil':
        var Brazil = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [347308.9,347668.3,363212.7,387631.2,
          367147.4,419754.2,439412.9,470028.7,
          503677.1,533530.2,504388.5,462298.7],
          type: 'scatter',
          name: 'Brazil'
        };
        data.push(Brazil);
        break;
    case 'Mexico':
        var Mexico = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [466361.7,479251.2,480520,493251.8,
          475950.9,464308.2,484429,496324.8,
          490340.2,481499.1,482947.6,486405.5],
          type: 'scatter',
          name: 'Mexico'
        };
        data.push(Mexico);
        break;
    case 'Argentina':
        var Argentina = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [162110.7,175436.6,175176.3,189107.2,
          179961.7,187904.4,191622.8,193027.2,
          193701.9,195777.5,201168,201347.6],
          type: 'scatter',
          name: 'Argentina'
        };
        data.push(Argentina);
        break;
    case 'Nigeria':
        var Nigeria = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [106119.3,98238.93,94868.96,95987.39,
          76079.25,114150,131685.6,119008.8,
          124329.6,130130.8,115928.5,120369.3],
          type: 'scatter',
          name: 'Nigeria'
        };
        data.push(Nigeria);
        break;
    default:
        var Empty= {
          x: [],
          y: [],
          type: 'scatter'
        };
        break;
}
var data2 =[]
switch(selection) {
    case 'Canada':
        var Canada = {
        x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
        y: [561425.034,571993.328,571846.648,561791.734,532191.71, 527263.262,522774.854,517721.728,519188.528,540614.809,549430.277,
        544894.198],
        type: 'scatter',
        name: 'Canada'
        };
        data2.push(Canada);
        break;
    case 'United States':
        var United_States = {
          x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [5789727.291,5697285.888,5789030.561,5614110.994,
             5263505.457,5395532.125,5270047.385,5081999.958,
             5170359.99,5225412.661,5126913.374,5006302.077],
          type: 'scatter',
          name: 'US'
        };
        data2.push(United_States);
        break;
    case 'Russia':
        var Russia = {
          x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [ 1615089.813,1669262.404,1666886.188,1714978.893,
               1574045.082,1670531.186,763405.295,1807244.28,
               1739426.782,1736984.56,1698213.369,1732026.776],
          type: 'scatter',
          name: 'Russia'
        };
        data2.push(Russia);
        break;
    case 'China':
        var China = {
          x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [ 5896957.705,6529291.518,6697654.489,7553070.247,
               7557789.676,8776040.416,9733538.12,10028573.94,
              10258007.13,10291926.88,10145004.86,9893037.952],
          type: 'scatter',
          name: 'China'
        };
        data2.push(China);
        break;
    case 'Australia':
        var Australia = {
          x: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [ 350172.831,365346.877,372090.49,385904.079,
               394792.887,390861.863,391818.95,388126.281,
               372317.844,361316.844,365332.209,375907.837],
          type: 'scatter',
          name: 'Australia'
        };
        data2.push(Australia);
        break;
    case 'Greenland':
        var Greenland = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [608.722,627.057,638.058,660.06,
          575.719,663.727,707.731,568.385,
          553.717,506.046,509.713,509.713],
          type: 'scatter',
          name: 'Greenland'
        };
        data2.push(Greenland);
        break;
    case 'Brazil':
        var Brazil = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [347308.9,347668.3,363212.7,387631.2,
          367147.4,419754.2,439412.9,470028.7,
          503677.1,533530.2,504388.5,462298.7],
          type: 'scatter',
          name: 'Brazil'
        };
        data2.push(Brazil);
        break;
    case 'Mexico':
        var Mexico = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [466361.7,479251.2,480520,493251.8,
          475950.9,464308.2,484429,496324.8,
          490340.2,481499.1,482947.6,486405.5],
          type: 'scatter',
          name: 'Mexico'
        };
        data2.push(Mexico);
        break;
    case 'Argentina':
        var Argentina = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [162110.7,175436.6,175176.3,189107.2,
          179961.7,187904.4,191622.8,193027.2,
          193701.9,195777.5,201168,201347.6],
          type: 'scatter',
          name: 'Argentina'
        };
        data2.push(Argentina);
        break;
    case 'Nigeria':
        var Nigeria = {
          x:[2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
          y: [106119.3,98238.93,94868.96,95987.39,
          76079.25,114150,131685.6,119008.8,
          124329.6,130130.8,115928.5,120369.3],
          type: 'scatter',
          name: 'Nigeria'
        };
        data2.push(Nigeria);
        break;
    default:
        var Empty= {
          x: [],
          y: [],
          type: 'scatter'
        };
        break;
}
var over_time = 11.0;
for(var i = 1; i < data[0].y.length; i++) {
    data[0].y[i] = data[0].y[i]-(data[0].y[i] * (((percent)/over_time)/100.0));
    over_time = over_time - 1.0;
};

data[0].name = ( data[0].name +"'s plan to decrease " + percent +"%, from 2005 to 2016");

var data_untouched = [data2[0], data[0]];
Plotly.newPlot('visual_graph_back', data_untouched);
}
}

function top10() {
    var Canada = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [561425.034, 571993.328, 571846.648, 561791.734, 532191.71, 527263.262, 522774.854, 517721.728, 519188.528, 540614.809, 549430.277,
            544894.198],
        type: 'scatter',
        name: 'Canada'
    };

    var United_States = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [5789727.291, 5697285.888, 5789030.561, 5614110.994,
            5263505.457, 5395532.125, 5270047.385, 5081999.958,
            5170359.99, 5225412.661, 5126913.374, 5006302.077],
        type: 'scatter',
        name: 'United States'
    };

    var Russia = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [1615089.813, 1669262.404, 1666886.188, 1714978.893,
            1574045.082, 1670531.186, 763405.295, 1807244.28,
            1739426.782, 1736984.56, 1698213.369, 1732026.776],
        type: 'scatter',
        name: 'Russia'
    };

    var China = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [5896957.705, 6529291.518, 6697654.489, 7553070.247,
            7557789.676, 8776040.416, 9733538.12, 10028573.94,
            10258007.13, 10291926.88, 10145004.86, 9893037.952],
        type: 'scatter',
        name: 'China'
    };

    var Australia = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [350172.831, 365346.877, 372090.49, 385904.079,
            394792.887, 390861.863, 391818.95, 388126.281,
            372317.844, 361316.844, 365332.209, 375907.837],
        type: 'scatter',
        name: 'Australia'
    };

    var Greenland = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [608.722, 627.057, 638.058, 660.06,
            575.719, 663.727, 707.731, 568.385,
            553.717, 506.046, 509.713, 509.713],
        type: 'scatter',
        name: 'Greenland'
    };

    var Brazil = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [347308.9, 347668.3, 363212.7, 387631.2,
            367147.4, 419754.2, 439412.9, 470028.7,
            503677.1, 533530.2, 504388.5, 462298.7],
        type: 'scatter',
        name: 'Brazil'
    };

    var Mexico = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [466361.7, 479251.2, 480520, 493251.8,
            475950.9, 464308.2, 484429, 496324.8,
            490340.2, 481499.1, 482947.6, 486405.5],
        type: 'scatter',
        name: 'Mexico'
    };

    var Argentina = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [162110.7, 175436.6, 175176.3, 189107.2,
            179961.7, 187904.4, 191622.8, 193027.2,
            193701.9, 195777.5, 201168, 201347.6],
        type: 'scatter',
        name: 'Argentina'
    };

    var Nigeria = {
        x: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        y: [106119.3, 98238.93, 94868.96, 95987.39,
            76079.25, 114150, 131685.6, 119008.8,
            124329.6, 130130.8, 115928.5, 120369.3],
        type: 'scatter',
        name: 'Nigeria'
    };

    var Empty = {
        x: [],
        y: [],
        type: 'scatter'
    };


    var data = [Canada, United_States,Russia, China, Australia, Greenland, Brazil, Mexico, Argentina, Nigeria];
    Plotly.newPlot('visual_graph_back', data);
}
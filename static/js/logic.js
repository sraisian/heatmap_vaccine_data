function init() {    
    Plotly.d3.csv('static/data/Vaccinations Data/vaccine1516data.csv', function(err, rows){
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
        }

        var data = [{
            type: 'choropleth',
            locationmode: 'USA-states',
            locations: unpack(rows, 'Code'),
            z: unpack(rows, 'Total Vaccinated'),
            text: unpack(rows, 'Location of Immunization'),
            zmin: 0,
            zmax: 17000,
            colorscale: [
                [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
            ],
            colorbar: {
                title: 'Total Vaccinated',
                thickness: 0.2
            },
            marker: {
                line:{
                    color: 'rgb(255,255,255)',
                    width: 2
                }
            }
        }];


        var layout = {
            title: '2015-2016 Flu Season Vaccinations by State',
            geo:{
                scope: 'usa',
                showlakes: true,
                lakecolor: 'rgb(255,255,255)'
            }
        };

        Plotly.newPlot("map", data, layout, {showLink: false});
    });
}

d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
  //Season 15-16
    if (dataset === 'dataset1') {
        Plotly.d3.csv('static/data/Vaccinations Data/vaccine1516data.csv', function(err, rows){
            function unpack(rows, key) {
                return rows.map(function(row) { return row[key]; });
            }
    
            var data = [{
                type: 'choropleth',
                locationmode: 'USA-states',
                locations: unpack(rows, 'Code'),
                z: unpack(rows, 'Total Vaccinated'),
                text: unpack(rows, 'Location of Immunization'),
                zmin: 0,
                zmax: 17000,
                colorscale: [
                    [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                    [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                    [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
                ],
                colorbar: {
                    title: 'Total Vaccinated',
                    thickness: 0.2
                },
                marker: {
                    line:{
                        color: 'rgb(255,255,255)',
                        width: 2
                    }
                }
            }];
    
    
            var layout = {
                title: '2015-2016 Flu Season Vaccinations by State',
                geo:{
                    scope: 'usa',
                    showlakes: true,
                    lakecolor: 'rgb(255,255,255)'
                }
            };
    
            Plotly.newPlot("map", data, layout, {showLink: false});
        });      


    }
  //Season 16-17
    if (dataset === 'dataset2') {
        Plotly.d3.csv('static/data/Vaccinations Data/vaccine1617data.csv', function(err, rows){
            function unpack(rows, key) {
                return rows.map(function(row) { return row[key]; });
            }
    
            var data = [{
                type: 'choropleth',
                locationmode: 'USA-states',
                locations: unpack(rows, 'Code'),
                z: unpack(rows, 'Total Vaccinated'),
                text: unpack(rows, 'Location of Immunization'),
                zmin: 0,
                zmax: 17000,
                colorscale: [
                    [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                    [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                    [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
                ],
                colorbar: {
                    title: 'Total Vaccinated',
                    thickness: 0.2
                },
                marker: {
                    line:{
                        color: 'rgb(255,255,255)',
                        width: 2
                    }
                }
            }];
    
    
            var layout = {
                title: '2016-2017 Flu Season Vaccinations by State',
                geo:{
                    scope: 'usa',
                    showlakes: true,
                    lakecolor: 'rgb(255,255,255)'
                }
            };
    
            Plotly.newPlot("map", data, layout, {showLink: false});
        });      
    }
  //Season 17-18
    if (dataset === 'dataset3') {
        Plotly.d3.csv('static/data/Vaccinations Data/vaccine1718data.csv', function(err, rows){
            function unpack(rows, key) {
                return rows.map(function(row) { return row[key]; });
            }
    
            var data = [{
                type: 'choropleth',
                locationmode: 'USA-states',
                locations: unpack(rows, 'Code'),
                z: unpack(rows, 'Total Vaccinated'),
                text: unpack(rows, 'Location of Immunization'),
                zmin: 0,
                zmax: 17000,
                colorscale: [
                    [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                    [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                    [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
                ],
                colorbar: {
                    title: 'Total Vaccinated',
                    thickness: 0.2
                },
                marker: {
                    line:{
                        color: 'rgb(255,255,255)',
                        width: 2
                    }
                }
            }];
    
    
            var layout = {
                title: '2017-2018 Flu Season Vaccinations by State',
                geo:{
                    scope: 'usa',
                    showlakes: true,
                    lakecolor: 'rgb(255,255,255)'
                }
            };
    
            Plotly.newPlot("map", data, layout, {showLink: false});
        });      

    }
   //Season 18-19 
    if (dataset === 'dataset4') {
        Plotly.d3.csv('static/data/Vaccinations Data/vaccine1819data.csv', function(err, rows){
            function unpack(rows, key) {
                return rows.map(function(row) { return row[key]; });
            }
    
            var data = [{
                type: 'choropleth',
                locationmode: 'USA-states',
                locations: unpack(rows, 'Code'),
                z: unpack(rows, 'Total Vaccinated'),
                text: unpack(rows, 'Location of Immunization'),
                zmin: 0,
                zmax: 17000,
                colorscale: [
                    [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                    [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                    [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
                ],
                colorbar: {
                    title: 'Total Vaccinated',
                    thickness: 0.2
                },
                marker: {
                    line:{
                        color: 'rgb(255,255,255)',
                        width: 2
                    }
                }
            }];
    
    
            var layout = {
                title: '2018-2019 Flu Season Vaccinations by State',
                geo:{
                    scope: 'usa',
                    showlakes: true,
                    lakecolor: 'rgb(255,255,255)'
                }
            };
    
            Plotly.newPlot("map", data, layout, {showLink: false});
        });
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  






init();
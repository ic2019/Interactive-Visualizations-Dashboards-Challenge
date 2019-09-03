/*
**Function to build MetaData
**params sample ( A string value)
**Returns None
*/
function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel
  // console.log(sample);
  url = `/metadata/${sample}`;
  console.log(url);
  // Use `d3.json` to fetch the metadata for a sample
  d3.json(url).then(response => {

    // console.log(response);
    // Use d3 to select the panel with id of `#sample-metadata`
    metaData = d3.select("#sample-metadata");
    // Use `.html("") to clear any existing metadata
    metaData.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(response).forEach(([key, value]) => {

          // Hint: Inside the loop, you will need to use d3 to append new
          // tags for each key-value in the metadata.
        console.log("Iam inside object entries");
        console.log(`${key} : ${value}`);
        metaData
        .append("p")
        .attr("class","text-sm-left")
        .style("font-size","1.2rem")
        .style("font-weight","bold")
        .text(`${key}:${value}`);
        
    });


    // BONUS: Build the Gauge Chart
     buildGauge(response.WFREQ);

  });


}

/*
**Function to initialize the Dashboard
** and invoke charts and metadata functions
**params : None
**Returns : None
*/

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    console.log(`Sample Names ${sampleNames}`);
       selector
       .selectAll("option")
       .data(sampleNames)
       .enter()
       .append("option")
       .text(sample => { return sample});


    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

/*
**Function to build charts
** and invoke functions for creating Pie and Bubble charts
**params : Sample ( A string value)
**Returns : None
*/
function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  var url = `/samples/${sample}`;
  buildPie(url);  
      
  // @TODO: Build a Bubble Chart using the sample data

  buildBubble(url);
      
}

/*
**Function to update charts on new sample data
** Charts and MetaData updated on new sample data
**params : new Sample ( A string value)
**Returns : None
*/
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

/*
**Function to invoke a method
** to build bubble chart
**params : url of the route selected with sample ( A string value)
**Returns : None
*/
function buildBubble(url) {

  
  d3.json(url).then(response => {  

      trace2 = {
        x: response["otu_ids"],
        y: response["sample_values"],
        text: response["otu_labels"],
        mode: "markers",
        marker: {
          size: response["sample_values"],
          color: response["otu_ids"],
          colorscale: "Viridis"
        }
        
      };
      data = [trace2];
      layout = {
        title: "<b>OTU Id's Vs Sample Values</b>",
        xaxis: {
          title: "<b>OTU ID</b>"
        },
        yaxis: {
          title: "<b>Sample Values</b>"
        }

      };
      Plotly.newPlot("bubble", data, layout);
});
}

/*
**Function to invoke a method
** to build a Pie chart
**params : url of the route selected with sample ( A string value)
**Returns : None
*/
function buildPie(url) {
  d3.json(url).then(response => {  
    // console.log("I am inside buildCharts");
    // console.log(response);  

    // @TODO: Build a Pie Chart
    trace1 = {
      values: response["sample_values"].slice(0,10),
      labels: response["otu_ids"].slice(0,10),
      type: "pie",
      hoverinfo: response["otu_labels"]
    };
    data = [trace1];
    layout = {
      title: "<b>Top 10 Samples</b>",

    };
    Plotly.newPlot("pie", data, layout);
 
  });
}

// Initialize the dashboard
init();

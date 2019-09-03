// Building gauge
function buildGauge(gaugeValue) {

    console.log(gaugeValue);
    
    var data = [{domain: {x: [0,1], y: [0, 1]},
                 value: gaugeValue, title: {text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week"},
                 type: "indicator", 
                 align: "center",
                 mode: "gauge+number+delta", 
                 delta: {reference: 9, increasing: {color: "Orange"}}, 
                 gauge:                           
                 {axis: {range: [0, 9],
                 tickvals: [1,2,3,4,5,6,7,8,9],
                 ticktext: ["0-1","1-2","2-3","3-4","4-5","5-6","6-7","7-8","8-9"],
                 ticks: "inside",
                 showticklabels: true,
                 tickangle: 0}, 
                 steps: [{range: [0, 1], color: "rgb(0, 255, 255)"},
                 {range: [1, 2], color: "rgb(0, 255, 191)" } ,
                 {range: [2,3], color: 'rgb(0, 255, 128)' },
                 {range: [3,4], color: 'rgb(0, 255, 64)' },
                 {range: [4,5], color: 'rgb(0, 255, 0)' },
                 {range: [5,6], color: 'rgb(64, 255, 0)' },
                 {range: [6,7], color: 'rgb(128, 255, 0)' },
                 {range: [7,8], color: 'rgb(191, 255, 0)' },
                 {range: [8,9], color: 'rgb(255, 255, 0)' },
                ], 
                 threshold: {line: {color: "red", width: 4},
                 thickness: 1, value: gaugeValue}}}];
             

      var layout = {width: 450, 
        height: 450, 
        margin: {t: 25, r: 25, l: 25, b: 25},
      paper_bgcolor: "white", font: {color: "black", family: "Arial"}};
     var gauge = document.getElementById("gauge");

    Plotly.newPlot(gauge,data, layout);
  }
  
 
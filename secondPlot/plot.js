//create traces 
// an array of names of books

let gooseBumpsBooks = ["Monster's Blood", "It Came from Beneath the Sink", 
                        " Why I am Afraid of the Bees"];

// array fo the number of times I read each book
let timesRead = [3, 6, 4]

// create trace

let trace1 = {
    x: gooseBumpsBooks,
    y: timesRead,
    type:"bar",
    name: "Jarvis Reads"
};

//make the array that holds the trace

var data = [trace1];

// set the layout information
var layout = {
    title: "Jarvis's Goosebumps Series Reads"

};
 
// call Plotly to plot the chart in the id 'Plot1'

Plotly.newPlot('plot1', data, layout);


let timesRead2 = [6, 3, 1];

// make a second trace for the other reader
let trace2 = {
    x: gooseBumpsBooks,
    y: timesRead2,
    type:"bar",
    name: "Other User's Reads"
};

// to make a grouped chart, add the second trace to the array of data
let data2 = [trace1, trace2];


// update the layout
var layout2 = {
    title: "Jarvis and the other user's Goosebumps reads"
}
//call ploty to plot the second grouped bar chart in the id 'plot2'
Plotly.newPlot('plot2', data2, layout2);
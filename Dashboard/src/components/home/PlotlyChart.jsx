import React from 'react'
import Plot from 'react-plotly.js';


function PlotlyChart() {
    return (
        <Plot
        data={[
          {
            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {
            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            y: [134000, 114000, 57420, 23000, 184000, 156000, 124000, 98000, 58000, 125000, 142500],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
          
        ]}
        layout={ {width: 888, height: 273, 
            xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false
          },
          yaxis: {
            showgrid: false,
            showline: false
          }} }
      />
    )
}

export default PlotlyChart

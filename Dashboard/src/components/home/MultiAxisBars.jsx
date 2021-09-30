import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';



const data = {
  labels: [ 'Apr 21', 'May 21', 'Jun 21', 'Jul 21', 'Aug 21', 'Sep 21'],
  datasets: [
    {
      label: 'Males(236K)',
      data: [134000, 114000, 57420, 23000, 184000, 156000, 124000, 98000, 58000, 125000, 142500, 123456],
      fill: false,
      backgroundColor: '#017EFA',
      borderColor: '#017EFA',
      yAxisID: 'y-axis-1',
      borderRadius: 5,
      pointStyle: 'circle',
      pointRadius: 2,

    },
    {
      label: 'Females (457K)',
      data: [110000, 98000, 145000, 120000, 108000, 149000, 115000, 135000, 112000, 142000, 125500, 156789],
      fill: false,
      backgroundColor: '#51CBFF',
      borderColor: '#51CBFF',
      yAxisID: 'y-axis-2',
      borderRadius: 5,
      pointStyle: 'circle',
      pointRadius: 2,
    },
  ]
};

const options = {
    plugins: {
        legend: {
          display: true,
            labels: {
              usePointStyle: true,
                // This more specific font property overrides the global property
                font: {
                    size: 14,
                    family : 'Inter',
                    lineHeight: 16, 
                    color: '#000000'
                }
            }
        }
    },
    scales: {
        x: {
           display: true,
           grid: {
               borderColor: '#f8f9ff', 
               display: true
           },
           ticks: {
             padding : 18
           }
        },
        'y-axis-1': {
           beginAtZero: true,
           display: true,
           grid: {
            borderColor: '#f8f9ff', 
            display: false
        
           }
        },
        'y-axis-2' : {
            display: false,
        }
    }
};



const MultiAxisBars = () => (
  <div className="chart">
    <Bar data={data} options={options} />
  </div>
);

export default MultiAxisBars;
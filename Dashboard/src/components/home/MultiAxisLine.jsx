import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.plugins.legend.display = false;

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '# of Votes',
      data: [50000, 100000, 150000, 200000, 50000, 100000, 150000, 200000, 50000, 100000, 150000, 200000],
      fill: false,
      backgroundColor: '#017EFA',
      borderColor: '#017EFA',
      yAxisID: 'y-axis-1',
      pointRadius: 5,

    },
    {
      label: '# of No Votes',
      data: [50000, 100000, 150000, 200000, 50000, 100000, 150000, 200000, 50000, 100000, 150000, 200000],
      fill: false,
      backgroundColor: '#FD1F9B',
      borderColor: '#FD1F9B',
      yAxisID: 'y-axis-2',
      pointRadius: 5,
    },
  ]
};

const options = {
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 24,
                    family : 'times new roman'
                }
            }
        }
    },
    scales: {
        x: {
           display: true,
           grid: {
               borderColor: '#f8f9ff', 
               display: false
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



const MultiAxisLine = () => (
  <div className="chart">
    <Line data={data} options={options} />
  </div>
);

export default MultiAxisLine;
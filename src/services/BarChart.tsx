import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC = () => {
  const data = {
    labels: [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
      '20', '21', '22', '23', '24', '25'
    ],
    datasets: [
      {
        label: 'Sales Data (in thousands)',
        data: [
          3, 10, 4, 3.5, 6, 6, 5.5, 5.7, 4, 1,
          6.5, 6.7, 6, 11, 9, 12, 16, 10.5, 8,
          4.5, 5.5, 10.5, 8, 6
        ],
        backgroundColor: 'rgba(114,148,255,255)',
        borderRadius: 10,
        barPercentage: 0.8,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}k`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'category', 
        labels: [
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
          '20', '21', '22', '23', '24', '25'
        ],
        title: {
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 24,
          callback: function (value: any, index: number) {
            return index % 2 === 0 ? value : ''; 
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            return `${value}k`; 
          },
          stepSize: 5, 
        },
        title: {
          display: false,
        },
      },
    },
    barThickness: 'flex', 
    maxBarThickness: 20,
    layout: {
      padding: 10,
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h3 className='ps-3 pt-3'>Activity</h3>
      <div style={{ height: '200px', width: '100%' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;

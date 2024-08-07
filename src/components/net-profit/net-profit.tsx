import React, { useEffect } from 'react';
import './net-profit.scss';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Profit() {
  return (
    <div className='profit px-3 pt-3 pb-2 d-flex flex-row justify-content-between'>
      <div className='d-flex flex-column'>
        <p>Net Profit</p>
        <span>$6759.25</span>
        <div className='d-flex' style={{ color: '#05af7e', marginTop: 'auto' }}>
          <i className="fa-solid fa-chevron-up me-1"></i>
          <p>3%</p>
        </div>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <div className="progress-ring">
          <svg className="progress-ring-svg">
            <circle className="progress-ring-circle" cx="50" cy="50" r="45" />
            <circle className="progress-ring-progress" cx="50" cy="50" r="45" />
          </svg>
          <div className="progress-ring-text" id="progressText">
            70%
            <h5>Goal</h5>
            <h5>Completed </h5>
          </div>
        </div>
        <h5>* The value here has been rounded off.</h5>
      </div>
    </div>
  );
}

export default Profit;

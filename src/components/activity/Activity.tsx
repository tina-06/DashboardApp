import React, { useEffect } from 'react';
import './Activity.scss';
import BarChart from '../../services/BarChart';

function Activity() {
  return (
    <div className='activity'>
      <BarChart/>
    </div>
  );
}

export default Activity;

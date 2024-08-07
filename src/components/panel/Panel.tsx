import React, { useEffect } from 'react';
import './Panel.scss';

function Panel() {
  return (
    <div className='panel'>
        <div className='my-2 py-1'> <i className="fa-solid fa-house"></i> </div>
        <div className='my-2 py-1'> <i className="fa-solid fa-chart-simple"></i> </div>
        <div className='my-2 py-1'> <i className="fa-regular fa-clipboard"></i> </div>
        <div className='my-2 py-1'> <i className="fa-solid fa-wallet"></i> </div>
        <div className='my-2 py-1'> <i className="fa-solid fa-bag-shopping"></i> </div>
    </div>
  );
}

export default Panel;

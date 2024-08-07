import React, { useEffect } from 'react';
import './HotList.scss';

function HotList() {
  return (
    <div className='hot-list py-3 px-4'>
      <div className='d-flex flex-row align-items-center w-100'>
        <div className='icons' style={{ backgroundColor: '#5f3237s' }}>
          <i style={{ color: '#c35728' }} className="fa-brands fa-creative-commons-sampling-plus fa-xl"></i>
        </div>
        <h4>Goals</h4>
        <div className='right-icon'>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className='d-flex flex-row align-items-center'>
        <div className='icons' style={{ backgroundColor: '#293368' }}>
          <i style={{ color: '#5c76ce' }} className="fa-solid fa-burger fa-xl"></i>
        </div>
        <h4>Popular Dishes</h4>
        <div className='right-icon'>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className='d-flex flex-row align-items-center'>
        <div className='icons' style={{ backgroundColor: '#5c76ce' }}>
          <i style={{ color: '#2292c4' }} className="fa-solid fa-bowl-food fa-xl"></i>
        </div>
        <h4>Menus</h4>
        <div className='right-icon'>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default HotList;

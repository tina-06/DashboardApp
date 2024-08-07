import React, { useEffect } from 'react';
import './Highlights.scss';
import user from '../../assets/images/user.png'

const data = [
  { text: 'Total Orders', num: '75', percent: 3 },
  { text: 'Total Delivered', num: '70', percent: -3 },
  { text: 'Total Cancelled', num: '05', percent: 3 },
  { text: 'Total Revenue', num: '$12k', percent: -3 }
]

function Highlights() {
  return (
    <div className='highlights d-flex'>
      {
        data.map(x =>
          <div className='highlight px-3 pt-3 pb-2'>
            <img src={user} height={40} width={40} className='mb-1' />
            <p>{x.text}</p>
            <div className='d-flex align-middle justify-content-between'>
              <span>{x.num}</span>
              <div className='d-flex'>
                {
                  x.percent >= 0 ?
                    <i className="fa-solid fa-chevron-up me-1" style={{ color: '#05af7e' }}></i>
                    : <i className="fa-solid fa-chevron-down me-1" style={{ color: 'red' }}></i>
                }
                <p>{x.percent}%</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Highlights;

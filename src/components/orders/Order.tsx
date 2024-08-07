import React, { useEffect } from 'react';
import './Order.scss';
import user from '../../assets/images/user.png'

const headers = [
  'Customer', 'Order No.', 'Amount', 'Status'
]

const data = [
  { name: 'Viplav Raja', img: user, orderNo: '12345678', amount: 200.000, status: 'Delivered' },
  { name: 'Viplav Raja', img: user, orderNo: '12345678', amount: 200.65, status: 'Pending' },
  { name: 'Viplav Raja', img: user, orderNo: '12345678', amount: 200.00, status: 'Delivered' },
  { name: 'Viplav Raja', img: user, orderNo: '12345678', amount: 200.65, status: 'Pending' },
  { name: 'Viplav Raja', img: user, orderNo: '12345678', amount: 200.65, status: 'Pending' },
]

function Order() {
  return (
    <div className='order py-3 px-4'>
      <h3>Recent Orders</h3>
      <table className="table">
        <thead>
          <tr> {headers.map((x) => <th scope="col">{x}</th>)} </tr>
        </thead>
        <tbody>
          {data.map((x) =>
            <tr>
              <td>
                <div className='content d-flex flex-row align-items-center'>
                  <img src={x.img} height={40} width={40} style={{ borderRadius: '50%' }} />
                  <span className='ms-2'>{x.name}</span>
                </div>
              </td>
              <td>
                <div className='content d-flex flex-row align-items-center'>
                  {x.orderNo}
                </div>
              </td>
              <td>
                <div className='content d-flex flex-row align-items-center'>
                  ${x.amount}
                </div>
              </td>
              <td>
                <div className='content d-flex flex-row align-items-center'>
                  <h5 className={x.status === 'Delivered' ? 'order-status-ok' : 'order-status-not-ok'}>{x.status}</h5>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-block d-sm-none grid-table">
        {data.map((x, index) => (
          <div className="grid-row" key={index}>
            <div className="grid-item">
              <img src={x.img} height={40} width={40} style={{ borderRadius: '50%' }} />
              <span className='ms-2'>{x.name}</span>
            </div>
            <div className="grid-item">Order No: {x.orderNo}</div>
            <div className="grid-item">Amount: ${x.amount}</div>
            <div className="grid-item">
              Status: <h5 className={x.status === 'Delivered' ? 'ms-3 order-status-ok' : 'ms-3 order-status-not-ok'}>{x.status}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;

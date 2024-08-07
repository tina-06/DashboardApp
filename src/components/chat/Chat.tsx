import React, { useEffect } from 'react';
import './Chat.scss';
import user from '../../assets/images/user.png'

const headers = [
  'Customer', 'Order No.', 'Amount', 'Status'
]

const data = [
  {
    name: 'Jenny Wilson', img: user, star: 4,
    message: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
  },
  {
    name: 'Dianne Russell', img: user, star: 5,
    message: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.'
  },
  {
    name: 'Devon Lane', img: user, star: 4,
    message: 'Normally wings are wings. but theirs are lean meaty and tender.'
  },
]

function Chat() {
  return (
    <div className='chat py-3 px-4'>
      <h3>Customer's Feedback</h3>
      {
        data.map((x) =>
          <div>
            <div className='d-flex flex-row'>
              <img src={x.img} height={40} width={40} />
              <h4 className='ms-3'>{x.name}</h4>
            </div>
            <div>
              {
                new Array(x.star).fill(0).map( y =>
                  <i style={{color: '#fbdd2b'}} className="fa-solid fa-star"></i>
                )
              }
              {
                new Array(5-x.star).fill(0).map( y =>
                  <i className="fa-solid fa-star"></i>
                )
              }
            </div>
            <p>{x.message}</p>
          </div>)
      }
    </div>
  );
}

export default Chat;

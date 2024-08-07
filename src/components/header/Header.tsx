import React, { useEffect } from 'react';
import './Header.scss';
import user from '../../assets/images/user.png'
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <div className='header d-flex p-3 justify-content-between'>
      <div className='d-flex'>
      <img className='header-logo' src={logo}/>
      <div className="header-input input-group">
        <span className="input-group-text" id="basic-addon1">
          <i className='fa-solid fa-search'></i>
        </span>
        <input type="text" className="form-control" placeholder="Search" aria-label="Searchs" aria-describedby="basic-addon1" />
      </div>
      </div>
      <div className='header-user-actions'>
        <div> <i className="fa-regular fa-envelope fa-lg"></i> </div>
        <div> <i className="fa-solid fa-gear fa-lg"></i> </div>
        <div> <i className="fa-regular fa-bell fa-lg"></i> </div>
        <div> <img src={user} width={40} height={40}/> </div>
      </div>
    </div>
  );
}

export default Header;

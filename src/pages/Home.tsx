import React, { useEffect } from 'react';
import logo from './logo.svg';
import './Home.scss';
import Header from '../components/header/Header';
import Panel from '../components/panel/Panel';
import Highlights from '../components/highlights/Highlights';
import Profit from '../components/net-profit/net-profit';
import Activity from '../components/activity/Activity';
import HotList from '../components/hot-list/HotList';
import Order from '../components/orders/Order';
import Chat from '../components/chat/Chat';
function Home() {
  return (
    <div className="home container-fluid">
      <Header></Header>
      <div className='d-flex flex-row'>
        <div className='panel-height'>
          <Panel />
        </div>
        <div className='home-content p-3'>
          <h2 className='ps-3 m-0'>Dashboard</h2>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-8 col-sm-12 col-12 column-gap'>
                <Highlights />
              </div>
              <div className='col-lg-4 col-sm-12 col-12 column-gap'>
                <Profit />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-8 col-sm-12 col-12 column-gap'>
                <Activity />
              </div>
              <div className='col-lg-4 col-sm-12 col-12 column-gap'>
                <HotList/>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-8 col-sm-12 col-12 column-gap'>
                <Order />
              </div>
              <div className='col-lg-4 col-sm-12 col-12 column-gap'>
                <Chat/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

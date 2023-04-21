import '../../StudentPages/StudentHome/studenthome.css';
import { Segmented } from 'antd';
import courses1 from '../../assets/images/courses1.jpg'
import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.jpg'
import sidebar from '../../assets/images/sidebar.png';
import Navbar from '../component/Navbar';


function myCourse() {

  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );
  return (
    <div>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="" className="brand">
          {/* <i className='bx bx-home' ></i> */}
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="side-menu top">
          <li>
            <a href="">
              <i className='bx bx-home' ></i>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="active">
            <a href="">
              <i className='bx bx-book-open'></i>
              <span className="text">My Courses</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bxs-calendar'></i>
              <span className="text">Schedule</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bx-credit-card' ></i>
              <span className="text">Payment</span>
            </a>
          </li>
          
        </ul>
        <div className='course__img'>
        {/* <img src ={sidebar} ></img> */}
        </div>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <Navbar/>
        {/* NAVBAR */}
        {/* MAIN */}

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Home Student</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="">My course</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default myCourse;
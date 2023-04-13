import '../../StudentPages/StudentHome/studenthome.css';
import { Segmented } from 'antd';
import courses1 from '../../assets/images/courses1.jpg'
import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.jpg'


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
        <a href="#" className="brand">
          {/* <i className='bx bx-home' ></i> */}
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className='bx bx-home' ></i>
              <span className="text">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-book-open'></i>
              <span className="text">My Courses</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-calendar'></i>
              <span className="text">Schedule</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-credit-card' ></i>
              <span className="text">Payment</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn"><i className="bx bx-search" /></button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" />
          <a href="#" className="notification">
            <i className="bx bxs-bell" />
            <span className="num">8</span>
          </a>
          <Dropdown overlay={menu} placement="bottomRight">
            <Avatar className="avatar" src={user} icon={<DownOutlined />} />
          </Dropdown>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Home Student</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">My course</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a className="active" href="#">Home</a>
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
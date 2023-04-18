import '../../TutorPages/Session/session.css'
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.jpg'
import { Link } from 'react-router-dom'
import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';





function sessionTutor() {
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );
  
  dayjs.extend(customParseFormat);
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
  return (
    <div>
      {/* SIDEBAR */}
      <section id="course__sidebar">
        <a href="" className="Course__brand">
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li>
            <a href="">
              <i className='bx bx-home' ></i>
              <span className="course__text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bx-book-open'></i>
              <span className="course__text">Courses</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class='bx bx-male-female'></i>
              <span className="course__text">My Student</span>
            </a>
          </li>
          <li className="active">
            <a href="">
              <i class='bx bxs-objects-horizontal-left'></i>
              <span className="course__text">Session</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bx-credit-card' ></i>
              <span className="course__text">Payment</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class='bx bxs-message-minus' ></i>
              <Link to="/feedback"><span className="course__text">Feedback</span></Link>
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
          <a href="#" className="course__nav-link">Session</a>
          <form action="#">
            <div className="course__form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="course__search-btn"><i className="bx bx-search" /></button>
            </div>
          </form>
          {/* <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="course__switch-mode" /> */}
          <a href="#" className="course__notification">
            <i className="bx bxs-bell" />
            <span className="course__num">8</span>
          </a>
          <Dropdown overlay={menu} placement="bottomRight">
            <Avatar className="avatar" src={user} icon={<DownOutlined />} />
          </Dropdown>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1>Session</h1>
              <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Session</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className='session__all'>

             <p>From</p>
             <Space direction="vertical" size={12}>
              <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
            </Space>
            <p>To</p>
            <Space direction="vertical" size={12}>
              <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
            </Space>
          </div>
         

          


        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default sessionTutor;

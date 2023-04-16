import '../../TutorPages/Courses/courses.css'
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.jpg'
import { Link } from 'react-router-dom'


import React from 'react';
import { Segmented } from 'antd';


function myCoursestt() {
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );
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
          <li className="active">
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
          <li>
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
          <a href="#" className="course__nav-link">Categories</a>
          <form action="#">
            <div className="course__form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="course__search-btn"><i className="bx bx-search" /></button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="course__switch-mode" />
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
              <h1>Tutor</h1>
              <ul className="course__breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="course-container">
            <div className="title-container">
              <h1 className='course__h1tittle'>Course</h1>
              <button className="add-course">Add Course</button>
            </div>
            <div className="course-list">
              <div className="course">Course 1</div>
              <div className="course">Course 2</div>
              <div className="course">Course 3</div>
              <div className="course">Course 4</div>
              <div className="course">Course 5</div>
              <div className="course">Course 6</div>
              <div className="course">Course 7</div>
              <div className="course">Course 8</div>
              <div className="course">Course 9</div>
            </div>
          </div>

          


        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default myCoursestt;
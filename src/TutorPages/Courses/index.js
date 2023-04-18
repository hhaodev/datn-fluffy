import '../../TutorPages/Courses/courses.css'
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.jpg'
import { Link } from 'react-router-dom'
import React from 'react';
import { Segmented } from 'antd';
import avt1 from '../../assets/images/avt1.jpg'
import avt2 from '../../assets/images/avt2.jpg'
import avt3 from '../../assets/images/avt3.jpg'
import avt4 from '../../assets/images/avt4.jpg'
import avt5 from '../../assets/images/avt5.jpg'
import avt6 from '../../assets/images/avt6.jpg'
import courses4 from '../../assets/images/courses4.jpg'
import courses2 from '../../assets/images/courses2.jpg'
import courses1 from '../../assets/images/courses1.jpg'
import courses3 from '../../assets/images/courses3.jpg'
import courses5 from '../../assets/images/courses5.jpg'
import courses6 from '../../assets/images/courses6.jpg'


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
          <a href="#" className="course__nav-link">Courses</a>
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
              <h1>Tutor</h1>
              <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Course</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="course-container">
            <div className="title-container">
              <h1 className='course__h1tittle'>Teaching Course</h1>
              <Link to="/addcourse"><button className="add-course">Add Course</button></Link>
            </div>
            {/* <div className='course__padding'> */}   
            <Segmented options={['Technology', 'Languages', 'Economics', 'Marketing', 'Design']} className='course__segmented' />
            <div className="student__box">

              <div className="box__student">
                <div className="student__thumb">
                  <img src={courses1} alt="" className="student__img2" />
                  <span className="student__spana">10 unit</span>
                </div>
                <div className="student__tutor">
                  <img src={avt1} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">Rebecca</h3>
                  </div>
                </div>
                <h3 className="student__title">complete HTML tutorial</h3>
                <p className='student__des'>Good friends, good books, and a sleepy conscience: this is the ideal life.</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">
                <div className="student__thumb">
                  <img src={courses2} alt="" className="student__img2" />
                  <span className="student__spana">10 unit</span>
                </div>
                <div className="student__tutor">
                  <img src={avt2} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">David</h3>
                  </div>
                </div>
                <h3 className="student__title">complete CSS tutorial</h3>
                <p className='student__des'>then you sure as hell don't deserve me at my best</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">
                <div className="student__thumb">
                  <img src={courses3} alt="" className="student__img2" />
                  <span className="student__spana">10 Unit</span>
                </div>
                <div className="student__tutor">
                  <img src={avt3} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">Christopher</h3>
                  </div>
                </div>

                <h3 className="student__title">complete JS tutorial</h3>
                <p className='student__des'>You've gotta dance like there's nobody watching</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">
                <div className="student__thumb">
                  <img src={courses4} alt="" className="student__img2" />
                  <span className="student__spana">10 Unit</span>
                </div>
                <div className="student__tutor">
                  <img src={avt4} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">John</h3>
                  </div>
                </div>

                <h3 className="student__title">complete Boostrap tutorial</h3>
                <p className='student__des'>You only live once, but if you do it right, once is enough.</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">
                <div className="student__thumb">
                  <img src={courses5} alt="" className="student__img2" />
                  <span className="student__spana">10 Unit</span>
                </div>
                <div className="student__tutor">
                  <img src={avt5} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">Kevin</h3>
                  </div>
                </div>

                <h3 className="student__title">complete JQuery tutorial</h3>
                <p className='student__des'>In three words I can sum up everything I’ve learned about life</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">

                <div className="student__thumb">
                  <img src={courses6} alt="" className="student__img2" />
                  <span className="student__spana">10 Unit</span>
                </div>
                <div className="student__tutor">
                  <img src={avt6} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">Mark</h3>
                  </div>
                </div>
                <h3 className="student__title">complete SASS tutorial</h3>
                <p className='student__des'>To live is the rarest thing in the world. Most people exist, that is all. </p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">

                  <div className="student__thumb">
                    <img src={courses6} alt="" className="student__img2" />
                    <span className="student__spana">10 Unit</span>
                  </div>
                  <div className="student__tutor">
                    <img src={avt6} alt="" className="student__img1" />
                    <div className="student__info">
                      <h3 className="student__h32">Mark</h3>
                    </div>
                  </div>
                  <h3 className="student__title">complete SASS tutorial</h3>
                  <p className='student__des'>To live is the rarest thing in the world. Most people exist, that is all. </p>
                  <a href="playlist.html" className="inline-btn">Learn More</a>
                  </div>

                  <div className="box__student">

                  <div className="student__thumb">
                    <img src={courses6} alt="" className="student__img2" />
                    <span className="student__spana">10 Unit</span>
                  </div>
                  <div className="student__tutor">
                    <img src={avt6} alt="" className="student__img1" />
                    <div className="student__info">
                      <h3 className="student__h32">Mark</h3>
                    </div>
                  </div>
                  <h3 className="student__title">complete SASS tutorial</h3>
                  <p className='student__des'>To live is the rarest thing in the world. Most people exist, that is all. </p>
                  <a href="playlist.html" className="inline-btn">Learn More</a>
                  </div>

            </div>
            {/* </div> */}
          </div>

          


        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default myCoursestt;

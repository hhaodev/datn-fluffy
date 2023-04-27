import '../../TutorPages/Courses/courses.css'
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
import Navbar from '../component/Header';
import { useState } from 'react';

import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

function MyCoursestt() {

  const [activeTab, setActiveTab] = useState('1');
  const { TabPane } = Tabs;
  // Tab
  // const { TabPane } = Tabs;
  // const [activeTabKey, setActiveTabKey] = useState('1');
  // const handleTabChange = (key) => {
  //   setActiveTabKey(key);
  // };
  // end tab


  return (
    <div>
      {/* SIDEBAR */}
      <section id="course__sidebar">
        <a href="" className="Course__brand">
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li>
            <Link to="/dashboardtt">
              <i className='bx bx-home' ></i>
              <span className="course__text">Dashboard</span>
            </Link>
          </li>
          <li className="active">
            <Link to="/mycoursett">
              <i className='bx bx-book-open'></i>
              <span className="course__text">Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/mystudent">
              <i class='bx bx-male-female'></i>
              <span className="course__text">My Student</span>
            </Link>
          </li>
          <li>
            <Link to="/sessiontt">
              <i class='bx bxs-objects-horizontal-left'></i>
              <span className="course__text">Session</span>
            </Link>
          </li>
          <li>
            <Link to="/paymenttutor">
              <i className='bx bx-credit-card' ></i>
              <span className="course__text">Payment</span>
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <i class='bx bxs-message-minus' ></i>
              <span className="course__text">Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/viewprofile">
              <i class='bx bxs-user-circle'></i>
              <span className="course__text">Profile</span>
            </Link>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="course__head-title">
            <div className="course__left">
              {/* <h1>Tutor</h1>
              <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Course</a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="course-container">
            <div className="title-container">
              <h1 className='course__h1tittle'>Teaching Course</h1>
              <Link to="/addcourse"><button className="add-course"><i class='bx bx-plus add__plus'></i>Add Course</button></Link>
            </div>
            {/* <div className='course__padding'> */}
            <Tabs activeKey={activeTab} onChange={key => setActiveTab(key)}>
              <TabPane tab="Technology" key="1">
                <p>Nội dung khoá học về Technology</p>
              </TabPane>
              <TabPane tab="Languages" key="2">
                <p>Nội dung khoá học về Languages</p>
              </TabPane>
              <TabPane tab="Economics" key="3">
                <p>Nội dung khoá học về Economics</p>
              </TabPane>
              <TabPane tab="Marketing" key="4">
                <p>Nội dung khoá học về Marketing</p>
              </TabPane>
              <TabPane tab="Design" key="5">
                <p>Nội dung khoá học về Design</p>
              </TabPane>
            </Tabs>
            {/* <Tabs activeKey={activeTabKey} onChange={handleTabChange}>
            
              <TabPane key="1" tab="Technology">
                <div className="student__box">
                  <div className="box__student">
                    <div className="student__thumb">
                      <img src={courses1} alt="" className="student__img2" />
                    </div>
                    <div className="student__tutor">
                      <img src={avt1} alt="" className="student__img1" />
                      <div className="student__info">
                        <h3 className="student__h32">Rebecca</h3>
                      </div>
                    </div>
                    <h3 className="student__title">Learn Ethical Hacking From Scratch</h3>
                    <p className='student__des'>Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts.</p>
                    <a href="playlist.html" className="inline-btn__course"><i class='bx bxs-chevrons-right'></i>Learn More</a>
                  </div>

                  <div className="box__student">
                    <div className="student__thumb">
                      <img src={courses2} alt="" className="student__img2" />
                    </div>
                    <div className="student__tutor">
                      <img src={avt2} alt="" className="student__img1" />
                      <div className="student__info">
                        <h3 className="student__h32">David</h3>
                      </div>
                    </div>
                    <h3 className="student__title">complete CSS tutorial</h3>
                    <p className='student__des'>then you sure as hell don't deserve me at my best</p>
                    <a href="playlist.html" className="inline-btn__course"><i class='bx bxs-chevrons-right'></i>Learn More</a>
                  </div>

                  <div className="box__student">
                    <div className="student__thumb">
                      <img src={courses3} alt="" className="student__img2" />
                    </div>
                    <div className="student__tutor">
                      <img src={avt3} alt="" className="student__img1" />
                      <div className="student__info">
                        <h3 className="student__h32">Christopher</h3>
                      </div>
                    </div>

                    <h3 className="student__title">complete JS tutorial</h3>
                    <p className='student__des'>You've gotta dance like there's nobody watching</p>
                    <a href="playlist.html" className="inline-btn__course"><i class='bx bxs-chevrons-right'></i>Learn More</a>
                  </div>

                  <div className="box__student">
                    <div className="student__thumb">
                      <img src={courses4} alt="" className="student__img2" />
                    </div>
                    <div className="student__tutor">
                      <img src={avt4} alt="" className="student__img1" />
                      <div className="student__info">
                        <h3 className="student__h32">John</h3>
                      </div>
                    </div>

                    <h3 className="student__title">complete Boostrap tutorial</h3>
                    <p className='student__des'>You only live once, but if you do it right, once is enough.</p>
                    <a href="playlist.html" className="inline-btn__course"><i class='bx bxs-chevrons-right'></i>Learn More</a>
                  </div>

                  <div className="box__student">
                    <div className="student__thumb">
                      <img src={courses5} alt="" className="student__img2" />
                    </div>
                    <div className="student__tutor">
                      <img src={avt5} alt="" className="student__img1" />
                      <div className="student__info">
                        <h3 className="student__h32">Kevin</h3>
                      </div>
                    </div>

                    <h3 className="student__title">complete JQuery tutorial</h3>
                    <p className='student__des'>In three words I can sum up everything I’ve learned about life</p>
                    <a href="playlist.html" className="inline-btn__course"><i class='bx bxs-chevrons-right'></i>Learn More</a>
                  </div>

                  <div className="box__student">

                    <div className="student__thumb">
                      <img src={courses6} alt="" className="student__img2" />
                    </div>
                    <div className="student__tutor">
                      <img src={avt6} alt="" className="student__img1" />
                      <div className="student__info">
                        <h3 className="student__h32">Mark</h3>
                      </div>
                    </div>
                    <h3 className="student__title">complete SASS tutorial</h3>
                    <p className='student__des'>To live is the rarest thing in the world. Most people exist, that is all. </p>
                    <a href="playlist.html" className="inline-btn__course"><i class='bx bxs-chevrons-right'></i>Learn More</a>
                  </div>

                  <div className="box__student">

                    <div className="student__thumb">
                      <img src={courses6} alt="" className="student__img2" />
                    </div>
                    <div className="student__tutor">
                      <img src={avt6} alt="" className="student__img1" />
                      <div className="student__info">
                        <h3 className="student__h32">Mark</h3>
                      </div>
                    </div>
                    <h3 className="student__title">complete SASS tutorial</h3>
                    <p className='student__des'>To live is the rarest thing in the world. Most people exist, that is all. </p>
                    <a href="playlist.html" className="inline-btn__course"><i class='bx bxs-chevrons-right'></i>Learn More</a>
                  </div>

                  <div className="box__student">

                    <div className="student__thumb">
                      <img src={courses6} alt="" className="student__img2" />
                    </div>
                    <div className="student__tutor">
                      <img src={avt6} alt="" className="student__img1" />
                      <div className="student__info">
                        <h3 className="student__h32">Mark</h3>
                      </div>
                    </div>
                    <h3 className="student__title">complete SASS tutorial</h3>
                    <p className='student__des'>To live is the rarest thing in the world. Most people exist, that is all. </p>
                    <a href="playlist.html" className="inline-btn__course"><i class='bx bxs-chevrons-right'></i>Learn More</a>
                  </div>

                </div>
              </TabPane>
              <TabPane key="2" tab="Economics">
                <p>Here are some programming courses:</p>
              </TabPane>
              <TabPane key="3" tab="Marketing">
                <p>Here are some programming courses:</p>
              </TabPane>
              <TabPane key="4" tab="Design">
                <p>Here are some programming courses:</p>
              </TabPane>
              <TabPane key="5" tab="Languages">
                <p>Here are some programming courses:</p>
              </TabPane>
            </Tabs> */}
            {/* <Segmented options={['Technology', 'Languages', 'Economics', 'Marketing', 'Design']} className='course__segmented' /> */}
            {/* </div> */}
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default MyCoursestt;

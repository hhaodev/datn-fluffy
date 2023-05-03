import '../../StudentPages/StudentHome/studenthome.css';
import avt1 from '../../assets/images/avt1.jpg'
import avt2 from '../../assets/images/avt2.jpg'
import avt3 from '../../assets/images/avt3.jpg'
import avt4 from '../../assets/images/avt4.jpg'
import avt5 from '../../assets/images/avt5.jpg'
import avt6 from '../../assets/images/avt6.jpg'
import course1 from '../../assets/images/course1.jpg'
import course2 from '../../assets/images/course2.jpg'
import course3 from '../../assets/images/course3.jpg'
import course4 from '../../assets/images/course4.jpg'
import course5 from '../../assets/images/course5.jpg'
import course6 from '../../assets/images/course6.jpg'
import React from 'react';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom'
import sidebarlogo from '../../assets/images/logo-removebg-preview.png'
import { Tabs } from 'antd'
import { useState } from 'react';

function StdHome() {
  const { TabPane } = Tabs;
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div>
      {/* SIDEBAR */}
      <section id="course__sidebar">
        <a href="" className="Course__brand">
          <img src={sidebarlogo} className='student__imglogo'></img>
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li className="active">
            <Link to="/studenthome">
              <i className='bx bx-home' ></i>
              <span className="course__text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/studentmycourse">
              <i className='bx bx-book-open'></i>
              <span className="course__text">My Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/studentschedule">
              <i class='bx bx-calendar' ></i>
              <span className="course__text">Schedule</span>
            </Link>
          </li>
          <li>
            <Link to="/studentpayment">
              <i className='bx bx-credit-card'></i>
              <span className="course__text">Payment</span>
            </Link>
          </li>
          <li>
            <Link to="/studentprofile">
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
          <div className="head-title">
            {/* <div className="left">
              <h1>Home Student</h1>
            </div> */}
          </div>
          {/* course */}
          <div className="My__courses">
            <div className='home-our'>
            <h1 className="student__heading11"><i class='bx bxs-bookmark-alt-plus'></i>our courses</h1>
            </div>
            {/* <Segmented options={['Technology', 'Languages', 'Economics', 'Marketing', 'Design']} className='student__segmented' /> */}
            <Tabs activeKey={activeTab} onChange={key => setActiveTab(key)}>
              <TabPane tab="Technology" key="1">
              <div className="student__box">
              <div className="box__student">
                <div className="student__thumb">
                  <img src={course1} alt="" className="student__img2" />
                </div>
                <div className="student__tutor">
                  <img src={avt1} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">Rebecca</h3>
                  </div>
                </div>
                <h3 className="student__title">Learn Ethical Hacking From Scratch Here</h3>
                <p className='student__des'>Become an ethical hacker that can hack computer systems like black hat hackers.</p>
                <div className='course__buttonlink'><Link to='/viewstudent' className="inline-btn"><i class='bx bx-chevrons-right'></i>Learn More</Link></div>
              </div>

              <div className="box__student">
                <div className="student__thumb">
                  <img src={course2} alt="" className="student__img2" />
                </div>
                <div className="student__tutor">
                  <img src={avt2} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">David</h3>
                  </div>
                </div>
                <h3 className="student__title">GraphQL with React: The Complete Developers Guide</h3>
                <p className='student__des'>Learn and master GraphQL by building real web apps with React and Node</p>
                <div className='course__buttonlink'><Link to='/viewstudent' className="inline-btn"><i class='bx bx-chevrons-right'></i>Learn More</Link></div>
              </div>

              <div className="box__student">
                <div className="student__thumb">
                  <img src={course3} alt="" className="student__img2" />
                </div>
                <div className="student__tutor">
                  <img src={avt3} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">Christopher</h3>
                  </div>
                </div>

                <h3 className="student__title">Programming for Networks, Systems and Security engineer</h3>
                <p className='student__des'>Free up time & grow your business with marketing automation: social media marketing !</p>
                <div className='course__buttonlink'><Link to='/viewstudent' className="inline-btn"><i class='bx bx-chevrons-right'></i>Learn More</Link></div>
              </div>

              <div className="box__student">
                <div className="student__thumb">
                  <img src={course4} alt="" className="student__img2" />
                </div>
                <div className="student__tutor">
                  <img src={avt4} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">John</h3>
                  </div>
                </div>

                <h3 className="student__title">English for Beginners: Intensive Spoken English Course</h3>
                <p className='student__des'>English speaking course. 77 Hours of English language speaking, English listening practice.</p>
                <div className='course__buttonlink'><Link to='/viewstudent' className="inline-btn"><i class='bx bx-chevrons-right'></i>Learn More</Link></div>
              </div>

              <div className="box__student">
                <div className="student__thumb">
                  <img src={course5} alt="" className="student__img2" />
                </div>
                <div className="student__tutor">
                  <img src={avt5} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">Kevin</h3>
                  </div>
                </div>

                <h3 className="student__title">Best Way to Learn German Language: Full Beginner</h3>
                <p className='student__des'>Learn German language with fun bite-size lessons for beginners. Start speaking German.</p>
                <div className='course__buttonlink'><Link to='/viewstudent' className="inline-btn"><i class='bx bx-chevrons-right'></i>Learn More</Link></div>
              </div>

              <div className="box__student">

                <div className="student__thumb">
                  <img src={course6} alt="" className="student__img2" />
                </div>
                <div className="student__tutor">
                  <img src={avt6} alt="" className="student__img1" />
                  <div className="student__info">
                    <h3 className="student__h32">Mark</h3>
                  </div>
                </div>
                <h3 className="student__title">Web Design for Beginners: Real World Coding in HTML & CSS</h3>
                <p className='student__des'>Launch a career as a web designer by learning HTML5, CSS3, responsive design, Sass and more!</p>
                <div className='course__buttonlink'><Link to='/viewstudent' className="inline-btn"><i class='bx bx-chevrons-right'></i>Learn More</Link></div>
              </div>

            </div>
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
            <div className="more-btn">
              <a href="courses.html" className="button-viewall">view all courses</a>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default StdHome;
import '../StudentMyCourse/studentmycourse.css'
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Slider } from 'antd';
import sidebarlogo from '../../assets/images/logo-removebg-preview.png'
import course1 from '../../assets/images/course1.jpg'
import course2 from '../../assets/images/course2.jpg'
import course3 from '../../assets/images/course3.jpg'
import course4 from '../../assets/images/course4.jpg'
import course5 from '../../assets/images/course5.jpg'
import course6 from '../../assets/images/course6.jpg'
import Navbar from '../component/Navbar';


function StudentMyCourse() {


  // avt
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout" onClick={() => handleLogout()}>Logout</Menu.Item>
    </Menu>
  );
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("refreshToken")
    navigate('/')
    window.location.reload(false);

  };
  //  end avt

  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  // slider 
  const formatter = (value) => `${value}%`;
  // end slider
  return (
    <>
      {/* SIDEBAR */}
      <section id="course__sidebar">
        <a href="" className="Course__brand">
          <img src={sidebarlogo} className='student__imglogo'></img>
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li>
            <Link to="/studenthome">
              <i className='bx bx-home' ></i>
              <span className="course__text">Home</span>
            </Link>
          </li>
          <li className="active">
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
      <section id="content">
        {/* NAVBAR */}
        <Navbar/>
        {/* NAVBAR */}
        {/* MAIN */}
        <main className='course__mainall'>
          <div className="course__head-title">
            <div className="course__left">
              <h2 className='course__ch1'><i class='bx bxs-color'></i>Course in Progress</h2>
              <div className='course__boxall'>
                <div className='course__box1'>
                  <div className='course__pad1'>
                   <div><img src={course1} className='course__img1'></img></div>
                  <div className='course__cinema'>
                    <h3 className='course__h3learn'>Learn Ethical Hacking From Scratch Here</h3>
                    <p><span className='course__span2'>5</span> of 19 course progress</p>
                  </div>
                  </div>
                  <div className='course__tit'>
                   <p className='course__prog'>Progress</p>
                   <p>15%</p>
                  </div>
                  <div className='course__rourse'>
                  <Slider
                      tooltip={{
                        formatter,
                      }}
                    />
                  </div>
                </div>

                <div className='course__box1'>
                <div className='course__pad1'>
                   <div><img src={course2} className='course__img1'></img></div>
                  <div className='course__cinema'>
                    <h3 className='course__h3learn'>Learn Ethical Hacking From Scratch Here</h3>
                    <p><span className='course__span2'>10</span> of 20 course progress</p>
                  </div>
                  </div>
                  <div className='course__tit'>
                   <p className='course__prog'>Progress</p>
                   <p>24%</p>
                  </div>
                  <div className='course__rourse'>
                  <Slider
                      tooltip={{
                        formatter,
                      }}
                    />
                  </div>
                </div>

                <div className='course__box1'>
                <div className='course__pad1'>
                   <div><img src={course3} className='course__img1'></img></div>
                  <div className='course__cinema'>
                    <h3 className='course__h3learn'>Learn Ethical Hacking From Scratch Here</h3>
                    <p><span className='course__span2'>16</span> of 36 course progress</p>
                  </div>
                  </div>
                  <div className='course__tit'>
                   <p className='course__prog'>Progress</p>
                   <p>30%</p>
                  </div>
                  <div className='course__rourse'>
                  <Slider
                      tooltip={{
                        formatter,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='course__right'>
            <h2 className='course__ch1'><i className='bx bxs-caret-up-square' ></i>Up Coming Class</h2>
            <div className='box__all2'>
              <div className='course__box2'>
                <img src={course4} className='course__2img'></img>
                 <h3>English for Beginners: Intensive Spoken English Course</h3>
                 <p>Today 12:00 PM - 15:00 PM</p>
              </div>

              <div className='course__box2'>
                <img src={course5} className='course__2img'></img>
                 <h3>Best Way to Learn German Language: Full Beginner</h3>
                 <p>Today 15:00 PM - 17:00 PM</p>
              </div>

              <div className='course__box2'>
                <img src={course6} className='course__2img'></img>
                 <h3>Web Design for Beginners: Real World Coding in HTML & CSS</h3>
                 <p>Today 12:00 PM - 17:00 PM</p>
              </div>
            </div>
            </div>
          </div>


        </main>
        {/* MAIN */}
      </section >
      {/* CONTENT */}

    </>

  );
}

export default StudentMyCourse;
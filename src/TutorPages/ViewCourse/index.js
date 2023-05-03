import '../ViewCourse/viewcourse.css'
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import React from 'react'
import sidebarlogo from '../../assets/images/logo-removebg-preview.png'
import course1 from '../../assets/images/course1.jpg'
import avt1 from '../../assets/images/avt1.jpg'
import { Rate, Button } from 'antd';
import { Collapse } from 'antd';


function ViewCourse() {
    // content view
    const { Panel } = Collapse;
  
    // end content view

     // end content view
     const onChange = (key) => {
        console.log(key);
      };
    return (
        <>
            {/* SIDEBAR */}
            <section id="course__sidebar">
                <Link to="" className="Course__brand">
                    <img src={sidebarlogo} className='student__imglogo'></img>
                    <span className="student__logos">Fluffy</span>
                </Link>
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
                            <i className='bx bx-male-female'></i>
                            <span className="course__text">My Student</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sessiontt">
                            <i className='bx bxs-objects-horizontal-left'></i>
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
                        <Link to="" >
                            <i className='bx bxs-message-minus' ></i>
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

            {/* SIDEBAR */}

            <section id="content">
                {/* NAVBAR */}
                <Navbar />
                {/* NAVBAR */}
                <main>
                    <div className="feedback__head-title">
                        <div className="feedback__left">
                            <h1 className='view__h1view'><i className='bx bx-dock-right'></i>View Course</h1>
                            <Button type='primary' className='view__but1'><i class='bx bxs-up-arrow-alt'></i>Publish Course</Button>
                        </div>
                        {/* <h1 className='feedback__h1'>FeedBack</h1> */}
                    </div>

                    <div className='bg__view'>
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
                <div className='view__h3rate'>
                <h3 className="student__title1">Learn Ethical Hacking From Scratch Here</h3>
                <p className='rate__view'><Rate disabled defaultValue={4} className='viewer__rate'/></p>
                </div>
                <p className='student__des'>Become an ethical hacker that can hack computer systems like black hat hackers.</p>
                <h2 className='view__cost'><i class='bx bx-dollar' ></i>60</h2>
                <div className='view__buttonall'>
                <div className='course__buttonlink'><Link to='/viewcourse' className="inline-btn"><i class='bx bxs-edit' ></i>Edit</Link></div>
                <div className='course__buttonlink'><Link to='/viewcourse' className="inline-btn view__but242"><i class='bx bx-x' ></i>Delete</Link></div>
                </div>
              </div>
          </div> 

          <div className='view__content'>
            <div className='view__but212'>
            <h2 className='view__h2r'><i class='bx bxs-book-content' ></i>Content Course</h2>
            <Button type='primary' className='view__but1'><i class='bx bxs-edit' ></i>Edit</Button>
            <Button type='primary' className='view__but242'><i class='bx bx-x' ></i>Delete</Button>
            </div>
          <Collapse defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="Introduction" key="1">
                <p className='introduction__view'><i className='bx bxs-tv' ></i>In this lecture you will learn what is meant by a hacker<span className='span__view'>09:28</span></p>
            </Panel>
            <Panel header="Linux Basic" key="2">
                <p><i className='bx bxs-tv' ></i>Basic Overview of Kali Linux<span className='span__view'>04:56</span></p>
                <p><i className='bx bxs-tv' ></i>The Terminal & Linux Commands<span className='span__view'>02:04</span></p>
            </Panel>
            <Panel header="Network hacking" key="3">
                <p><i className='bx bxs-tv' ></i>Networks Basics<span className='span__view'>09:28</span></p>
                <p><i className='bx bxs-tv' ></i>Connecting a Wireless Adapter To Kali<span className='span__view'>02:06</span></p>
                <p><i className='bx bxs-tv' ></i>What is MAC Address & How To Change It<span className='span__view'>06:02</span></p>
                <p><i className='bx bxs-tv' ></i>Wireless Modes (Managed & Monitor)<span className='span__view'>01:38</span></p>
            </Panel>
            <Panel header="Network hacking: Pre-Conecting attack" key="4">
                <p><i className='bx bxs-tv' ></i>Packet Sniffing Basics<span className='span__view'>09:28</span></p>
                <p><i className='bx bxs-tv' ></i>WiFi Bands - 2.4Ghz & 5Ghz Frequencies<span className='span__view'>02:52</span></p>
                <p><i className='bx bxs-tv' ></i>Targeted Packet Sniffing<span className='span__view'>09:28</span></p>
                <p><i className='bx bxs-tv' ></i>Theory Behind Cracking WEP Encryption<span className='span__view'>07:12</span></p>
            </Panel>
            <Panel header="Network Hacking - Gaining Access - WPA / WPA2 Cracking" key="5">
                <p><i className='bx bxs-tv' ></i>Introduction to WPA and WPA2 Cracking<span className='span__view'>02:26</span></p>
                <p><i className='bx bxs-tv' ></i>Hacking WPA & WPA2 Without a Wordlist<span className='span__view'>06:16</span></p>
                <p><i className='bx bxs-tv' ></i>Capturing The Handshake<span className='span__view'>09:28</span></p>
                <p><i className='bx bxs-tv' ></i>Creating a Wordlist<span className='span__view'>09:28</span></p>
                <p><i className='bx bxs-tv' ></i>Cracking WPA & WPA2 Using a Wordlist Attack<span className='span__view'>02:19</span></p>
            </Panel>
            <Panel header="Network Hacking - Gaining Access - Security" key="6">
                <p><i className='bx bxs-tv' ></i>Securing Your Network From Hackers<span className='span__view'>06:12</span></p>
                <p><i className='bx bxs-tv' ></i>Configuring Wireless Settings for Maximum Security<span className='span__view'>02:19</span></p>
            </Panel>
            </Collapse>
            </div>
                </main>
            </section>

        </>
    );
}

export default ViewCourse;
import '../Viewcourse/viewcourses.css'
import React from "react";
import { Button, Collapse } from "antd";
import { Rate } from 'antd';
import courses1 from '../../assets/images/courses2.jpg'
import avt1 from '../../assets/images/avtfeedback1.png'

function Viewcourse() {
    const { Panel } = Collapse;
    const onChange = (key) => {
    };
    return ( 
        <>
             <section id="content">
        <main>
          <div className="feedback__head-title">
            <div className="feedback__left led1">
              <h1>View Course</h1>
            </div>
            {/* <h1 className='feedback__h1'>FeedBack</h1> */}
          </div>

          <div className="all__course1">
          <div className="course_box1">
      <div className="course_thumnail1">
        <img
          src={courses1}
          alt=""
          className="course_image1"
        />
      </div>
      <div className="course_box1_content1">
        <h3 className="course_box1_content_title1">Metaverse For Beginners</h3>
        <Rate disabled defaultValue={5} />
        <div className="course_author1">
          <div className="course_author_image1">
            <img
              src={avt1}
              alt=""
            />
          </div>
          <p className="course_author1_info1">Christopher</p>
        </div>

        <div className="course_box1_content_des1">
          <p>
            an element that lets the user navigate to another view by tapping
            it
          </p>
        </div>
        <h3 className="dollar-h3">72<i className='bx bx-dollar'></i></h3>
        <div className="all__button2">
        <Button type="default" className="inline-btn1">Start Trial Lesson</Button>
        <Button type="default" className="inline-btn1">Buy now</Button>
        </div>
      </div>
          </div>
          </div>

          <div className='view__content'>
                        <div className='view__but212'>
                            <h1 className='view__h2r'>Content Course</h1>
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

export default Viewcourse;
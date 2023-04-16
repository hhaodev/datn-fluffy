import '../../TutorPages/Feedback/feedback.css'
import React, { useState } from "react";
import { Card, Rate, Button, Modal } from "antd";
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.jpg'
import { Link } from 'react-router-dom'
import avtfeedback from '../../assets/images/avtfeedback1.png'

const { confirm } = Modal;

const CourseBox = () => {
  const [visible, setVisible] = useState(false);

  const showConfirm = () => {
    confirm({
      title: "Are you sure you want to close the form?",
      onOk() {
        setVisible(false);
      },
    });
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <>
      {/* SIDEBAR */}
      <section id="course__sidebar">
        <a href="" className="Course__brand">
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li>
            <a href="">
              <i className='bx bx-home' ></i>
              <Link to="/dashboardtt"><span className="course__text">Dashboard</span></Link>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bx-book-open'></i>
              <Link to="/mycoursett"><span className="course__text">Courses</span></Link>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bx-male-female'></i>
              <Link to="/mystudent"><span className="course__text">My Student</span></Link>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bxs-objects-horizontal-left'></i>
              <Link to="/sessiontt"><span className="course__text">Session</span></Link>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bx-credit-card' ></i>
              <Link to="/paymenttutor"><span className="course__text">Payment</span></Link>
            </a>
          </li>
          <li className="active">
            <a href="">
              <i className='bx bxs-message-minus' ></i>
              <Link to="/feedback"><span className="course__text">Feedback</span></Link>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}

      {/* SIDEBAR */}

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
        <div className="feedback__head-title">
          <div className="feedback__left">
          <h1>Tutor</h1>
          <ul className="feedback__breadcrumb">
            <li>
              <a href="">Dashboard</a>
            </li>
            <li><i className="bx bx-chevron-right" /></li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
          {/* <h1 className='feedback__h1'>FeedBack</h1> */}

          <div className='feedback__box'>

            <div className='feedback__box1'>
              <div className="course-box" onClick={() => setVisible(true)}>
                <div>
                  <img src={avtfeedback} alt="Avatar" className='feedback__boxavt' />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class='bx bxs-star star__form'></i>
                  <p className='feedback__star'>4.5</p>
                </div>
              </div>
              <Modal
                visible={visible}
                onCancel={showConfirm}
                footer={[
                  <Button key="cancel" onClick={showConfirm}>
                    Close
                  </Button>,
                ]}
              >
                <div className="course-box-modal">
                  <div className='feedback__boxall'>
                    <div className="course-box-avatar">
                      <img src={avtfeedback} alt="Avatar" className='feedback__formavt' />
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">Reactjs for Developer</p>
                    </div>
                    <div className="feedback__rating">
                      <i class='bx bxs-star star__form'></i>
                      <p className='feedback__star'>4.5</p>
                    </div>
                  </div>
                  <p className="course-box-description">
                    Greattttt!!!!!, The teacher is so best, hehe
                  </p>

                </div>
              </Modal>
            </div>

            <div className='feedback__box1'>
              <div className="course-box" onClick={() => setVisible(true)}>
                <div>
                  <img src={avtfeedback} alt="Avatar" className='feedback__boxavt' />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class='bx bxs-star star__form'></i>
                  <p className='feedback__star'>4.5</p>
                </div>
              </div>
              <Modal
                visible={visible}
                onCancel={showConfirm}
                footer={[
                  <Button key="cancel" onClick={showConfirm}>
                    Close
                  </Button>,
                ]}
              >
                <div className="course-box-modal">
                  <div className='feedback__boxall'>
                    <div className="course-box-avatar">
                      <img src={avtfeedback} alt="Avatar" className='feedback__formavt' />
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">Reactjs for Developer</p>
                    </div>
                    <div className="feedback__rating">
                      <i class='bx bxs-star star__form'></i>
                      <p className='feedback__star'>4.5</p>
                    </div>
                  </div>
                  <p className="course-box-description">
                    Greattttt!!!!!, The teacher is so best, hehe
                  </p>

                </div>
              </Modal>
            </div>

            <div className='feedback__box1'>
              <div className="course-box" onClick={() => setVisible(true)}>
                <div>
                  <img src={avtfeedback} alt="Avatar" className='feedback__boxavt' />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class='bx bxs-star star__form'></i>
                  <p className='feedback__star'>4.5</p>
                </div>
              </div>
              <Modal
                visible={visible}
                onCancel={showConfirm}
                footer={[
                  <Button key="cancel" onClick={showConfirm}>
                    Close
                  </Button>,
                ]}
              >
                <div className="course-box-modal">
                  <div className='feedback__boxall'>
                    <div className="course-box-avatar">
                      <img src={avtfeedback} alt="Avatar" className='feedback__formavt' />
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">Reactjs for Developer</p>
                    </div>
                    <div className="feedback__rating">
                      <i class='bx bxs-star star__form'></i>
                      <p className='feedback__star'>4.5</p>
                    </div>
                  </div>
                  <p className="course-box-description">
                    Greattttt!!!!!, The teacher is so best, hehe
                  </p>

                </div>
              </Modal>
            </div>

            <div className='feedback__box1'>
              <div className="course-box" onClick={() => setVisible(true)}>
                <div>
                  <img src={avtfeedback} alt="Avatar" className='feedback__boxavt' />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class='bx bxs-star star__form'></i>
                  <p className='feedback__star'>4.5</p>
                </div>
              </div>
              <Modal
                visible={visible}
                onCancel={showConfirm}
                footer={[
                  <Button key="cancel" onClick={showConfirm}>
                    Close
                  </Button>,
                ]}
              >
                <div className="course-box-modal">
                  <div className='feedback__boxall'>
                    <div className="course-box-avatar">
                      <img src={avtfeedback} alt="Avatar" className='feedback__formavt' />
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">Reactjs for Developer</p>
                    </div>
                    <div className="feedback__rating">
                      <i class='bx bxs-star star__form'></i>
                      <p className='feedback__star'>4.5</p>
                    </div>
                  </div>
                  <p className="course-box-description">
                    Greattttt!!!!!, The teacher is so best, hehe
                  </p>

                </div>
              </Modal>
            </div>

            <div className='feedback__box1'>
              <div className="course-box" onClick={() => setVisible(true)}>
                <div>
                  <img src={avtfeedback} alt="Avatar" className='feedback__boxavt' />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class='bx bxs-star star__form'></i>
                  <p className='feedback__star'>4.5</p>
                </div>
              </div>
              <Modal
                visible={visible}
                onCancel={showConfirm}
                footer={[
                  <Button key="cancel" onClick={showConfirm}>
                    Close
                  </Button>,
                ]}
              >
                <div className="course-box-modal">
                  <div className='feedback__boxall'>
                    <div className="course-box-avatar">
                      <img src={avtfeedback} alt="Avatar" className='feedback__formavt' />
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">Reactjs for Developer</p>
                    </div>
                    <div className="feedback__rating">
                      <i class='bx bxs-star star__form'></i>
                      <p className='feedback__star'>4.5</p>
                    </div>
                  </div>
                  <p className="course-box-description">
                    Greattttt!!!!!, The teacher is so best, hehe
                  </p>

                </div>
              </Modal>
            </div>

            <div className='feedback__box1'>
              <div className="course-box" onClick={() => setVisible(true)}>
                <div>
                  <img src={avtfeedback} alt="Avatar" className='feedback__boxavt' />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class='bx bxs-star star__form'></i>
                  <p className='feedback__star'>4.5</p>
                </div>
              </div>
              <Modal
                visible={visible}
                onCancel={showConfirm}
                footer={[
                  <Button key="cancel" onClick={showConfirm}>
                    Close
                  </Button>,
                ]}
              >
                <div className="course-box-modal">
                  <div className='feedback__boxall'>
                    <div className="course-box-avatar">
                      <img src={avtfeedback} alt="Avatar" className='feedback__formavt' />
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">Reactjs for Developer</p>
                    </div>
                    <div className="feedback__rating">
                      <i class='bx bxs-star star__form'></i>
                      <p className='feedback__star'>4.5</p>
                    </div>
                  </div>
                  <p className="course-box-description">
                    Greattttt!!!!!, The teacher is so best, hehe
                  </p>

                </div>
              </Modal>
            </div>

            <div className='feedback__box1'>
              <div className="course-box" onClick={() => setVisible(true)}>
                <div>
                  <img src={avtfeedback} alt="Avatar" className='feedback__boxavt' />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class='bx bxs-star star__form'></i>
                  <p className='feedback__star'>4.5</p>
                </div>
              </div>
              <Modal
                visible={visible}
                onCancel={showConfirm}
                footer={[
                  <Button key="cancel" onClick={showConfirm}>
                    Close
                  </Button>,
                ]}
              >
                <div className="course-box-modal">
                  <div className='feedback__boxall'>
                    <div className="course-box-avatar">
                      <img src={avtfeedback} alt="Avatar" className='feedback__formavt' />
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">Reactjs for Developer</p>
                    </div>
                    <div className="feedback__rating">
                      <i class='bx bxs-star star__form'></i>
                      <p className='feedback__star'>4.5</p>
                    </div>
                  </div>
                  <p className="course-box-description">
                    Greattttt!!!!!, The teacher is so best, hehe
                  </p>

                </div>
              </Modal>
            </div>

            <div className='feedback__box1'>
              <div className="course-box" onClick={() => setVisible(true)}>
                <div>
                  <img src={avtfeedback} alt="Avatar" className='feedback__boxavt' />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class='bx bxs-star star__form'></i>
                  <p className='feedback__star'>4.5</p>
                </div>
              </div>
              <Modal
                visible={visible}
                onCancel={showConfirm}
                footer={[
                  <Button key="cancel" onClick={showConfirm}>
                    Close
                  </Button>,
                ]}
              >
                <div className="course-box-modal">
                  <div className='feedback__boxall'>
                    <div className="course-box-avatar">
                      <img src={avtfeedback} alt="Avatar" className='feedback__formavt' />
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">Reactjs for Developer</p>
                    </div>
                    <div className="feedback__rating">
                      <i class='bx bxs-star star__form'></i>
                      <p className='feedback__star'>4.5</p>
                    </div>
                  </div>
                  <p className="course-box-description">
                    Greattttt!!!!!, The teacher is so best, hehe
                  </p>

                </div>
              </Modal>
            </div>

            <div className='feedback__box1'>
              <div className="course-box" onClick={() => setVisible(true)}>
                <div>
                  <img src={avtfeedback} alt="Avatar" className='feedback__boxavt' />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class='bx bxs-star star__form'></i>
                  <p className='feedback__star'>4.5</p>
                </div>
              </div>
              <Modal
                visible={visible}
                onCancel={showConfirm}
                footer={[
                  <Button key="cancel" onClick={showConfirm}>
                    Close
                  </Button>,
                ]}
              >
                <div className="course-box-modal">
                  <div className='feedback__boxall'>
                    <div className="course-box-avatar">
                      <img src={avtfeedback} alt="Avatar" className='feedback__formavt' />
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">Reactjs for Developer</p>
                    </div>
                    <div className="feedback__rating">
                      <i class='bx bxs-star star__form'></i>
                      <p className='feedback__star'>4.5</p>
                    </div>
                  </div>
                  <p className="course-box-description">
                    Greattttt!!!!!, The teacher is so best, hehe
                  </p>

                </div>
              </Modal>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default CourseBox;
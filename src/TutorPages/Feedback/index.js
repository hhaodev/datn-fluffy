import "../../TutorPages/Feedback/feedback.css";
import React, { useState } from "react";
import { Card, Rate, Button, Modal } from "antd";
// import user from '../../assets/images/user.jpg'
import { Link } from "react-router-dom";
// import avtfeedback from '../../assets/images/avtfeedback1.png'
import avtfeedback2 from "../../assets/images/avt1.jpg";
// import avtfeedback3 from '../../assets/images/avt2.jpg'
import avtfeedback4 from "../../assets/images/avt3.jpg";
import avtfeedback5 from "../../assets/images/avt4.jpg";
// import avtfeedback6 from '../../assets/images/avt5.jpg'
import Navbar from "../component/Navbar";
import { Avatar, Space } from "antd";
import sidebarlogo from "../../assets/images/logo-removebg-preview.png";

const CourseBox = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      {/* SIDEBAR */}

      <section id="content">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR */}

        <div className="feedback__head-title">
          <div className="feedback__left">
            <h1>Feedback</h1>
          </div>
          {/* <h1 className='feedback__h1'>FeedBack</h1> */}

          <div className="feedback__box">
            <div className="feedback__box1">
              <div className="course-box" onClick={showModal}>
                <div>
                  <img
                    src={avtfeedback4}
                    alt="Avatar"
                    className="feedback__boxavt"
                  />
                </div>
                <div className="course-box-info">
                  <h3 className="course-box-title">Duck</h3>
                  <p className="course-box-subtitle">ReactJs for Developer</p>
                </div>
                <div className="course-box-rating">
                  <i class="bx bxs-star star__form"></i>
                  <p className="feedback__star">4.5</p>
                </div>
              </div>
              <Modal open={open} onOk={hideModal} onCancel={hideModal}>
                <div className="course-box-modal">
                  <div className="feedback__boxall">
                    <div className="course-box-avatar">
                      <Space size={16} wrap>
                        <Avatar
                          src={avtfeedback4}
                          alt="Avatar"
                          className="feedback__formavt"
                        />
                      </Space>
                    </div>
                    <div className="feedback__tittle">
                      <h3 className="course-box-title">Duck</h3>
                      <p className="course-box-subtitle">
                        Reactjs for Developer
                      </p>
                    </div>
                    <div className="feedback__rating">
                      <i class="bx bxs-star star__form"></i>
                      <p className="feedback__star">4.5</p>
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

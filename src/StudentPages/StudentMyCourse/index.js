import "../StudentMyCourse/studentmycourse.css";
import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { Progress, Tooltip } from "antd";
import course1 from "../../assets/images/course1.jpg";
import course2 from "../../assets/images/course2.jpg";
import course3 from "../../assets/images/course3.jpg";
import course4 from "../../assets/images/course4.jpg";
import course5 from "../../assets/images/course5.jpg";

function StudentMyCourse() {
  // slider
  const formatter = (value) => `${value}%`;
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  // slider

  // end slider
  return (
    <>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1 className="course__ch1">Course in Progress</h1>
              <div className="course__boxall">
                <div className="course__box1">
                  <div className="course__pad1">
                    <div>
                      <img src={course1} className="course__img1"></img>
                    </div>
                    <div className="course__cinema">
                      <h3 className="course__h3learn">
                        Learn Ethical Hacking From Scratch Here
                      </h3>
                      <p>
                        <span className="course__span2">5</span> of 19 course
                        progress
                      </p>
                    </div>
                  </div>
                  <div className="course__tit">
                    <p className="course__prog">Progress</p>
                    <p>15%</p>
                  </div>
                  <div className="course__rourse">
                    <Slider
                      tooltip={{
                        formatter,
                      }}
                    />
                  </div>
                </div>

                <div className="course__box1">
                  <div className="course__pad1">
                    <div>
                      <img src={course2} className="course__img1"></img>
                    </div>
                    <div className="course__cinema">
                      <h3 className="course__h3learn">
                        Learn Ethical Hacking From Scratch Here
                      </h3>
                      <p>
                        <span className="course__span2">10</span> of 20 course
                        progress
                      </p>
                    </div>
                  </div>
                  <div className="course__tit">
                    <p className="course__prog">Progress</p>
                    <p>24%</p>
                  </div>
                  <div className="course__rourse">
                    <Slider
                      tooltip={{
                        formatter,
                      }}
                    />
                  </div>
                </div>

                <div className="course__box1">
                  <div className="course__pad1">
                    <div>
                      <img src={course3} className="course__img1"></img>
                    </div>
                    <div className="course__cinema">
                      <h3 className="course__h3learn">
                        Learn Ethical Hacking From Scratch Here
                      </h3>
                      <p>
                        <span className="course__span2">16</span> of 36 course
                        progress
                      </p>
                    </div>
                  </div>
                  <div className="course__tit">
                    <p className="course__prog">Progress</p>
                    <p>30%</p>
                  </div>
                  <div className="course__rourse">
                    <Slider
                      tooltip={{
                        formatter,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="course__right">
              <h1 className="course__ch1">Up Coming Class</h1>
              <div className="box__all2">
                <div className="course__box2">
                  <img src={course4} className="course__2img"></img>
                  <h3>
                    English for Beginners: Intensive Spoken English Course
                  </h3>
                  <p>Today 12:00 PM - 15:00 PM</p>
                </div>

                <div className="course__box2">
                  <img src={course5} className="course__2img"></img>
                  <h3>Best Way to Learn German Language: Full Beginner</h3>
                  <p>Today 15:00 PM - 17:00 PM</p>
                </div>

                <div className="course__box2">
                  <img src={course5} className="course__2img"></img>
                  <h3>
                    Web Design for Beginners: Real World Coding in HTML & CSS
                  </h3>
                  <p>Today 12:00 PM - 17:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}

export default StudentMyCourse;

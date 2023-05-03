import "../ViewCourse/viewcourse.css";
import { Link } from "react-router-dom";
import React from "react";

function ViewCourse() {
  return (
    <>
      <section id="content">
        <main>
          <div className="feedback__head-title">
            <div className="feedback__left">
              <h1>View Course</h1>
            </div>
            {/* <h1 className='feedback__h1'>FeedBack</h1> */}
          </div>

          <div className="course__alls">
            <div className="box__student">
              <div className="student__thumb">
                <img alt="" className="student__img2" />
              </div>
              <div className="student__tutor">
                <img alt="" className="student__img1" />
                <div className="student__info">
                  <h3 className="student__h32"></h3>
                </div>
              </div>
              <h3 className="student__title">úuausdadad</h3>
              <p className="student__des">sdssdsfs</p>
              <div className="course__buttonlink">
                <Link className="inline-btn">edit</Link>
                <Link className="inline-btn">Delete</Link>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default ViewCourse;

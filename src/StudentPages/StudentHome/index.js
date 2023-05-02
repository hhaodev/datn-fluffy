import "../../StudentPages/StudentHome/studenthome.css";
import { Segmented } from "antd";
import courses1 from "../../assets/images/courses1.jpg";
import avt1 from "../../assets/images/avt1.jpg";
import avt2 from "../../assets/images/avt2.jpg";
import avt3 from "../../assets/images/avt3.jpg";
import avt4 from "../../assets/images/avt4.jpg";
import avt5 from "../../assets/images/avt5.jpg";
import avt6 from "../../assets/images/avt6.jpg";
import courses2 from "../../assets/images/courses2.jpg";
import courses4 from "../../assets/images/courses4.jpg";
import courses3 from "../../assets/images/courses3.jpg";
import courses5 from "../../assets/images/courses5.jpg";
import courses6 from "../../assets/images/courses6.jpg";
import React from "react";
import Navbar from "../component/Navbar";

const stdHome = () => {
  return (
    <div>
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
          {/* Home grid */}
          <div class="student__grid">
            <h1 class="student__heading11">quick options</h1>

            <div class="box__std">
              <div class="boxchild__std">
                <h3 class="std__title">likes and comments</h3>
                <p class="std__like">
                  total likes : <span className="std__span1">25</span>
                </p>
                <a href="" class="std__inline">
                  view likes
                </a>
                <p class="std__like">
                  total comments : <span className="std__span1">12</span>
                </p>
                <a href="" class="std__inline">
                  view comments
                </a>
                <p class="std__like">
                  saved playlists : <span className="std__span1">4</span>
                </p>
                <a href="" class="std__inline">
                  view playlists
                </a>
              </div>

              <div class="boxchild__std">
                <h3 class="std__title">top categories</h3>
                <div class="std__flexs">
                  <a href="#" className="std__aa">
                    <i class="fas fa-code"></i>
                    <span className="spanx">development</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-chart-simple"></i>
                    <span className="spanx">business</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-pen"></i>
                    <span className="spanx">design</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-chart-line"></i>
                    <span className="spanx">marketing</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-music"></i>
                    <span className="spanx">music</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-camera"></i>
                    <span className="spanx">photography</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-cog"></i>
                    <span className="spanx">software</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-vial"></i>
                    <span className="spanx">science</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* course */}
          <div className="My__courses">
            <h1 className="student__heading11">our courses</h1>
            <Segmented
              options={[
                "Technology",
                "Languages",
                "Economics",
                "Marketing",
                "Design",
              ]}
              className="student__segmented"
            />

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
                <p className="student__des">
                  Good friends, good books, and a sleepy conscience: this is the
                  ideal life.
                </p>
                <a href="playlist.html" className="inline-btn">
                  Learn More
                </a>
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
                <p className="student__des">
                  then you sure as hell don't deserve me at my best
                </p>
                <a href="playlist.html" className="inline-btn">
                  Learn More
                </a>
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
                <p className="student__des">
                  You've gotta dance like there's nobody watching
                </p>
                <a href="playlist.html" className="inline-btn">
                  Learn More
                </a>
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
                <p className="student__des">
                  You only live once, but if you do it right, once is enough.
                </p>
                <a href="playlist.html" className="inline-btn">
                  Learn More
                </a>
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
                <p className="student__des">
                  In three words I can sum up everything I’ve learned about life
                </p>
                <a href="playlist.html" className="inline-btn">
                  Learn More
                </a>
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
                <p className="student__des">
                  To live is the rarest thing in the world. Most people exist,
                  that is all.{" "}
                </p>
                <a href="playlist.html" className="inline-btn">
                  Learn More
                </a>
              </div>
            </div>
            <div className="more-btn">
              <a href="courses.html" className="inline-option-btn">
                view all courses
              </a>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
};

export default stdHome;

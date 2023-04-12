import '../../StudentPages/StudentHome/studenthome.css';
import { Segmented } from 'antd';

function stdHome() {

  return (
    <div>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <i className='bx bx-home' ></i>
          <span className="text">Home</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className='bx bx-home' ></i>
              <span className="text">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-book-open'></i>
              <span className="text">My Courses</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-calendar'></i>
              <span className="text">Schedule</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-credit-card' ></i>
              <span className="text">Payment</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn"><i className="bx bx-search" /></button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" />
          <a href="#" className="notification">
            <i className="bx bxs-bell" />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="img/people.png" />
          </a>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Home Student</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">My course</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a className="active" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>
          {/* course */}
          <div className="My__courses">
          <Segmented options={['Technology', 'Languages', 'Economics', 'Marketing', 'Design']} className='student__segmented'/>
            <h1 className="student__heading11">our courses</h1>
            <div className="student__box">

              <div className="box__student">
                <div className="student__thumb">
                  <img src="images/thumb-1.png" alt="" className="student__img2"/>
                  <span className="student__spana">10 unit</span>
                </div>
                <div className="student__tutor">
                  <img src="images/pic-2.jpg" alt="" className="student__img1"/>
                  <div className="student__info">
                    <h3 className="student__h32">john deo</h3>
                  </div>
                </div>
                <h3 className="student__title">complete HTML tutorial</h3>
                <p className='student__des'>khoá học oke, học đi bro</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">
              <div className="student__thumb">
                  <img src="images/thumb-2.png" alt="" className="student__img2"/>
                  <span className="student__spana">10 unit</span>
                </div>
                <div className="student__tutor">
                  <img src="images/pic-3.jpg" alt="" className="student__img1"/>
                  <div className="student__info">
                    <h3 className="student__h32">john deo</h3>
                  </div>
                </div>
                <h3 className="student__title">complete CSS tutorial</h3>
                <p className='student__des'>khoá học oke, học đi bro</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">
              <div className="student__thumb">
                  <img src="images/thumb-3.png" alt="" className="student__img2"/>
                  <span className="student__spana">10 Unit</span>
                </div>
                <div className="student__tutor">
                  <img src="images/pic-4.jpg" alt="" className="student__img1"/>
                  <div className="student__info">
                    <h3 className="student__h32">john deo</h3>
                  </div>
                </div>
                
                <h3 className="student__title">complete JS tutorial</h3>
                <p className='student__des'>khoá học oke, học đi bro</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">
              <div className="student__thumb">
                  <img src="images/thumb-4.png" alt="" className="student__img2"/>
                  <span className="student__spana">10 Unit</span>
                </div>
                <div className="student__tutor">
                  <img src="images/pic-5.jpg" alt="" className="student__img1"/>
                  <div className="student__info">
                    <h3 className="student__h32">john deo</h3>
                  </div>
                </div>
               
                <h3 className="student__title">complete Boostrap tutorial</h3>
                <p className='student__des'>khoá học oke, học đi bro</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">
              <div className="student__thumb">
                  <img src="images/thumb-5.png" alt="" className="student__img2"/>
                  <span className="student__spana">10 Unit</span>
                </div>
                <div className="student__tutor">
                  <img src="images/pic-6.jpg" alt="" className="student__img1"/>
                  <div className="student__info">
                    <h3 className="student__h32">john deo</h3>
                  </div>
                </div>
                
                <h3 className="student__title">complete JQuery tutorial</h3>
                <p className='student__des'>khoá học oke, học đi bro</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

              <div className="box__student">
                
                <div className="student__thumb">
                  <img src="images/thumb-6.png" alt="" className="student__img2"/>
                  <span className="student__spana">10 Unit</span>
                </div>
                <div className="student__tutor">
                  <img src="images/pic-7.jpg" alt="" className="student__img1"/>
                  <div className="student__info">
                    <h3 className="student__h32">john deo</h3>
                  </div>
                </div>
                <h3 className="student__title">complete SASS tutorial</h3>
                <p className='student__des'>khoá học oke, học đi bro</p>
                <a href="playlist.html" className="inline-btn">Learn More</a>
              </div>

            </div>
            <div className="more-btn">
              <a href="courses.html" className="inline-option-btn">view all courses</a>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default stdHome;
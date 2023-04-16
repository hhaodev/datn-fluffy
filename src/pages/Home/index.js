import '../../pages/Home/Home.css'
import home from '../../assets/images/home.png'
import con1 from '../../assets/images/con1.svg'
import con2 from '../../assets/images/con2.svg'
import con3 from '../../assets/images/con3.svg'
import con4 from '../../assets/images/con4.svg'
import cate1 from '../../assets/images/undraw_Educator_re_ju47.png'
import cate2 from '../../assets/images/undraw_Male_avatar_g98d.png'
import cate3 from '../../assets/images/undraw_Traveling_yhxq.png'
import cate4 from '../../assets/images/undraw_Ready_for_waves_vlke.png'
import course4 from '../../assets/images/course4.jpg'
import cta1 from '../../assets/images/cta1.png'
import cta2 from '../../assets/images/cta2.png'
import cta3 from '../../assets/images/cta3.png'
import cta4 from '../../assets/images/cta4.png'
import cta5 from '../../assets/images/cta5.png'
import cta6 from '../../assets/images/cta6.png'
import about from '../../assets/images/about.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

function myHome() {
    return (
        <div>
            {/*-start home section--*/}
            <section className="home" id="home">
                <div className="home-text">
                    <h6>Best online learning platform</h6>
                    <h1>Accessible Online Courses For All</h1>
                    <p>Own your future learning new skills online</p>
                    <div className="latter">
                        <form>
                            <input type="email" placeholder="Search Course" required />
                            <input type="button" defaultValue="Search" required />
                        </form>
                    </div>
                </div>
                <div className="home-img">
                    <img src={home} />
                </div>
            </section>
            {/*-start container section--*/}
            <section className="student__container">
                <div className="container-box">
                    <div className="container-img">
                        <img src={con1} />
                    </div>
                    <div className="container-text">
                        <h4>5K</h4>
                        <p>Online Courses</p>
                    </div>
                </div>
                <div className="container-box">
                    <div className="container-img">
                        <img src={con2} />
                    </div>
                    <div className="container-text">
                        <h4>5K</h4>
                        <p>Online Courses</p>
                    </div>
                </div>
                <div className="container-box">
                    <div className="container-img">
                        <img src={con3} />
                    </div>
                    <div className="container-text">
                        <h4>5K</h4>
                        <p>Online Courses</p>
                    </div>
                </div>
                <div className="container-box">
                    <div className="container-img">
                        <img src={con4} />
                    </div>
                    <div className="container-text">
                        <h4>5K</h4>
                        <p>Online Courses</p>
                    </div>
                </div>
            </section>
            {/*-start categories section--*/}
            <section className="categories" id="categories">
                <div className="center-text">
                    <h5>CATEGORIES</h5>
                    <h2>Popular Categories</h2>
                </div>
                <div className="categories-content">
                    <div className="box">
                        <img src={cate1} />
                        <h3>Reading Development</h3>
                        <p>6 Courses</p>
                    </div>
                    <div className="box">
                        <img src={cate2} />
                        <h3>Game Development</h3>
                        <p>8 Courses</p>
                    </div>
                    <div className="box">
                        <img src={cate3} />
                        <h3>Book Development</h3>
                        <p>6 Courses</p>
                    </div>
                    <div className="box">
                        <img src={cate4} />
                        <h3>Star Development</h3>
                        <p>8 Courses</p>
                    </div>
                </div>
                <div className="main-btn">
                    <a href="" className="btn">All Categories</a>
                </div>
            </section>
            
            <section className="cta">
                <div className="center-text">
                    <h5>Trusted By</h5>
                    <h2>500+ Leading Universities And Companies</h2>
                </div>
                <div className="cta-content">
                    <div className="cta-img">
                        <img src={cta1} />
                    </div>
                    <div className="cta-img">
                        <img src={cta2} />
                    </div>
                    <div className="cta-img">
                        <img src={cta3} />
                    </div>
                    <div className="cta-img">
                        <img src={cta4} />
                    </div>
                    <div className="cta-img">
                        <img src={cta5} />
                    </div>
                    <div className="cta-img">
                        <img src={cta6} />
                    </div>
                </div>
            </section>
            {/*-start about section--*/}
            <section className="about" id="about">
                <div className="about-img">
                    <img src={about} />
                </div>
                <div className="about-text">
                    <h2>Want to share your knowledge? Join us a Mentor</h2>
                    <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                    <h4>Best Courses</h4>
                    <h5>Top rated Instructors</h5>
                    <a href="" className="btn">Read More</a>
                </div>
            </section>
            {/*-start contact section--*/}
            <section className="contact" id="contact">
                <div className="main-contact">
                    <div className="contact-content">
                        <h1 className='studenthome__logo1'>Fluffy</h1>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Twitter</a></li>
                    </div>
                    <div className="contact-content">
                        <li><a href="">Home</a></li>
                        <li><a href="">Courses</a></li>
                        <li><a href="">Payment</a></li>
                    </div>
                    <div className="contact-content">
                        <li><a href="">Profile</a></li>
                        <li><a href="">Login</a></li>
                        <li><a href="">Register</a></li>
                        <li><a href="">Instructor</a></li>
                        <li><a href="">Dashboard</a></li>
                    </div>
                    <div className="contact-content">
                        <li><a href="">DaNang,<br /> VietNam, VN 15101</a></li>
                        <li><a href="">fluffy@example.com</a></li>
                        <li><a href="">01646895741</a></li>
                    </div>
                </div>
            </section>
            {/*-custom js link--*/}
        </div>

    );
}

export default myHome;
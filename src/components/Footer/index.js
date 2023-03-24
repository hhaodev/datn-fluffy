import "../Footer/Footer.css"
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-global">
                <div className="Footer-elements">
                    <div className="footer1">
                        <img src={logo} alt="" />
                        <div className="footer-icons">
                            <a href><i className="bx bxl-linkedin-square" /></a>
                            <a href><i className="bx bxl-facebook-circle" /></a>
                            <a href><i className="bx bxl-twitter" /></a>
                            <a href><i className="bx bxl-youtube" /></a>
                        </div>
                    </div>
                    <div className="footer-link-list">
                        <h4>Who We Serve</h4>
                        <ul>
                            <li className="li1"><a href>K-12 School or District</a></li>
                            <li><a href>College or University</a></li>
                        </ul>
                        <h4>Resources</h4>
                        <ul>
                            <li className="li2"><a href>Visit Resource Hub</a></li>
                            <li><a href>Articles</a></li>
                        </ul>
                    </div>
                    <div className="footer-link-list">
                        <h4>About</h4>
                        <ul>
                            <li><a href>Company</a></li>
                            <li className="li3"><a href>Newsroom</a></li>
                            <li><a href>Privacy and Trust</a></li>
                        </ul>
                    </div>
                    <div className="footer-link-list">
                        <h4>Support</h4>
                        <ul>
                            <li className="li4"><a href>Become a Tutor</a></li>
                            <li><a href>Contact Us</a></li>
                            <li><a href>Help Center<i className="bx bx-right-top-arrow-circle" /></a></li>
                            <li><a href>Code of Conduct</a></li>
                        </ul>
                        <button><Link to="/signin">Log In</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
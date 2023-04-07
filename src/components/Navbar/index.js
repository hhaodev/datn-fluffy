import "../Navbar/Navbar.css"
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




function Navbar() {
    const currentUser = useSelector(state => state.user.currentUser)
    
    return (
        <div className="Navbar">
            <Link to="/"><img src={logo} alt="" className="Nav-logo" /></Link>
            <ul className="Navbar-col">
                <li><Link to="/tutor">Become a Tutor</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                { !(Object.values(currentUser).length === 0)  ? <li>Hello, {currentUser.lastName}</li> : <li><Link to="/signin">Login</Link></li> }
            </ul>
        </div>
    );
}

export default Navbar;
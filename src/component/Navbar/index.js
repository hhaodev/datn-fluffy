import React from 'react'
import '../../component/Navbar/navbar.css'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar() {
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user.currentUser)
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        navigate('/')
        window.location.reload(false);
    };
    return (
        <header>
            <a href="" className="studenthome__logo">
                <h1 className='home__logo1'>Fluffy</h1>
            </a>
            <div className="header-icons">
                <ul className='navbar'>
                    <>
                        {!(Object.values(currentUser).length === 0) ? (
                            <div className='navbar__fix'>
                                <p className='navbar__phi'>Hi, {currentUser.firstName} {currentUser.lastName}</p>
                                <button onClick={handleLogout} className='navbar__button1'>Log out</button>
                            </div>
                        ) : (
                            <>
                                <li><Link to="/signin">Sign in</Link></li>
                                <li><Link to="/signup">Sign up</Link></li>
                            </>
                        )}
                    </>
                </ul>
            </div>
        </header>
    )
}

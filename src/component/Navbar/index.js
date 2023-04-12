import React from 'react'
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
                <h1 className='studenthome__logo1'>Fluffy</h1>
            </a>
            <div className="header-icons">
                <ul className='navbar'>
                    <>
                        {!(Object.values(currentUser).length === 0) ? (
                            <>
                                <p>Hi, {currentUser.lastName}</p>
                                <button onClick={handleLogout}>Logout</button>
                            </>
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

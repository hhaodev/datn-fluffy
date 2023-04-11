import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <header>
            <a href="" className="studenthome__logo">
                <h1 className='studenthome__logo1'>Fluffy</h1>
            </a>
            <div className="header-icons">
                <ul className='navbar'>

                    <li><Link to="/signin">Sign in</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                </ul>
            </div>
        </header>
    )
}

import React from 'react'
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../../assets/images/user.jpg'
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        navigate('/')
        window.location.reload(false);
    };
    const menu = (
        <Menu>
            <Menu.Item key="profile">Profile</Menu.Item>
            <Menu.Item key="logout" onClick={()=>{handleLogout()}}>Logout</Menu.Item>
        </Menu>
    );
    return (
        <nav>
            <i className="bx bx-menu" />
            <form action="#">
                <div className="course__form-input">
                    <input type="search" placeholder="Search..." />
                    <button type="submit" className="course__search-btn"><i className="bx bx-search" /></button>
                </div>
            </form>
            <a href="#" className="course__notification">
                <i className="bx bxs-bell" />
                <span className="course__num">8</span>
            </a>
            <Dropdown overlay={menu} placement="bottomRight">
                <Avatar className="avatar" src={user} icon={<DownOutlined />} />
            </Dropdown>
        </nav>
    )
}

import React from 'react'
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../../assets/images/user.jpg'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const menu = (
        <Menu>

            <Menu.Item key="profile">Profile</Menu.Item>
            <Menu.Item key="logout" onClick={() => handleLogout()}>Logout</Menu.Item>
        </Menu>
    );
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        navigate('/')
        window.location.reload(false);

    };
    return (
        <nav>
            <i className="bx bx-menu" />
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button type="submit" className="search-btn"><i className="bx bx-search" /></button>
                </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden />
            <Dropdown overlay={menu} placement="bottomRight">
                <Avatar className="avatar" src={user} icon={<DownOutlined />} />
            </Dropdown>
        </nav>
    )
}

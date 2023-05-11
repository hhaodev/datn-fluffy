import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import user1 from "../../assets/images/user.jpg";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector(state=>state.user.currentUser)
  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={() => handleLogout()}>
        Log out
      </Menu.Item>
    </Menu>
  );
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/");
    window.location.reload(false);
  };
  return (
    <nav className="nav-header">
      {/* <i className="bx bx-menu" />
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <i className="bx bx-search" />
          </button>
        </div>
      </form> */}
      <Dropdown overlay={menu} placement="bottomRight" className="dropdown-avatar">
        <Avatar className="avatar" src={user1} icon={<DownOutlined />} />
      </Dropdown>
      <h4 className="nav_h2">Hi, {user.lastName}</h4>
    </nav>
  );
}

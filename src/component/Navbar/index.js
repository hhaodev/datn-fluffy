import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector((state) => state.user.currentUser);
  console.log("🚀 ~ file: index.js:10 ~ Navbar ~ user:", user);
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
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        className="dropdown-avatar"
      >
        <Avatar className="avatar" src={user.avatarUrl} />
      </Dropdown>
      <h4 className="nav_h2">Hi, {user.lastName}</h4>
    </nav>
  );
}

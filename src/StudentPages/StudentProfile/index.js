import "../StudentProfile/studentprofile.css";
import { Avatar, Dropdown, Menu } from "antd";
import { redirect, useNavigate } from "react-router-dom";
import user from "../../assets/images/user.jpg";
import { DownOutlined } from "@ant-design/icons";

function StudentProfile() {
  // avt
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout" onClick={() => handleLogout()}>
        Logout
      </Menu.Item>
      <Menu.Item key="onboard" onClick={() => redirect("/onboarding")}>
        onboarding
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
  //  end avt
  return (
    <>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1>My Profile</h1>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}

export default StudentProfile;

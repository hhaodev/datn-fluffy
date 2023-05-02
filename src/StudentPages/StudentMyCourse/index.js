import "../StudentMyCourse/studentmycourse.css";
import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import user from "../../assets/images/user.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { Progress, Tooltip } from "antd";

function StudentMyCourse() {
  // avt
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout" onClick={() => handleLogout()}>
        Logout
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

  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <>
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search" />
              </button>
            </div>
          </form>
          <Dropdown overlay={menu} placement="bottomRight">
            <Avatar className="avatar" src={user} icon={<DownOutlined />} />
          </Dropdown>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1>My Course</h1>
              <div className="course__boxall">
                <div className="course__box1">
                  <div className="course__cinema">
                    <h3>Cinema 4D</h3>
                    <p>elements design for web sites and mobile apps</p>
                  </div>
                  <div className="course__rourse">
                    <Row>
                      <Col span={12}>
                        <Slider
                          min={1}
                          max={90}
                          onChange={onChange}
                          value={
                            typeof inputValue === "number" ? inputValue : 0
                          }
                          className="course__sliderr"
                        />
                      </Col>
                      <Col span={4}>
                        <InputNumber
                          min={1}
                          max={20}
                          style={{ margin: "0 39px" }}
                          value={inputValue}
                          onChange={onChange}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="course__box2">
                  <div className="course__cinema">
                    <h3>Cinema 4D</h3>
                    <p>elements design for web sites and mobile apps</p>
                  </div>
                  <div className="course__rourse">
                    <Row>
                      <Col span={12}>
                        <Slider
                          min={1}
                          max={60}
                          onChange={onChange}
                          value={
                            typeof inputValue === "number" ? inputValue : 0
                          }
                          className="course__sliderr"
                        />
                      </Col>
                      <Col span={4}>
                        <InputNumber
                          min={1}
                          max={20}
                          style={{ margin: "0 39px" }}
                          value={inputValue}
                          onChange={onChange}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="course__box3">
                  <div className="course__cinema">
                    <h3>Cinema 4D</h3>
                    <p>elements design for web sites and mobile apps</p>
                  </div>
                  <div className="course__rourse">
                    <Row>
                      <Col span={12}>
                        <Slider
                          min={1}
                          max={40}
                          onChange={onChange}
                          value={
                            typeof inputValue === "number" ? inputValue : 0
                          }
                          className="course__sliderr"
                        />
                      </Col>
                      <Col span={4}>
                        <InputNumber
                          min={1}
                          max={20}
                          style={{ margin: "0 26px" }}
                          value={inputValue}
                          onChange={onChange}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>

              <div className="course__myprogress">
                <h1>My Progress</h1>
                <div className="course__progress">
                  <>
                    <Tooltip title="3 done / 3 in progress / 4 to do">
                      <Progress
                        percent={60}
                        success={{
                          percent: 30,
                        }}
                      />
                    </Tooltip>
                    <Space wrap>
                      <Tooltip title="3 done / 3 in progress / 4 to do">
                        <Progress
                          percent={60}
                          success={{
                            percent: 30,
                          }}
                          type="circle"
                        />
                      </Tooltip>
                      <Tooltip title="3 done / 3 in progress / 4 to do">
                        <Progress
                          percent={60}
                          success={{
                            percent: 30,
                          }}
                          type="dashboard"
                        />
                      </Tooltip>
                    </Space>
                  </>

                  <div className="course__procolo">
                    <div className="course__pro1">
                      <h2>75/115</h2>
                      <p>Visited lectures</p>
                    </div>

                    <div className="course__pro2">
                      <h2>75/115</h2>
                      <p>Completed tasks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}

export default StudentMyCourse;

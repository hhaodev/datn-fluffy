import "../ViewProfile/viewprofile.css";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import user from "../../../src/assets/images/user.jpg";
import avt from "../../../src/assets/images/avt1.jpg";
import { Button } from "antd";
import { Form, Input } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import sidebarlogo from "../../assets/images/logo-removebg-preview.png";

function ViewProfile() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/");
    window.location.reload(false);
  };
  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/viewprofile">View Profile</Link>
      </Menu.Item>
      <Menu.Item
        key="logout"
        onClick={() => {
          handleLogout();
        }}
      >
        Log out
      </Menu.Item>
    </Menu>
  );

  const onFinish = (values) => {
    const datatemp = {
      email: values.username,
      password: values.password,
    };
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  return (
    <div className="view__all">
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <form action="#"></form>
          <Dropdown overlay={menu} placement="bottomRight">
            <Avatar className="avatar" src={user} icon={<DownOutlined />} />
          </Dropdown>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="course__head-title__view">
            <div className="course__left">
              <h1>View Profile</h1>
              <div className="view__allform">
                <div className="view__form">
                  <div className="view__avt">
                    <h2 className="view__htitle">Personal Information</h2>
                    <Avatar
                      size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                      }}
                      src={avt}
                      className="view__avt2"
                    />
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="view__upload"
                    >
                      Upload new picture
                    </Button>
                  </div>

                  <Form
                    name="normal_login"
                    className="login-form"
                    layout="vertical"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <div className="view__firsts">
                      <Form.Item
                        label="First name"
                        name="firstname"
                        rules={[
                          {
                            required: true,
                            message: "Please input your firsname!",
                          },
                        ]}
                        className="view__firsts1"
                      >
                        <Input style={{ height: "50px", width: "258px" }} />
                      </Form.Item>

                      <Form.Item
                        label="Last name"
                        name="lastname"
                        rules={[
                          {
                            required: true,
                            message: "Please input your lirsname!",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            height: "50px",
                            width: "278px",
                            width: "278px",
                          }}
                        />
                      </Form.Item>
                    </div>

                    <div className="view__email">
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                        className="view__firsts1"
                      >
                        <Input style={{ height: "50px", width: "258px" }} />
                      </Form.Item>

                      <Form.Item
                        label="Date of birth"
                        name="dateofbirth"
                        rules={[
                          {
                            required: true,
                            message: "Please input your lirsname!",
                          },
                        ]}
                      >
                        <Space direction="vertical" size={12}>
                          <DatePicker
                            defaultValue={dayjs(
                              "01/01/2015",
                              dateFormatList[0]
                            )}
                            format={dateFormatList}
                            style={{ height: "50px", width: "278px" }}
                          />
                        </Space>
                      </Form.Item>
                    </div>

                    <Form.Item
                      label="School"
                      name="school"
                      rules={[
                        {
                          required: true,
                          message: "Please input your school!",
                        },
                      ]}
                    >
                      <Input style={{ height: "50px" }} />
                    </Form.Item>

                    <div className="view__bottom">
                      <Button
                        type="default"
                        htmlType="submit"
                        className="view__dis"
                      >
                        Discard
                      </Button>

                      <Button
                        type="primary"
                        htmlType="submit"
                        className="view__upload"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
}

export default ViewProfile;

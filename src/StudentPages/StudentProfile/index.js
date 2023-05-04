import "../StudentProfile/studentprofile.css";
import { Avatar, Dropdown, Button, Menu, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.jpg";
import { DownOutlined } from "@ant-design/icons";
import sidebarlogo from "../../assets/images/logo-removebg-preview.png";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import avt from "../../../src/assets/images/avt1.jpg";

function StudentProfile() {
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
    <>
      <section id="content">
        <main>
          <div className="course__head-title__view">
            <div className="course__left">
              <h1>
                <i class="bx bxs-user-circle"></i>View Profile
              </h1>
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
                        <Input
                          placeholder="Hoang"
                          style={{ height: "50px", width: "258px" }}
                          className="profile__input"
                        />
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
                          placeholder="Tran"
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
                        <Input
                          placeholder="tranthanhhoang2802@gmail.com"
                          style={{ height: "50px", width: "258px" }}
                        />
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
                      <Input
                        placeholder="Duy tan University"
                        style={{ height: "50px" }}
                      />
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
    </>
  );
}

export default StudentProfile;

import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Select } from "antd";
import { gql, useMutation } from "@apollo/client";
import { UserType, UserGender } from "../../constraint";
import { useState } from "react";
import "../../Register/SignUp/SignUp.css";
import { useDispatch } from "react-redux";
import { setVerify } from "../../Redux/features/verifySlice";
import { setCurrentUser } from "../../Redux/features/userSlice";

function SignUp() {
  const { Option } = Select;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SIGN_UP = gql`
    mutation signUp($input: SignUpDto!) {
      signUp(input: $input) {
        message
        success
      }
    }
  `;
  const [signUp, { error, loading }] = useMutation(SIGN_UP);

  const [status, setStatus] = useState(false);
  const onFinish = (user) => {
    const datatemp = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      type: UserType.STUDENT,
    };
    const getData = async () => {
      const result = await signUp({
        variables: {
          input: datatemp,
        },
      });
      setStatus(result.data.signUp.success);
      dispatch(setCurrentUser(datatemp));
      dispatch(setVerify(user.email));
    };
    getData();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signup__pad">
      <div className="signup__gr">
        {status && navigate("/verify")}
        <div className="signup__logo">
          <h1>
            <Link to="/" className="logo__signup">
              Fluffy
            </Link>
          </h1>
        </div>
        <div className="signup__all">
          <div className="box__signup">
            <h1 className="signup__heading">Sign up</h1>
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <div className="signup__firstlast">
                <Form.Item
                  label="First name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                  className="signup__first"
                >
                  <Input style={{ height: "40px", width: "250px" }} />
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input style={{ height: "40px", width: "250px" }} />
                </Form.Item>
              </div>

              <div className="signup__email">
                <Form.Item
                  label="Email"
                  name="email"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                    {
                      type: "email",
                      message: "Email was wrong",
                    },
                  ]}
                >
                  <Input style={{ height: "40px" }} />
                </Form.Item>
              </div>
              <div className="signup__password">
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  className="signup__pass"
                >
                  <Input.Password style={{ height: "40px", width: "250px" }} />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                  className="signup__pass"
                >
                  <Input.Password style={{ height: "40px", width: "250px" }} />
                </Form.Item>
              </div>
              <div className="signup__phone">
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                ></Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                  className="signup__phonepadding"
                >
                  <Input
                    style={{
                      height: "40px",
                      width: "250px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                      message: "Please select gender!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select your gender"
                    style={{
                      height: "40px",
                      width: "250px",
                    }}
                  >
                    <Option value={UserGender.MALE}>Male</Option>
                    <Option value={UserGender.FEMALE}>Female</Option>
                  </Select>
                </Form.Item>
                {/* </div>
                    <div className="signup__gender"> */}
              </div>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="signup__form__button"
                >
                  Sign Up
                </Button>
              </Form.Item>

              <div className="signup__wantr">
                <p className="signup__want">Want to become a tutor?</p>
                <button className="signup__wantbutton">
                  <Link to="/apply-tutor" className="signup__apply">
                    Apply today
                  </Link>
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

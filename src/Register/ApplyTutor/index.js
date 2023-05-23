import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import { gql, useMutation } from "@apollo/client";
import { UserGender, UserType } from "../../constraint";
import { useState } from "react";
import "../ApplyTutor/ApplyTutor.css";
import { useDispatch } from "react-redux";
import { setVerify } from "../../Redux/features/verifySlice";
import { setCurrentUser } from "../../Redux/features/userSlice";
import { setError } from "../../Redux/features/notificationSlice";

function ApplyTutor() {
  const { Option } = Select;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const SIGN_UP = gql`
    mutation signUp($input: SignUpDto!) {
      signUp(input: $input) {
        message
        success
      }
    }
  `;
  const [signUp, { error, loading }] = useMutation(SIGN_UP);
  const onFinish = (user) => {
    const datatemp = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phone,
      gender: user.gender,
      type: UserType.TUTOR,
    };
    const getData = async () => {
      try {
        const result = await signUp({
          variables: {
            input: datatemp,
          },
        });
        setStatus(result.data.signUp.success);
        dispatch(setCurrentUser(datatemp));
        dispatch(setVerify(user.email));
      } catch (error) {
        dispatch(setError({ message: error.message }));
      }
    };
    getData();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="apply__pad">
      <div className="apply_gr">
        {status && navigate("/verify")}
        <div className="apply__logo">
          <h1>
            <Link to="/" className="logo__apply">
              Fluffy
            </Link>
          </h1>
        </div>

        <div className="apply__all">
          <div className="box__apply">
            <h1 className="apply__heading">Apply to become a Tutor</h1>
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <div className="apply__firstlast">
                <Form.Item
                  label="First name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your firstname!",
                    },
                  ]}
                  className="apply__first"
                >
                  <Input style={{ height: "40px", width: "250px" }} />
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your lastname!",
                    },
                  ]}
                >
                  <Input style={{ height: "40px", width: "250px" }} />
                </Form.Item>
              </div>

              <div className="apply__email">
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

              <div className="apply__password">
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  className="apply__pass"
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
                            "Password Incorrect!"
                          )
                        );
                      },
                    }),
                  ]}
                  className="apply__pass"
                >
                  <Input.Password style={{ height: "40px", width: "250px" }} />
                </Form.Item>
              </div>

              <div className="apply__phone">
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
                  className="apply__phonepadding"
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
              </div>
              <div className="apply__submit">
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="apply__form__button"
                  >
                    Sign up
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyTutor;

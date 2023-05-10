import { Link, Navigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { gql, useMutation } from "@apollo/client";
import "../../Register/SignIn/SignIn.css";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../Redux/features/userSlice";
import { UserType } from "../../constraint";
import { useState } from "react";
import { setError } from "../../Redux/features/notificationSlice";

function SignIn() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const SIGNIN = gql`
    mutation signIn($input: SignInDto!) {
      signIn(input: $input) {
        token
        refreshToken
        id
        firstName
        lastName
        email
        isOnboarded
        type
      }
    }
  `;
  const [signIn] = useMutation(SIGNIN);

  const onFinish = (values) => {
    const datatemp = {
      email: values.username,
      password: values.password,
    };
    const getData = async () => {
      try {
        const result = await signIn({
          variables: {
            input: datatemp,
          },
        });
        localStorage.setItem("token", result.data.signIn.token);
        localStorage.setItem("refreshToken", result.data.signIn.refreshToken);

        let userData = {
          id: result.data.signIn.id,
          lastName: result.data.signIn.lastName,
          firstName: result.data.signIn.firstName,
          type: result.data.signIn.type,
          isOnboarded: result.data.signIn.isOnboarded,
        };
        dispatch(setCurrentUser(userData));
        setUser(userData);
      } catch (error) {
        dispatch(setError({ message: error.message }));
      }
    };
    getData();
  };

  let Navi = null;
  if (user) {
    if (!user.isOnboarded) {
      Navi = (
        <Navigate
          to={
            user.type === UserType.STUDENT
              ? "/onboarding"
              : "/onboarding/step-1"
          }
          replace={true}
        />
      );
    } else {
      Navi = <Navigate to={"/pending"} replace={true} />;
    }
  }
  return (
    <>
      {user && Navi}
      <div className="signin__pad">
        <div className="signin__gr">
          <div className="signin__logo">
            <h1>
              <Link to="/" className="logo__signin">
                Fluffy
              </Link>
            </h1>
          </div>
          <div className="signin__all">
            <div className="box__signin">
              <h1 className="signin__heading">Sign in</h1>
              <Form
                name="normal_login"
                className="login-form"
                layout="vertical"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    style={{ height: "50px" }}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    style={{ height: "50px" }}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <div className="signin__remem__forgot">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox className="signin__rememberme">
                        Remember me
                      </Checkbox>
                    </Form.Item>
                    <Link className="login-form-forgot" to="/forgot-password">
                      Forgot password
                    </Link>
                  </div>
                </Form.Item>
                <Form.Item>
                  <div className="signin__bottom">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="signin__form__button"
                    >
                      Login
                    </Button>
                    <p>
                      Don't have account{" "}
                      <Link to="/sign-up" className="signin__form__regis">
                        Register now!
                      </Link>
                    </p>
                  </div>
                </Form.Item>
                <div className="signin__wantr">
                  <p className="signin__want_p">Want to become a tutor?</p>
                  <button className="signin__wantbutton">
                    <Link to="/apply-tutor" className="signin__apply">
                      Apply today
                    </Link>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

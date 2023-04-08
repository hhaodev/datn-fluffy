import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { gql, useMutation } from '@apollo/client';
import { useState } from "react";
import "./SignIn.css"
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../Redux/features/userSlice";

function SignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const SIGNIN = gql`
    mutation signIn($input: SignInDto!) {
        signIn(input: $input  ) {  
        token
        refreshToken
        id
        firstName
        lastName
        email
        type
    }
    }
`;
    const [signIn, { loading }] = useMutation(SIGNIN);

    const onFinish = (values) => {
        const datatemp = {
            email: values.username,
            password: values.password
        }
        const getData = async () => {

            try {
                const result = await signIn({
                    variables: {
                        input: datatemp,
                    },
                });
                localStorage.setItem("token", result.data.signIn.token)
                localStorage.setItem("refreshToken", result.data.signIn.refreshToken)

                let userData = {
                    id: result.data.signIn.id,
                    lastName: result.data.signIn.lastName,
                    firstName: result.data.signIn.firstName,
                    type: result.data.signIn.type
                }
                dispatch(setCurrentUser(userData))
                navigate("/")
            } catch (error) {
                alert(error.message);

            }
        }
        getData()

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section className="signin__gr">
            <div className="signin__all">
                <div className="signin__logo">
                    <h1><Link to="/" className="logo__signin">Fluffy</Link></h1>
                </div>
                <div className="box__signin">
                    <h1 className="signup-heading">Sign in</h1>
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
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input style={{ height: "50px" }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
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
                        <div className="signin__remem__forgot">
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox className="signin__rememberme">Remember me</Checkbox>
                                </Form.Item>

                                <Link className="login-form-forgot" to="/forgotpassword">
                                    Forgot password
                                </Link>
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="signin__form__button">
                                Log in
                            </Button>
                            Or <Link to="/signup" className="signin__form__regis">register now!</Link>
                        </Form.Item>
                        <div className="signin__wantr">
                            <p className="signin__want_p">Want to become a tutor?</p>
                            <button className="signin__wantbutton"><Link to="/applytutor">Apply today</Link></button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
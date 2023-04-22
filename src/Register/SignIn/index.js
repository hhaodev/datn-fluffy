import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { gql, useMutation } from '@apollo/client';
import "../../Register/SignIn/SignIn.css"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../Redux/features/userSlice";
import client from "../../configGQL";
import { useEffect, useState } from "react";
import Pending from "../../pages/Pending";

function SignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const status = useSelector(state => state.user.currentUser.tutorProfile?.status)
    const [penDing,setPenDing] = useState("")

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
    const [signIn] = useMutation(SIGNIN);

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

                // client.query({
                //     query: gql`
                //     query {
                //     getMe{
                //         id
                //         email
                //         lastName
                //         firstName
                //         tutorProfile{
                //             status
                //             educations{
                //                 id
                //             }
                //             experiences{
                //                 id
                //             }
                //             certifications{
                //                 id
                //             }
                //         }
                //         studentProfile{
                //         studentEducations{
                //             id
                //         }
                //         }
                //     }
                //     }`
                // }).then(result => {
                //     dispatch(setCurrentUser(result.data.getMe))
                //     setPenDing(result.data.getMe.tutorProfile.status)
                // })
                //     .catch(error => { })
                if (result.data.signIn.type === "STUDENT") {
                    navigate("/studenthome")
                } else if (result.data.signIn.type === "TUTOR") {
                    navigate("/pending")
                }
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
        <div className="signin__pad">
            <div className="signin__gr">
                <div className="signin__logo">
                    <h1 ><Link to="/" className="logo__signin">Fluffy</Link></h1>
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
                            <Form.Item>
                                <div className="signin__remem__forgot">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox className="signin__rememberme">Remember me</Checkbox>
                                    </Form.Item>
                                    <Link className="login-form-forgot" to="/forgotpassword">
                                        Forgot password
                                    </Link>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <div className="signin__bottom">
                                    <Button type="primary" htmlType="submit" className="signin__form__button">
                                        Login
                                    </Button>
                                    <p>Don't have account <Link to="/signup" className="signin__form__regis">Register now!</Link></p>

                                </div>
                            </Form.Item>
                            <div className="signin__wantr">
                                <p className="signin__want_p">Want to become a tutor?</p>
                                <button className="signin__wantbutton"><Link to="/applytutor" className="signin__apply">Apply today</Link></button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
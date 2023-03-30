import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { gql, useMutation } from '@apollo/client';
import { useState } from "react";
import "./SignIn.css"
import { useDispatch } from "react-redux";
import { setUserdata } from "../../Redux/features/userSlice";



function SignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const SIGNIN = gql`
    mutation signIn($input: SignInDto!) {
        signIn(input: $input  ) {
        lastName    
        token
        refreshToken
    }
    }
`;
    const [signIn, { loading }] = useMutation(SIGNIN);
    const [error, setError] = useState("")
    const onFinish = (values) => {
        const datatemp = {
            email: values.username,
            password: values.password
        }
        const getData = async () => {
            setError('')
            try {
                const result = await signIn({
                    variables: {
                        input: datatemp,
                    },
                });
                localStorage.setItem("token", JSON.stringify(result.data.signIn.token))
                dispatch(setUserdata(result.data.signIn.lastName))
                navigate("/")

            } catch (error) {
                setError(error.message);
            }
        }
        getData()

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <div className="container">
            {error && alert(error)}
            <div className="Navigation">
                <h1 className="logo"><Link to="/">Fluffy</Link></h1>
            </div>
            <div className="box__signin">
                <h1 className="signup-heading">Sign in</h1>
                <button className="signup-social">
                    <i className="bx bxl-google signup-social-icon " />
                    <span className="signup-social-text">Signup with google</span>
                </button>
                <div className="signup-or"><span>Or</span></div>
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
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link className="login-form-forgot" to="/forgotpassword">
                            Forgot password
                        </Link>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <Link to="/signup">register now!</Link>
                    </Form.Item>
                    <div className="footer">
                        <p>Want to become a tutor?</p>
                        <button><Link to="/applytutor">Apply today</Link></button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default SignIn;
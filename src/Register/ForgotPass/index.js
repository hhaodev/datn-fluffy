import "../../Register/ForgotPass/ForgotPass.css";
import { Button, Form, Input, message, Select } from 'antd';
import { setVerify } from "../../Redux/features/verifySlice";
import { UserType, UserGender } from '../../constraint'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, } from "react-router-dom";






function ForgotPassWord() {
    const dispatch = useDispatch()

    const onFinish = (user) => {
        
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (

        <div className="forgot__pad">
            <div className="forgot__gr">
                <div className="forgot__logo">
                    <h1 ><Link to="/" className="logo__signup">Fluffy</Link></h1>
                </div>
                <div className="forgot__all">
                    <div className="box__forgot">
                        <div classname="forgot">
                            <h1 className="forgot__heading">Reset password</h1>
                            <p className="forgot__p">Enter the email address associated with your account, and we'll send you a link to reset your password.</p>
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                layout="vertical"
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                        {
                                            type: "email",
                                            message: 'Email was wrong',
                                        },
                                    ]}
                                >
                                    <Input style={{ height: "35px" }} />
                                </Form.Item>
                                <Button type="primary" htmlType="submit" className="forgot__form__button">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassWord;
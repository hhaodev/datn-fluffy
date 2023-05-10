import "../../Register/ForgotPass/ForgotPass.css";
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { setError } from "../../Redux/features/notificationSlice";






function ForgotPassWord() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [status, setStatus] = useState(true)
    const [formValues, setFormValues] = useState(null);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const FORGOT_PASSWORD = gql`
    mutation forgotPassword($input: ForgotPasswordDto!) {
        forgotPassword(input: $input) {
            message
            success
        }
    }`;

    const RESET_PASSWORD = gql`
    mutation resetPassword($input: ResetPasswordDto!) {
        resetPassword(input: $input) {
            message
            success
        }
    }`;

    const [forgotPass] = useMutation(FORGOT_PASSWORD);
    const [resetPass] = useMutation(RESET_PASSWORD);

    const handleForgot = () => {
        let isValidated = true;
        if (formValues === null) {
            isValidated = false
        }
        if (isValidated === true) {
            const getData = async () => {
                try {
                    const result = await forgotPass({
                        variables: {
                            input: formValues,
                        },
                    });
                    setStatus(false)
                } catch (error) {
                    dispatch(setError({ message: error.message }));
                }
            };
            getData();
        } else {
            dispatch(setError({ message: "Please fill in all fields" }))
        }
    }
    const handleReset = () => {
        let isValidated = true;
        for (const key in formValues) {
            if (Object.prototype.hasOwnProperty.call(formValues, key)) {
                if (formValues[key] === null) {
                    isValidated = false;
                    break;
                }
            }
        }
        if (isValidated === true) {
            const getData = async () => {
                try {
                    const result = await resetPass({
                        variables: {
                            input: formValues,
                        },
                    });
                    navigate("/sign-in")
                } catch (error) {
                    dispatch(setError({ message: error.message }));
                }
            };
            getData();
        } else {
            dispatch(setError({ message: "Please fill in all fields" }))
        }
    }

    return (
        <div className="forgot__pad">
            <div className="forgot__gr">
                <div className="forgot__logo">
                    <h1 ><Link to="/" className="logo__signup">Fluffy</Link></h1>
                </div>
                <div className="forgot__all">
                    <div className="box__forgot">
                        <div classname="forgot">
                            {
                                status
                                    ? <h1 className="forgot__heading">Forgot password</h1>
                                    : (null)
                            }
                            {
                                status
                                    ? <p className="forgot__p">Enter the email address associated with your account, and we'll send you a link to reset your password.</p>
                                    : (null)
                            }
                            <Form
                                name="basic"
                                autoComplete="off"
                                layout="vertical"
                            >
                                {status
                                    ?
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
                                        <Input
                                            style={{ height: "35px" }}
                                            name="email"
                                            onChange={(event) => handleInputChange(event)}
                                        />
                                    </Form.Item>
                                    : (
                                        <>
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
                                                <Input
                                                    style={{ height: "35px" }}
                                                    name="email"
                                                    onChange={(event) => handleInputChange(event)}
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                label="NewPassword"
                                                name="newPassword"
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your password!',
                                                    },

                                                ]}
                                            >
                                                <Input.Password
                                                    style={{ height: "35px" }}
                                                    name="newPassword"
                                                    onChange={(event) => handleInputChange(event)}
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                label="Code"
                                                name="code"
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your code!',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    style={{ height: "35px" }}
                                                    name="code"
                                                    onChange={(event) => handleInputChange(event)}
                                                />
                                            </Form.Item>
                                        </>
                                    )
                                }

                                {status
                                    ?
                                    <Button onClick={handleForgot} type="primary" htmlType="submit" className="forgot__form__button">
                                        Submit
                                    </Button>
                                    :
                                    <Button onClick={handleReset} type="primary" htmlType="submit" className="forgot__form__button">
                                        Reset
                                    </Button>
                                }
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ForgotPassWord;
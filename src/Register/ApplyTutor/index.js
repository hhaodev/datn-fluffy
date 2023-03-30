import { Link, useNavigate,  } from "react-router-dom";
import { Button, Form, Input, Select } from 'antd';
import { gql, useMutation } from '@apollo/client';
import { UserGender, UserType } from '../../constraint';
import { useState } from "react";
import "../ApplyTutor/ApplyTutor.css"
import { useDispatch } from "react-redux";
import { setVerify } from "../../Redux/features/verifySlice";



function ApplyTutor() {
    const { Option } = Select;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [status, setStatus] = useState(false)
    const SIGN_UP = gql`
    mutation signUp($input: SignUpDto!) {
    signUp(input: $input  ) {
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
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            type : UserType.STUDENT
        }
        const getData =  async () => {
            const result  = await signUp({
                variables: {
                    input: datatemp,
                },
            });
            setStatus(result.data.signUp.success);
            dispatch(setVerify(user.email))
        }
        getData()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="84">+84</Option>
                <Option value="85">+85</Option>
            </Select>
        </Form.Item>
    );
    
    return (
        <div className="container__apply">
            {status && navigate("/verifi")}
            <div className="Navigation">
                <h1 className="logo"><Link to="/">Fluffy</Link></h1>
            </div>
            <div className="apply">
                <h1 className="apply-heading">Apply to become a tutor</h1>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label="Firstname"
                        name="firstName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your firstname!',
                            },
                        ]}
                    >
                        <Input style={{ height: "50px" }} />
                    </Form.Item>
                    <Form.Item
                        label="Lastname"
                        name="lastName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your lastname!',
                            },
                        ]}
                    >
                        <Input style={{ height: "50px" }}/>
                    </Form.Item>
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
                        <Input style={{ height: "50px" }} />
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
                        <Input.Password style={{ height: "50px" }} />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password style={{ height: "50px" }}/>
                    </Form.Item>
                    <Form.Item
                        name="phoneNumber"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                height: '50px',
                            }}
                            
                        />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            {
                                required: true,
                                message: 'Please select gender!',
                            },
                        ]}
                    >      
                        <Select  placeholder="select your gender">
                            <Option value={UserGender.MALE}>Male</Option>
                            <Option value={UserGender.FEMALE}>Female</Option>
                        </Select>
                        
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className="signin-button" type="primary" htmlType="submit">
                            Create an account
                        </Button>
                    </Form.Item>
                    <div className="footer">
                        <p>Already have an account?</p>
                        <button><Link to="/signin">Sign in</Link></button>
                    </div>
                </Form>
            </div>
        </div>

    );
}

export default ApplyTutor;
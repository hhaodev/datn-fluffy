import { Link, useNavigate, } from "react-router-dom";
import { Button, Form, Input, Select } from 'antd';
import { gql, useMutation } from '@apollo/client';
import { UserGender, UserType } from '../../constraint';
import { useState } from "react";
import "../ApplyTutor/ApplyTutor.css"
import { useDispatch } from "react-redux";
import { setVerify } from "../../Redux/features/verifySlice";
import imgsignin from '../../assets/images/backgroundsignin.png'


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
            type: UserType.STUDENT
        }
        const getData = async () => {
            const result = await signUp({
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
        <div className="apply_gr">
            {status && navigate("/verifi")}
            <div className="apply__logo">
                <h1><Link to="/" className="logo__apply">Fluffy</Link></h1>
            </div>

            <div className="img-apply">
                {/* <h2 className="signin__h1">welcome to Fluffy, sign in now to reach your goal !!!</h2> */}
                <img src={imgsignin} alt="" className="img__bgapply" />
            </div>

            <div className="apply__all">
                <h1 className="apply__heading">Apply to become a Tutor</h1>
                <button className="apply__social">
                    <i className="bx bxl-google apply__social-icon " />
                    <span className="apply_social-text">Sign up with google</span>
                </button>
                <div className="apply__or"><span>Or</span></div>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <div className="apply__firstlast">
                        <Form.Item
                            label="Firstname"
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your firstname!',
                                },
                            ]}
                            className="apply__first"
                        >
                            <Input style={{ height: "35px" }} />
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
                        <Input style={{ height: "35px" }} />
                    </Form.Item >
                    </div >

                    <div className="apply__email">
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
                    </div>


                    <div className="apply__password">
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        className="apply__pass"
                    >
                        <Input.Password style={{ height: "40px" }} />
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
                        <Input.Password style={{ height: "40px" }} />
                    </Form.Item >
                    </div >

                    <div className="apply__phone">
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        
                    >
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                        className="apply__phonepadding"
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                height: '40px',
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
                    {/* </div>

                    <div className="signup__gender"> */}
                    
                    </div>

                    <div className="apply__submit">
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className="apply-button" type="primary" htmlType="submit">
                Sign up
            </Button>
        </Form.Item>
                    </div >
                </Form >
            </div >
        </div >
    );
}

export default ApplyTutor;
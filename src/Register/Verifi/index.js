import { Button, Form, Input } from 'antd';
import { useNavigate, } from "react-router-dom";
import { useSelector } from 'react-redux';
import { gql, useMutation } from '@apollo/client';
import { useState } from "react";
import { UserType } from '../../constraint';




function Verifi() {
    const navigate = useNavigate()
    const dataVerify = useSelector(state => state.verify.verify)
    const VERIFY = gql`
    mutation verifyCode($input: CodeVerifyDto!) {
        verifyCode(input: $input  ) {
            token
            refreshToken
            type
        }
    }
`;
    const [verify, { loading }] = useMutation(VERIFY);
    const onFinish = (values) => {
        const datatemp = {
            code: values.code,
            email: dataVerify
        }
        const getData = async () => {
            try {
                const result = await verify({
                    variables: {
                        input: datatemp,
                    },
                    
                });
                alert("Đăng ký thành công!")
                localStorage.setItem("token", result.data.verifyCode.token)
                localStorage.setItem("refreshToken", result.data.verifyCode.refreshToken)
                if (result.data.verifyCode.type === "STUDENT") {
                    navigate("/onboardstudent")
                } else if (result.data.verifyCode.type === "TUTOR") {
                    navigate("/onboardtutorstep1")
                }

            } catch (error) {
                alert(error.message)
            }
        }
        getData()

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <span>vui long kiem tra email: </span><span>{dataVerify}</span>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="your code"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your code!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Verifi;
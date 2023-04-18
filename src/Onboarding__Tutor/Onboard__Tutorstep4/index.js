import React from 'react'
import '../../Onboarding__Tutor/Onboard__Tutorstep4/OnboardTutor__Step4.css'
import { Button, Steps } from 'antd';
import {
    Form,
    Input,
} from 'antd';
import client from '../../configGQL';
import { gql } from '@apollo/client';



function OnboardTutor__Step4() {



    const description = '';
    const items = [
        {
            title: 'Done',
            description,
        },
        {
            title: 'Done',
            description,
        },
        {
            title: 'Done',
            description,
        },
        {
            title: 'Waiting',
            description,
        },
    ];
    const onFinish = (values) => {
        console.log(values);
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleCreate = () => {
        client.query({
        query: gql`
        query connectStripeAccount{
            connectStripeAccount{
                connectedAccountUrl
            }
        }`
        })
        .then(result => {
            window.location.href = result.data.connectStripeAccount.connectedAccountUrl
        })
        .catch(error => {console.log(error);})
        
    }

    return (
        <div className='step4__body'>
            {/* <h1 className="step4__logo">Fluffy</h1> */}
            <div className='step4__step'>
                <>
                    <Steps current={3} labelPlacement="vertical" items={items} />
                </>
            </div>
            <div className='step4__wrapper'>
                <div className="box__step4">
                    <h2 className="step4__h2">Stripe</h2>
                    <Form
                        name="normal"
                        className="form__dropdown"

                        initialValues={{
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="ID"
                            name="idStripe"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        <Button type="primary" htmlType="submit" className="student__buttonsub3">
                            Submit
                        </Button>
                    </Form>
                    <div className='step4__fot'>
                        <p>Do not have an account?</p>
                        <Button onClick={()=>handleCreate()}>Create account</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnboardTutor__Step4;

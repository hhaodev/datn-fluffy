import React from 'react'
import { Link } from 'react-router-dom';
import '../../Onboarding__Tutor/Onboard__Tutorstep4/OnboardTutor__Step4.css'
import { Button, Steps } from 'antd';



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
    return (
        <div className='step4__body'>
            <h1 className="step4__logo">Fluffy</h1>
            <div className='step4__step'>
                <>
                    <Steps current={3} labelPlacement="vertical" items={items} />
                </>
            </div>
            <div className='step4__wrapper'>
                <div className="box__step4">
                    <h2 className="step4__h2">Stripe</h2>
                    <Link to=""><Button>Connect Stripe</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default OnboardTutor__Step4;

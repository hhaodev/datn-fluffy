import React from 'react'
import '../../Onboarding__Tutor/Onboard__Tutorstep4/OnboardTutor__Step4.css'
import { Button, Steps } from 'antd';



function OnboardTutor__Step4() {
    const description = 'Academic Level';
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
                    <Steps current={3} labelPlacement="vertical" items={items} className='step1__stepss' />
                </>
            </div>
            <div className='step4__wrapper'>
                <Button>Connect Stripe</Button>
            </div>
        </div>
    );
}

export default OnboardTutor__Step4;
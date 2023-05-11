
import { useNavigate } from 'react-router-dom';
import '../../Register/Verify/verify.css'
import { useEffect } from 'react';
import React, { Fragment } from 'react';
import client from '../../configGQL';
import { gql } from '@apollo/client';
import { useState } from 'react';

function Pending() {
    const [status, setStatus] = useState(true)
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        navigate('/')
        window.location.reload(false);
    }
    useEffect(() => {
        client.query({
            query: gql`
            query {
                getMe{
                    tutorProfile{
                        status
                    }
                }
            }`
        })
            .then(result => {
                if (result.data.getMe.tutorProfile.status === "APPROVED") {
                    navigate('/dashboard')
                } else {
                    setStatus(false)
                }
            })
            .catch(error => { })
    }, []);

    return (
        status
            ?
            <Fragment/>
            :
            <div className='verify__body'>
                <div className='verify__wrapper'>
                    <div className='box__verify'>
                        <h2 className="verify__h2">Fluffy</h2>
                        <>
                            <div className='verify_thanks'>
                                <h3> Thank you for completing the profile</h3>
                            </div>
                            <br />
                            <div className='verify_thanks1'>
                                <h3>We will get back to you as soon as possible</h3>
                            </div>
                            <div className='verify_button1'>
                                <button onClick={handleClick} className='verify_oke'>OK !</button>
                            </div>
                        </>
                    </div>
                </div>
            </div>
    )
}

export default Pending;

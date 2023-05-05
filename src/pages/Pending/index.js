
import { useNavigate } from 'react-router-dom';
import '../../Register/Verify/verify.css'
import { useEffect } from 'react';
import client from '../../configGQL';
import { gql } from '@apollo/client';

function Pending() {
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
                        educations{
                            id
                        }
                        experiences{
                            id
                        }
                        certifications{
                            id
                        }
                    }
                    studentProfile{
                        studentEducations{
                            id
                        }
                    }
                }
            }`
        })
            .then(result => {
                if(result.data.getMe.tutorProfile.status==="APPROVED"){
                    navigate('/dashboard')
                }
            })
            .catch(error => { })
    }, []);

    return (
        <div className='verify__body'>
            <div className='verify__wrapper'>
                <div className='box__verify'>
                    <h2 className="verify__h2">Fluffy</h2>
                    <>
                        <h3> Thank you for completing the profile</h3>
                        <br />
                        <h3>We will get back to you as soon as possible</h3>
                        <button onClick={handleClick}>OK!</button>
                    </>
                </div>
            </div>
        </div>
    );
}

export default Pending;

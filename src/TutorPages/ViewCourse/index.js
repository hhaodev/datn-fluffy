import '../ViewCourse/viewcourse.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';
import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import sidebarlogo from '../../assets/images/logo-removebg-preview.png'
import avt1 from "../../assets/images/avt1.jpg"
import { gql } from '@apollo/client';
import client from '../../configGQL';



function ViewCourse() {
    const { id } = useParams()
    const navigate = useNavigate()

    

    const DELETECOURSEBYID = gql`
    mutation deleteCourseById($courseId: String!) {
        deleteCourseById(courseId: $courseId) {
            message
            success
        }
    }
    `

    const handleEditCourse = () => {
    
    }
    const handleDeleteCourse = () => {
        let input = { courseId: id }
        const deteleCourseById = async (client, input) => {
            try {
                const { data } = await client.mutate({
                    mutation: DELETECOURSEBYID,
                    variables: input,
                });
                return data;
            } catch (error) {
                alert(error);
            }
        };
        deteleCourseById(client, input)
            .then((result) => {
                if (result.deleteCourseById.success) {
                    alert("Xoá course thành công")
                    navigate('/mycoursett')
                }
            }
            )
            .catch((error) => alert(error));
    }
    return (
        <>
            {/* SIDEBAR */}
            <section id="course__sidebar">
                <Link to="" className="Course__brand">
                    <img src={sidebarlogo} className='student__imglogo'></img>
                    <span className="student__logos">Fluffy</span>
                </Link>
                <ul className="course__side-menu top">
                    <li>
                        <Link to="/dashboardtt">
                            <i className='bx bx-home' ></i>
                            <span className="course__text">Dashboard</span>
                        </Link>
                    </li>
                    <li className='active'>
                        <Link to="/mycoursett">
                            <i className='bx bx-book-open'></i>
                            <span className="course__text">Courses</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mystudent">
                            <i className='bx bx-male-female'></i>
                            <span className="course__text">My Student</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sessiontt">
                            <i className='bx bxs-objects-horizontal-left'></i>
                            <span className="course__text">Session</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/paymenttutor">
                            <i className='bx bx-credit-card' ></i>
                            <span className="course__text">Payment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" >
                            <i className='bx bxs-message-minus' ></i>
                            <span className="course__text">Feedback</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/viewprofile">
                            <i class='bx bxs-user-circle'></i>
                            <span className="course__text">Profile</span>
                        </Link>
                    </li>
                </ul>
            </section>
            {/* SIDEBAR */}

            <section id="content">
                {/* NAVBAR */}
                <Navbar />
                {/* NAVBAR */}
                <main>
                    <div className="feedback__head-title">
                        <div className="feedback__left">
                            <h1>View Course</h1>
                        </div>
                        {/* <h1 className='feedback__h1'>FeedBack</h1> */}
                    </div>

                    <div className='course__alls'>
                        <div className="box__student">
                            <div className="student__thumb">
                                <img  alt="" className="student__img2" />
                            </div>
                            <div className="student__tutor">
                                <img src={avt1} alt="" className="student__img1" />
                                <div className="student__info">
                                    <h3 className="student__h32"></h3>
                                </div>
                            </div>
                            <h3 className="student__title">aaaa</h3>
                            <p className='student__des'>aaaa</p>
                            <div className='course__buttonlink'>
                                <Button onClick={handleEditCourse} className="inline-btn">Edit</Button>
                                <Button onClick={handleDeleteCourse} className="inline-btn">Delete</Button>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

        </>
    );
}

export default ViewCourse;
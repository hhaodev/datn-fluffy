import '../../TutorPages/Courses/courses.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { Segmented } from 'antd';
import Navbar from '../component/Navbar';
import client from '../../configGQL';
import { gql } from '@apollo/client';
import { useSelector } from 'react-redux';
import Courses from '../component/course';


function MyCoursestt() {
  const [courseList, setCourseList] = useState([])
  const userId = useSelector(state => state.user.currentUser.id)

  
  useEffect(() => {
    client.query({
      query: gql`
      query getCoursesByTutorId($tutorId: String!, $query: QueryFilterDto!){
        getCoursesByTutorId(tutorId: $tutorId, query: $query) {
          items{
            id
            name
            isPublish
            imageUrl
            spendTime
            description
            coursePrograms {
              id
              isPublish
            }
          }
        }
      }`,
      variables: {
        query: {
          page: 1,
          limit: 10,
        },
        tutorId: `${userId}`
      }
    })
      .then(result => {setCourseList(result.data.getCoursesByTutorId.items)})
  }, [userId]);




  return (
    <div>
      {/* SIDEBAR */}
      <section id="course__sidebar">
        <a href="" className="Course__brand">
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li>
            <Link to="/dashboardtt">
              <i className='bx bx-home' ></i>
              <span className="course__text">Dashboard</span>
            </Link>
          </li>
          <li className="active">
            <Link to="/mycoursett">
              <i className='bx bx-book-open'></i>
              <span className="course__text">Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/mystudent">
              <i class='bx bx-male-female'></i>
              <span className="course__text">My Student</span>
            </Link>
          </li>
          <li>
            <Link to="/sessiontt">
              <i class='bx bxs-objects-horizontal-left'></i>
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
            <Link to="/feedback">
              <i class='bx bxs-message-minus' ></i>
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
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="course__head-title">
            <div className="course__left">
              {/* <h1>Tutor</h1>
              <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Course</a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="course-container">
            <div className="title-container">
              <h1 className='course__h1tittle'>Teaching Course</h1>
              <Link to="/addcourse"><button className="add-course"><i class='bx bx-plus add__plus'></i>Add Course</button></Link>
            </div>
            {/* <div className='course__padding'> */}
            <Segmented options={['Technology', 'Languages', 'Economics', 'Marketing', 'Design']} className='course__segmented' />
            <div className="student__box">
            {courseList.map((data) => {
                return (
                  <Courses
                  data={data}
                  />
                );
              })}
            </div>
            {/* </div> */}
          </div>




        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default MyCoursestt;

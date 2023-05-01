import '../../TutorPages/MyStudent/mystudent.css';
import { Link } from 'react-router-dom';
import { Table, Modal, Button, Form, Input } from 'antd';
import Navbar from '../component/Navbar';
import React, { useEffect, useState } from 'react';
import userstudent from '../../assets/images/avt1.jpg';
import { Avatar } from 'antd';
import avt from '../../../src/assets/images/avt1.jpg';
import sidebarlogo from '../../assets/images/logo-removebg-preview.png'
import client from '../../configGQL';
import { gql } from '@apollo/client';


const MyStudenttutor = () => {
  const [studentList, setstudentList] = useState([])

  useEffect(() =>  {
    client.query({
      query: gql`
      query getStudent {
        getMyStudents(query: {
          limit: 10,
          page: 1
        }){
          items {
            id
            email
            firstName
            lastName
            phoneNumber
            gender
            studentProfile {
              studentId
              studentEducations {
                fromYear
              }
            }
          }
        }
      }`,
      variables: {
        query: {
          page: 1,
          limit: 10,
        },
      }
    })
    .then(result => {setstudentList(result.data.getMyStudents.items)})
  })
  


  // Table       
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleViewMoreClick = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
    setIsModalVisible(false);
  };

  // const dataSource = [
  //     {
  //       id: '1323',
  //       firstName: 'jajs',
  //       lastName: 'ssdsd',
  //       phonenumber: '611212',
  //       gender: 'male',
  //     }
  // ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'First name',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'Last name',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
    },
    {
      title: 'Phone number',
      dataIndex: 'phonenumber',
      key: 'phonenumber',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Detail',
      key: 'detail',
      render: () => (
        <Button type="primary" onClick={handleViewMoreClick} className='view__payment'>
          More
        </Button>
      ),
    },
  ];
  // end Table
  return (
    <>
      {/* SIDEBAR */}
      <section id="course__sidebar">
        <a href="" className="Course__brand">
        <img src={sidebarlogo} className='student__imglogo'></img>
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li>
            <Link to="/dashboardtt">
              <i className='bx bx-home' ></i>
              <span className="course__text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/mycoursett">
              <i className='bx bx-book-open'></i>
              <span className="course__text">Courses</span>
            </Link>
          </li>
          <li className="active">
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
            <Link to="/feedback">
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
        {/* MAIN */}
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1>My student</h1>
              {/* <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">My Student</a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className='mystdtutor__content'>
            <Table  dataSource={studentList.map((data) => {
              console.log(data);
                        return (
                          {
                            id:data.id, email:data.email,  firstname:data.firstName, lastname:data.lastName, avatar:data.avatar, phonenumber:data.phoneNumber, gender:data.gender
                          }
                        )
            })} columns={columns}
            />

            
            <Modal title="Profile" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <Form form={form} name="view-more-form" onFinish={onFinish}>

                <div className='mystdtt__avtt'>
                  <Avatar
                    size={{
                      xs: 24,
                      sm: 32,
                      md: 40,
                      lg: 64,
                      xl: 80,
                      xxl: 100,
                    }}
                    src={avt}
                    className='view__avt2'
                  />
                  <p className='mystdtt__name'>Tran Thanh Hoang</p>
                </div>
                <div className='ag1'>
                  <p className='mystdtt__age'>Age:</p>
                  <p>22</p>
                </div>
                <div className='school1'>
                  <p className='mystdtt__school'>School:</p>
                  <p>Duy Tan University</p>
                </div>
                <div className='courses1'>
                  <p className='mystdtt__courses'>Courses:</p>
                  <p>GraphQL with React: The Complete Developers Guide</p>
                </div>
              </Form>
            </Modal>
          </div>

        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}

export default MyStudenttutor;
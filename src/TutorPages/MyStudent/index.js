import '../../TutorPages/MyStudent/mystudent.css';
import { Link } from 'react-router-dom';
import { Table, Modal, Button, Form, Input } from 'antd';
import Navbar from '../component/Navbar';
import React, { useState } from 'react';
import { Avatar } from 'antd';
import avt from '../../../src/assets/images/avt1.jpg';
import sidebarlogo from '../../assets/images/logo-removebg-preview.png'

const MyStudenttutor = () => {
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

  const dataSource = [
    {
      id: '1323',
      name: 'Tran Thanh Hoang',
      status: 'Done',
    },
    {
      id: '2232',
      name: 'Jim Green',
      status: 'To Do',
    },
    {
      id: '3232',
      name: 'Joe Black',
      status: 'Inprogress',
    },
    {
      id: '6663',
      name: 'John Brown',
      status: 'To Do',
    },
    {
      id: '9981',
      name: 'John Brown',
      status: 'Done',
    },
    {
      id: '6512',
      name: 'John Brown',
      status: 'To Do',
    },
    {
      id: '8872',
      name: 'John Brown',
      status: 'Done',
    },
    {
      id: '6652',
      name: 'John Brown',
      status: 'Done',
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Detail',
      key: 'detail',
      render: (text, record) => (
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
        <main className='course__allname'>
          <div className="course__head-title">
            <div className="course__left">
              <h1 className='course__studentmy'><i class='bx bx-universal-access' ></i>My student</h1>
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
            <Table dataSource={dataSource} columns={columns} />
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
                  <div className='course__tran'>
                  <p className='mystdtt__name'>Tran Thanh Hoang</p>
                  <p className='my__font'>ID: 262277</p>
                  </div>
                </div>
                <div className='ag1'>
                  <p className='mystdtt__age'>Age:</p>
                  <p className='my__font'>22</p>
                </div>
                <div className='ag1'>
                  <p className='mystdtt__age'>Date of birth:</p>
                  <p className='my__font'>22/10/2001</p>
                </div>
                <div className='ag1'>
                  <p className='mystdtt__age'>Email:</p>
                  <p className='my__font'>tranthanhhoang28022001@gmail.com</p>
                </div>
                <div className='school1'>
                  <p className='mystdtt__school'>School:</p>
                  <p className='my__font'>Duy Tan University</p>
                </div>
                <div className='courses1'>
                  <p className='mystdtt__courses'>Courses:</p>
                  <p className='my__font'>GraphQL with React: The Complete Developers Guide</p>
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
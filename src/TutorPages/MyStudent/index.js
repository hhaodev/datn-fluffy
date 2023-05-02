import "../../TutorPages/MyStudent/mystudent.css";
import { Link } from "react-router-dom";
import { Table, Modal, Button, Form, Input } from "antd";
import Navbar from "../component/Navbar";
import React, { useState } from "react";
import userstudent from "../../assets/images/avt1.jpg";
import { Avatar } from "antd";
import avt from "../../../src/assets/images/avt1.jpg";
import sidebarlogo from "../../assets/images/logo-removebg-preview.png";

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
      id: "1323",
      name: "John Brown",
      status: "Done",
    },
    {
      id: "2232",
      name: "Jim Green",
      status: "To Do",
    },
    {
      id: "3232",
      name: "Joe Black",
      status: "Inprogress",
    },
    {
      id: "6663",
      name: "John Brown",
      status: "To Do",
    },
    {
      id: "9981",
      name: "John Brown",
      status: "Done",
    },
    {
      id: "6512",
      name: "John Brown",
      status: "To Do",
    },
    {
      id: "8872",
      name: "John Brown",
      status: "Done",
    },
    {
      id: "6652",
      name: "John Brown",
      status: "Done",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Detail",
      key: "detail",
      render: (text, record) => (
        <Button
          type="primary"
          onClick={handleViewMoreClick}
          className="view__payment"
        >
          More
        </Button>
      ),
    },
  ];
  // end Table
  return (
    <>
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

          <div className="mystdtutor__content">
            <Table dataSource={dataSource} columns={columns} />
            <Modal
              title="Profile"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form form={form} name="view-more-form" onFinish={onFinish}>
                <div className="mystdtt__avtt">
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
                    className="view__avt2"
                  />
                  <p className="mystdtt__name">Tran Thanh Hoang</p>
                </div>
                <div className="ag1">
                  <p className="mystdtt__age">Age:</p>
                  <p>22</p>
                </div>
                <div className="school1">
                  <p className="mystdtt__school">School:</p>
                  <p>Duy Tan University</p>
                </div>
                <div className="courses1">
                  <p className="mystdtt__courses">Courses:</p>
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
};

export default MyStudenttutor;

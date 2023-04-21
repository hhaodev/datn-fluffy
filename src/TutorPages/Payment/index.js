import '../../TutorPages/Payment/paymentt.css'
import { Link } from 'react-router-dom'
import Navbar from '../component/Header';
import React, { useState } from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { Radio, Select } from 'antd';


const PaymentTutor = () => {
  // search
  // const renderTitle = (title) => (
  //   <span>
  //     {title}
  //     <a
  //       style={{
  //         float: 'right',
  //       }}
  //       href="https://www.google.com/search?q=antd"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       more
  //     </a>
  //   </span>
  // );
  // const renderItem = (title, count) => ({
  //   value: title,
  //   label: (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'space-between',
  //       }}
  //     >
  //       {title}
  //       <span>
  //         <UserOutlined /> {count}
  //       </span>
  //     </div>
  //   ),
  // });
  // end search

  // datapicker
  const dateFormatList = ['DD/MM/YYYY'];
  // End datapicker

  // sort by price
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  // end sort by price

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
      purchase: '1',
      subtotal: 'John Brown',
      Fee: 32,
      total: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  const columns = [
    {
      title: 'Purchase date',
      dataIndex: 'purchasedate',
      key: 'purchasedate',
    },
    {
      title: 'Subtotal',
      dataIndex: 'subtotal',
      key: 'subtotal',
    },
    {
      title: 'Fee',
      dataIndex: 'fee',
      key: 'fee',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentmethod',
      key: 'paymentmethod',
    },
    {
      title: 'Payment ID',
      dataIndex: 'paymentid',
      key: 'paymentid',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="primary" onClick={handleViewMoreClick} className='view__payment'>
          View more
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
          <li className="active">
            <Link to="">
              <i className='bx bx-credit-card' ></i>
              <span className="course__text">Payment</span>
            </Link>
          </li>
          <li >
            <Link to="/feedback">
              <i className='bx bxs-message-minus' ></i>
              <span className="course__text">Feedback</span>
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
              <h1>Payment</h1>
              <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Payment</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='payment__container'>
            <div className='payment__header'>

              {/* Search */}
              <div className=''>
                <AutoComplete
                  popupClassName="certain-category-search-dropdown"
                  dropdownMatchSelectWidth={500}
                  style={{
                    width: 250,
                  }}
                >
                  <Input.Search size="large" placeholder="input here" />
                </AutoComplete>
              </div>
              {/* end Search */}

              {/* Datepicker */}
              <div className=''>
                <Space direction="vertical"style={{
                    width: 250,
                  }} size={12}>
                  <DatePicker defaultValue={dayjs('21/04/2023', dateFormatList[0])} format={dateFormatList} />
                </Space>
              </div>
              {/* end Datepicker */}

              {/* sort by price */}
              <div className=''>
                <Select
                  size={size}
                  defaultValue="a1"
                  placeholder="Sort by price"
                  onChange={handleChange}
                  style={{
                    width: 200,
                  }}
                  options={options}
                />
              </div>
              {/* end sort by price */}

              {/* sort by purchase date */}
              <div className=''>
                <Select
                  size={size}
                  defaultValue="a1"
                  placeholder="Sort by price"
                  onChange={handleChange}
                  style={{
                    width: 200,
                  }}
                  options={options}
                />
              </div>
              {/* end sort by purchase date */}

            </div>
            <div className='payment__table'>
              <Table dataSource={dataSource} columns={columns} />
              <Modal title="Bill" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} name="view-more-form" onFinish={onFinish}>
                  
                </Form>
              </Modal>
            </div>
          </div>

        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}

    </>
  );
}

export default PaymentTutor;
import '../../TutorPages/Session/session.css'
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.jpg'
import { Link } from 'react-router-dom'
import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Select, Button, Table } from 'antd'
import Navbar from '../component/Navbar';



function sessionTutor() {
  const columns = [
    {
      title: 'Date',
      width: 60,
      dataIndex: 'date',
      key: 'date',
      fixed: 'left',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: '1',
      width: 60,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: '2',
      width: 60,
    },
    {
      title: 'Session',
      dataIndex: 'session',
      key: '3',
      width: 60,
    },
    {
      title: 'Tutor',
      dataIndex: 'tutor',
      key: '4',
      width: 100,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: '5',
      fixed: 'right',
      render: () => <a className='session__booked'>Booked</a>,
      width: 50,
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }


  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  dayjs.extend(customParseFormat);
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
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
          <li>
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
          <li className="active">
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
              <h1>Session</h1>
              {/* <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Session</a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className='session__all'>
            <div className='session__date'>
              <p>From</p>
              <Space direction="vertical" size={12}>
                <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
              </Space>
              <p>To</p>
              <Space direction="vertical" size={12}>
                <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
              </Space>

              <Select
                showSearch
                placeholder="Course"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'reactjs',
                    label: 'ReactJs',
                  },
                  {
                    value: 'bootstrap',
                    label: 'Bootstrap',
                  },
                  {
                    value: 'gamedesign',
                    label: 'Game Design',
                  },
                  {
                    value: 'codeuniy',
                    label: 'Code Unity',
                  },
                ]}
                className="session__select"

              />

              <Select
                showSearch
                placeholder="Tutor"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'david',
                    label: 'David',
                  },
                  {
                    value: 'statham',
                    label: 'Statham',
                  },
                  {
                    value: 'ciniver',
                    label: 'Ciniver',
                  },
                  {
                    value: 'evon',
                    label: 'Evon',
                  },
                ]}
                className="session__select"

              />


              <Select
                showSearch
                placeholder="Status"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'begin',
                    label: 'Begin',
                  },
                  {
                    value: 'in progress',
                    label: 'In Progress',
                  },
                  {
                    value: 'finish',
                    label: 'Finish',
                  },
                  {
                    value: 'to do',
                    label: 'To Do',
                  },
                  {
                    value: 'Done',
                    label: 'Done',
                  },
                ]}
                className="session__select"

              />

              <Button type="primary" htmlType="submit" className='session__filter'>
                Filter
              </Button>

              <Button type="default" htmlType="submit" className=''>
                Clear
              </Button>
            </div>


            <Table
              columns={columns}
              dataSource={data}
              scroll={{
                x: 1500,
                y: 300,
              }}
            />

          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default sessionTutor;

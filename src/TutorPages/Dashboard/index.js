
import '../../TutorPages/Dashboard/dashboard.css'
import { Link } from 'react-router-dom'
import React from 'react';
import { DatePicker, Space } from 'antd';
import { Select, Button, Table } from 'antd'
import Navbar from '../component/Header';
import { List } from 'antd';
import { Progress } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import welcomett from '../../assets/images/welcome-removebg-preview.png'

function DashBoardtutor() {

  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];


  return (
    <div>
      {/* SIDEBAR */}
      <section id="course__sidebar">
        <a href="" className="Course__brand">
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li className="active">
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
          <div className='dashboard__all'>
            <ul class="box-info">
              <li>
                <i class='bx bxs-calendar-check' ></i>
                <span class="text">
                  <h3>129</h3>
                  <p>Course</p>
                </span>
              </li>
              <li>
                <i class='bx bxs-group' ></i>
                <span class="text">
                  <h3>260</h3>
                  <p>Student</p>
                </span>
              </li>
              <li>
                <i class='bx bxs-dollar-circle' ></i>
                <span class="text">
                  <h3>$2543</h3>
                  <p>Total Money</p>
                </span>
              </li>
            </ul>

            <div className="table-data">
              <div className='dashboard__welcome'>
                <div className='dashboard__tieude'>
                  <h1 className='dashboard__welh1'>Welcome back, John!</h1>
                  <p className='dashboard__rightp'>Your students completed <span className='dashboard__span'> 94% </span>of the tasks Progress is very good!</p>
                </div>
                 <img src={welcomett} className='dashboard__img'></img>
              </div>

              <div className='dashboard__part'>
                <div className='dashboard__trum'>
                  <div className='dashboard__work'>
                    <p className='dashboard__working'>
                       Working hours
                    </p>
                  </div>
                  <div className='dashboard__select'>
                    <Select
                      labelInValue
                      defaultValue={{
                        value: 'today',
                        label: 'Today',
                      }}
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: 'tomorrow',
                          label: 'Tomorrow',
                        },
                        {
                          value: 'last week',
                          label: 'Last week',
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className='dashboard__tik'>
                  <Space wrap >
                    <Progress type="circle" percent={75} className='dashboard__size' />
                  </Space>
                  <div className='dashboard__circle'><i class='bx bxs-circle'></i>Done</div>

                </div>


              </div>

              <div >
                <Row gutter={16}>
                  <Col span={12}>
                    <Card bordered={false}>
                      <Statistic
                        title="Active"
                        value={11.28}
                        precision={2}
                        valueStyle={{
                          color: '#3f8600',
                        }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card bordered={false}>
                      <Statistic
                        title="Idle"
                        value={9.3}
                        precision={2}
                        valueStyle={{
                          color: '#cf1322',
                        }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>


            <div className='dashboard__box2'></div>
          </div>


        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
}

export default DashBoardtutor;
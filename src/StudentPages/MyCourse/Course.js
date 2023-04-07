import '../../StudentPages/MyCourse/Course.css'
import React, { useState } from 'react';
import { Menu, Avatar, Dropdown, Input, Row, Col } from 'antd';
import { HomeOutlined, BookOutlined, DollarCircleOutlined, DownOutlined } from '@ant-design/icons';
import '../../StudentPages/MyCourse/Course.css';

import { Card, Rate, Button, Tag } from 'antd';

const { Meta } = Card;
const { Search } = Input;

function Mycourse() {
    const [selectedMenuItem, setSelectedMenuItem] = useState('home');

    const handleMenuClick = (e) => {
      setSelectedMenuItem(e.key);
    };
  
    const menu = (
      <Menu>
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu>
    );
    return ( 
        <div>
      <div className="navigation-bar">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <Menu onClick={handleMenuClick} selectedKeys={[selectedMenuItem]} mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="my-course" icon={<BookOutlined />}>
            My Course
          </Menu.Item>
          <Menu.Item key="payment" icon={<DollarCircleOutlined />}>
            Payment
          </Menu.Item>
        </Menu>
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar className="avatar" src="/path/to/avatar.png" icon={<DownOutlined />} />
        </Dropdown>
      </div>

      <div className="content">
        <div className="left-content">
          <img src="/path/to/image.png" alt="Image" />
          <h1>Page Title</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="right-content">
          <Input.Search
            size="large"
            placeholder="Search"
          />
          <img src="/path/to/profile-image.png" alt="Profile" />
        </div>
      </div>

      <Card
      cover={<img alt="Course Image" src="path/to/image.jpg" />}
      actions={[
        <Button type="primary">Đăng ký</Button>,
        <Button type="ghost">Tìm hiểu thêm</Button>,
      ]}
      className="course-card"
    >
      <Meta
        title="Tên khoá học"
        description={
          <>
            <div className="course-info">
              <Rate disabled defaultValue={5} /> <span className="rating">5 sao</span>
            </div>
            <div className="course-info">
              Tên gia sư: John Doe
            </div>
            <div className="course-info">
              Lịch dạy: <Tag color="orange">Thứ Hai - Thứ Sáu</Tag>
            </div>
            <div className="course-info">
              Giá khoá học: 1000000 VND
            </div>
          </>
        }
      />
    </Card>

    </div>
    );
}

export default Mycourse;
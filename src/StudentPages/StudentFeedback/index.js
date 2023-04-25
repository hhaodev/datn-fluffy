import '../../StudentPages/StudentFeedback/studentfeedback.css'
import { Link } from 'react-router-dom'
import Navbar from '../../TutorPages/component/Header';
import { DownOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.jpg'
import { Avatar, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Select, Form, } from 'antd';
import { Input, InputNumber } from 'antd';
import { Rate, Button } from 'antd';


function FeedBackStudent() {
  // description

  // avt
  const menu = (
    <Menu>

      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout" onClick={() => handleLogout()}>Logout</Menu.Item>
    </Menu>
  );
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("refreshToken")
    navigate('/')
    window.location.reload(false);

  };
  //  end avt

  // form
  const onFinish = (values) => {
    const datatemp = {
      email: values.username,
      password: values.password
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // end form
  return (
    <>
      {/* SIDEBAR */}
      <section id="course__sidebar">
        <a href="" className="Course__brand">
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li>
            <Link to="/studenthome">
              <i className='bx bx-home' ></i>
              <span className="course__text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/mycourse">
              <i className='bx bx-book-open'></i>
              <span className="course__text">My Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class='bx bx-calendar' ></i>
              <span className="course__text">Schedule</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className='bx bx-credit-card'></i>
              <span className="course__text">Payment</span>
            </Link>
          </li>
          <li className="active">
            <Link to="/studentfeedback">
              <i className='bx bxs-message-minus' ></i>
              <span className="course__text">Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class='bx bxs-user-circle'></i>
              <span className="course__text">Profile</span>
            </Link>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn"><i className="bx bx-search" /></button>
            </div>
          </form>
          <Dropdown overlay={menu} placement="bottomRight">
            <Avatar className="avatar" src={user} icon={<DownOutlined />} />
          </Dropdown>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1>Feedback</h1>
              {/* <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Payment</a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className='feedbstudent__all'>
            <div className='feedbstudent__allform'>
              <h1 className='feedbstudent__formh1'>Form Feedback</h1>
              <Form
                name="normal_login"
                layout="vertical"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Name Courses"
                  name="namecourses"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}

                >
                  <Select
                    showSearch
                    style={{
                      width: 562,
                    }}
                    placeholder="Select your courses"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                      {
                        value: '1',
                        label: 'Not Identified',
                      },
                      {
                        value: '2',
                        label: 'Closed',
                      },
                      {
                        value: '3',
                        label: 'Communicated',
                      },
                      {
                        value: '4',
                        label: 'Identified',
                      },
                      {
                        value: '5',
                        label: 'Resolved',
                      },
                      {
                        value: '6',
                        label: 'Cancelled',
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  label="Write your review"
                  name="writeyourreview"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input.TextArea showCount maxLength={1000} style={{ height: "60" }} />
                </Form.Item>

                <Form.Item
                  label="Give a Rating"
                  name="givearating"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <div className='feedbstudent__rate'>  <Rate /></div>
                </Form.Item>

                <div className='feedbstudent__submit'>
                  <Button type="primary" htmlType="submit" className='feedbstudent__subs'>
                    Submit
                  </Button>
                  <Button type="default" htmlType="submit" >
                    Cancel
                  </Button>
                </div>

              </Form>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section >
      {/* CONTENT */}

    </>
  );
}

export default FeedBackStudent;
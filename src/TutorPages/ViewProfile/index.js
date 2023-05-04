import '../ViewProfile/viewprofile.css'
import { Link } from 'react-router-dom'
import { Avatar, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import user from '../../../src/assets/images/user.jpg'
import avt from '../../../src/assets/images/avt1.jpg';
import { Button } from 'antd';
import { Form, Input } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import sidebarlogo from '../../assets/images/logo-removebg-preview.png'

function ViewProfile() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        navigate('/')
        window.location.reload(false);
    };
    const menu = (
        <Menu>
            <Menu.Item key="logout" onClick={() => { handleLogout() }}>Log out</Menu.Item>
        </Menu>
    );



    
    const onFinish = (values) => {
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
    return (
        <div className='view__all'>

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
                        <Link to="/feedback">
                            <i className='bx bxs-message-minus' ></i>
                            <span className="course__text">Feedback</span>
                        </Link>
                    </li>
                    <li className="active">
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
                <nav>
                    <i className="bx bx-menu" />
                    <form action="#">
                    </form>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Avatar className="avatar" src={user} icon={<DownOutlined />} />
                    </Dropdown>
                </nav>
                {/* NAVBAR */}
                {/* MAIN */}
                <main className='main__prolife2'>
                    <div className="course__head-title__view">
                        <div className="course__left">
                            <h1><i class='bx bxs-user-circle'></i>View Profile</h1>
                            <div className='view__allform'>
                                <div className='view__form'>
                                    <div className='view__avt'>
                                        <h2 className='view__htitle'>Personal Information</h2>
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
                                        <Button type="primary" htmlType="submit" className="view__upload">
                                            Upload new picture
                                        </Button>
                                        <p className='view__id'>ID: <span className='view__span1'>16612</span></p>
                                        <p className='view__status'>Status: <span className='view__span1'>Approved</span><i class='bx bx-check'></i></p>
                                    </div>

                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        layout="vertical"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                    >
                                        <div className='view__firsts'>
                                            <Form.Item
                                                label="First name"
                                                name="firstname"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your firsname!',
                                                    },
                                                ]}
                                                className='view__firsts1'
                                            >
                                                <Input placeholder='Tran' style={{ height: "50px", width: '258px' }} />
                                            </Form.Item>

                                            <Form.Item
                                                label="Last name"
                                                name="lastname"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your lirsname!',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder='Hoang' style={{ height: "50px", width: '278px'}} />
                                            </Form.Item>
                                        </div>

                                        <div className='view__email'>
                                            <Form.Item
                                                label="Email"
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your email!',
                                                    },
                                                ]}
                                                className='view__firsts1'
                                            >
                                                <Input placeholder='tranthanhhoang28022001@gmail.com' style={{ height: "50px", width: '258px' }} />
                                            </Form.Item>

                                            <Form.Item
                                                label="Date of birth"
                                                name="dateofbirth"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your lirsname!',
                                                    },
                                                ]}
                                            >
                                                <Space direction="vertical" size={12}>
                                                    <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} style={{ height: "50px", width: '278px' }} />
                                                </Space>
                                            </Form.Item>
                                        </div>



                                        <Form.Item
                                            label="School"
                                            name="school"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your school!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Duy Tan University' style={{ height: "50px" }} />
                                        </Form.Item>

                                        <div className='view__bottom'>
                                            <Button type="default" htmlType="submit" className='view__dis'>
                                                Discard
                                            </Button>

                                            <Button type="primary" htmlType="submit" className="view__upload">
                                                Save Changes
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>

                        </div>
                    </div>



                </main>
                {/* MAIN */}
            </section>
            {/* CONTENT */}

        </div>
    );
}

export default ViewProfile;
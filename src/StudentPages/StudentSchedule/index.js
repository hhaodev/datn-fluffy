import '../../StudentPages/StudentSchedule/studentschedule.css';
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Badge, Calendar } from 'antd';
import sidebarlogo from '../../assets/images/logo-removebg-preview.png'

function StudentSchedule() {
    const getListData = (value) => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                ];
                break;
            case 10:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event.',
                    },
                ];
                break;
            case 15:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event',
                    },
                    {
                        type: 'success',
                        content: 'This is very long usual event。。....',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 1.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 2.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 3.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 4.',
                    },
                ];
                break;
            default:
        }
        return listData || [];
    };

    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };
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
                        <Link to="/studenthome">
                            <i className='bx bx-home' ></i>
                            <span className="course__text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/studentmycourse">
                            <i className='bx bx-book-open'></i>
                            <span className="course__text">My Courses</span>
                        </Link>
                    </li>
                    <li className="active">
                        <Link to="/studentschedule">
                            <i class='bx bx-calendar' ></i>
                            <span className="course__text">Schedule</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/studentpayment">
                            <i className='bx bx-credit-card'></i>
                            <span className="course__text">Payment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/studentprofile">
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
                            <h1>My Schedule</h1>
                        </div>
                    </div>


                    <div className='schedule__app'>
                        <Calendar cellRender={cellRender}  className='schedule__calen'/>
                    </div>


                </main>
                {/* MAIN */}
            </section >
            {/* CONTENT */}

        </>
    );
}

export default StudentSchedule;
import '../StudentProfile/studentprofile.css'
import { Avatar, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import user from '../../assets/images/user.jpg'
import { DownOutlined } from '@ant-design/icons';




function StudentProfile() {
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
                    <li>
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
                        <Link to="/studentfeedback">
                            <i className='bx bxs-message-minus' ></i>
                            <span className="course__text">Feedback</span>
                        </Link>
                    </li>
                    <li className="active">
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
                            <h1>My Profile</h1>
                        </div>
                    </div>




                </main>
                {/* MAIN */}
            </section >
            {/* CONTENT */}
        </>
    );
}

export default StudentProfile;
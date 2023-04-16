import '../../TutorPages/MyStudent/mystudent.css'
import { Link } from 'react-router-dom'


function myStudent() {
  return ( 
    <>
     {/* SIDEBAR */}
     <section id="course__sidebar">
        <a href="" className="Course__brand">
          <span className="student__logos">Fluffy</span>
        </a>
        <ul className="course__side-menu top">
          <li>
            <a href="">
              <i className='bx bx-home' ></i>
              <Link to="/dashboardtt"><span className="course__text">Dashboard</span></Link>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bx-book-open'></i>
              <Link to="/mycoursett"><span className="course__text">Courses</span></Link>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bx-male-female'></i>
              <Link to="/mystudent"><span className="course__text">My Student</span></Link>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bxs-objects-horizontal-left'></i>
             <Link to="/sessiontt"><span className="course__text">Session</span></Link>
            </a>
          </li>
          <li>
            <a href="">
              <i className='bx bx-credit-card' ></i>
              <Link to="/paymenttutor"><span className="course__text">Payment</span></Link>
            </a>
          </li>
          <li className="active">
            <a href="">
              <i className='bx bxs-message-minus' ></i>
              <Link to="/feedback"><span className="course__text">Feedback</span></Link>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
    </>
   );
}

export default myStudent;
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
          <li className="active">
            <Link to="/feedback">
              <i className='bx bxs-message-minus' ></i>
              <span className="course__text">Feedback</span>
            </Link>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
    </>
   );
}

export default myStudent;
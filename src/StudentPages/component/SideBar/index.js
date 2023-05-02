import { Link } from "react-router-dom";
import sidebarlogo from "../../../assets/images/logo-removebg-preview.png";
import { UserType } from "../../../constraint";

export const SideBarLayout = ({ children, type }) => {
  if (!type) {
    return;
  }

  return (
    <>
      <section id="course__sidebar">
        <Link href="/home" className="Course__brand">
          <img src={sidebarlogo} className="student__imglogo"></img>
          <span className="student__logos">Fluffy</span>
        </Link>
        <ul className="course__side-menu top">
          <li className="active">
            <Link to="/dashboard">
              <i className="bx bx-home"></i>
              <span className="course__text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/courses">
              <i className="bx bx-book-open"></i>
              <span className="course__text">My Courses</span>
            </Link>
          </li>
          {type === UserType.TUTOR && (
            <>
              <li>
                <Link to="/students">
                  <i class="bx bx-male-female"></i>
                  <span className="course__text">My Student</span>
                </Link>
              </li>
              <li>
                <Link to="/sessions">
                  <i class="bx bxs-objects-horizontal-left"></i>
                  <span className="course__text">Session</span>
                </Link>
              </li>
              <li>
                <Link to="/feedbacks">
                  <i class="bx bxs-message-minus"></i>
                  <span className="course__text">Feedback</span>
                </Link>
              </li>
            </>
          )}

          <li>
            <Link to="/schedules">
              <i class="bx bx-calendar"></i>
              <span className="course__text">Schedule</span>
            </Link>
          </li>
          <li>
            <Link to="/payments">
              <i className="bx bx-credit-card"></i>
              <span className="course__text">Payment</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i class="bx bxs-user-circle"></i>
              <span className="course__text">Profile</span>
            </Link>
          </li>
        </ul>
      </section>
      <>{children}</>
    </>
  );
};

export default SideBarLayout;

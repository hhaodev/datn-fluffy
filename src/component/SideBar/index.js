import React from "react";
import { Link, NavLink } from "react-router-dom";
import sidebarlogo from "../../assets/images/logo-removebg-preview.png";
import { UserType } from "../../constraint";
import "./index.css";

const SideBarLayout = ({ children, type }) => {
  if (!type) {
    return null;
  }

  return (
    <>
      <section id="course__sidebar">
        <Link to="/dashboard" className="Course__brand">
          <img src={sidebarlogo} className="student__imglogo" alt="Sidebar Logo" />
          <span className="student__logos">Fluffy</span>
        </Link>
        <ul className="course__side-menu top">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active_link" : ""
              }
            >
              <i className="bx bx-home"></i>
              <span className="course__text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active_link" : ""
              }
            >
              <i className="bx bx-book-open"></i>
              <span className="course__text">My Courses</span>
            </NavLink>
          </li>
          {type === UserType.TUTOR && (
            <>
              <li>
                <NavLink
                  to="/students"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active_link" : ""
                  }
                >
                  <i className="bx bx-male-female"></i>
                  <span className="course__text">My Student</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sessions"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active_link" : ""
                  }
                >
                  <i className="bx bxs-objects-horizontal-left"></i>
                  <span className="course__text">Session</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/feedbacks"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active_link" : ""
                  }
                >
                  <i className="bx bxs-message-minus"></i>
                  <span className="course__text">Feedback</span>
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/schedules"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active_link" : ""
              }
            >
              <i className="bx bx-calendar"></i>
              <span className="course__text">Schedule</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payments"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active_link" : ""
              }
            >
              <i className="bx bx-credit-card"></i>
              <span className="course__text">Payment</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active_link" : ""
              }
            >
              <i className="bx bxs-user-circle"></i>
              <span className="course__text">Profile</span>
            </NavLink>
          </li>
          {type === UserType.STUDENT && (
            <li>
              <NavLink
                to="/message"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active_link" : ""
                }
              >
                <i className="bx bxs-message-rounded-dots"></i>
                <span className="course__text">Message</span>
              </NavLink>
            </li>
          )}
          {type === UserType.TUTOR && (
            <li>
              <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active_link" : ""
                }
              >
                <i className="bx bxs-message-rounded-dots"></i>
                <span className="course__text">Message</span>
              </NavLink>
            </li>
          )}
        </ul>
      </section>
      <>{children}</>
    </>
  );
};

export default SideBarLayout;
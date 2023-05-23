import "../../TutorPages/Dashboard/dashboard.css";
import React, { useEffect, useState } from "react";
import welcomett from "../../assets/images/welcome-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { gql } from "@apollo/client";
import client from "../../configGQL";
import { setError } from "../../Redux/features/notificationSlice";

const QUERY_GET_TOTAL = gql`
  query getSummary {
    getSummaryOfTutor {
      totalCourse
      totalStudent
    }
  }
`;

function DashBoardtutor() {
  const user = useSelector((state) => state.user.currentUser);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .query({
        query: QUERY_GET_TOTAL,
      })
      .then((res) => {
        setData(res.data.getSummaryOfTutor);
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  }, []);

  return (
    <div>
      <section id="content">
        <main>
          <div className="dashboard__all">
            <ul class="box-info">
              <li>
                <i class="bx bxs-calendar-check"></i>
                <span class="text">
                  <h3>{data && data.totalCourse}</h3>
                  <p className="dashboard__rightp">Course</p>
                </span>
              </li>
              <li>
                <i class="bx bxs-group"></i>
                <span class="text">
                  <h3>{data && data.totalStudent}</h3>
                  <p className="dashboard__rightp">Student</p>
                </span>
              </li>
            </ul>

            <div className="table-data">
              <div className="dashboard__welcome">
                <div className="dashboard__tieude">
                  <h1 className="dashboard__welh1">
                    Welcome back, {user.firstName} {user.lastName}
                  </h1>
                  <p className="dashboard__rightp">
                    Your students completed{" "}
                    <span className="dashboard__span"> 94% </span>of the tasks
                    Progress is very good!
                  </p>
                </div>
                <img src={welcomett} className="dashboard__img"></img>
              </div>
            </div>

            <div className="dashboard__box2"></div>
          </div>
        </main>
        {/* MAIN */}
      </section>
    </div>
  );
}

export default DashBoardtutor;

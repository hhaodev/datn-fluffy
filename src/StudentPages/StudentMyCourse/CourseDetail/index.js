import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import "./index.css";
import graphq from "../../../assets/images/graphic-tablet.png";
import ilu from "../../../assets/images/illustration.png";
import layer from "../../../assets/images/layers.png";
import ilu2 from "../../../assets/images/illustration (1).png";
import rate from "../../../assets/images/rating.png";
import { useParams } from "react-router-dom";
import client from "../../../configGQL";
import { gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setError } from "../../../Redux/features/notificationSlice";
import dayjs from "dayjs";

const backgroundList = [
  { background: "#0067ff", color: "white", image: graphq },
  { background: "#CE76FE", color: "white", image: ilu },
  { background: "#F9DB38", color: "black", image: ilu2 },
  { background: "#ED6F71", color: "white", image: layer },
];

const QUERY_COURSE_ID = gql`
  query getCourseById($courseId: String!) {
    getCourseById(courseId: $courseId) {
      id
      name
      price
      ratting
      imageUrl
      description
      category {
        name
      }
      tutorProfile {
        tutorId
        tutor {
          lastName
          firstName
          avatarUrl
        }
      }
      coursePrograms {
        title
        description
        courseProgramPhases {
          id
          name
          content
        }
      }
    }
  }
`;

const GET_SCHEDULE_BY_COURSE = gql`
  query getScheduleForCourse($query: QueryFilterDto!, $courseId: String!) {
    getScheduleByCourse(query: $query, courseId: $courseId) {
      items {
        isCompleted
        learnTime {
          date
          startTime
          endTime
          courseProgramPhases {
            id
            name
          }
        }
        feedBacks {
          message
          ratting
          createdAt
        }
      }
    }
  }
`;

const CourseDetail = (props) => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [programIndex, setProgramIndex] = useState(0);
  const [phaseId, setPhaseId] = useState(null);
  const [schedules, setSchedules] = useState(null);
  const [feedBack, setFeedback] = useState(null);

  useEffect(() => {
    client
      .query({
        query: QUERY_COURSE_ID,
        variables: { courseId: id },
      })
      .then((response) => {
        setCourse(response.data.getCourseById);
      })
      .catch((error) => {
        dispatch(setError({ type: error.message }));
      });

    client
      .query({
        query: GET_SCHEDULE_BY_COURSE,
        variables: {
          query: {
            limit: 10,
            page: 1,
          },
          courseId: id,
        },
      })
      .then((response) => {
        setSchedules(response.data.getScheduleByCourse.items);
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  }, [id]);

  const handleSetPhase = (phaseId) => {
    let index = null;
    schedules &&
      schedules.forEach((schedule, i) => {
        if (
          schedule.learnTime.courseProgramPhases.findIndex(
            (el) => el.id === phaseId
          ) >= 0
        ) {
          index = i;
        }
      });

    if (index !== null) {
      return schedules[index];
    }
    return null;
  };

  const today = new Date().toDateString().split(" ");

  return (
    <section id="content">
      <h3>{course && course.name}</h3>
      <div className="my-course-detail">
        <div className="my-course-detail-left">
          <div class="activity-header">
            <h3>Course Activity</h3>
            <p>
              {today[1]} {today[2]}th, {today[3]}
            </p>
          </div>
          <div class="activity-content">
            <h3>Course Programs</h3>
            <ul class="activity-course-programs">
              {course &&
                course.coursePrograms.map((program, index) => (
                  <li className="activity-program">
                    <div
                      className="activity-program-header"
                      onClick={() => {
                        setProgramIndex(index);
                        setPhaseId(null);
                        setFeedback(null);
                      }}
                      style={{ background: backgroundList[index].background }}
                    >
                      <img alt="" src={backgroundList[index].image} />
                      <div style={{ color: backgroundList[index].color }}>
                        <h3>{program.title}</h3>
                        <p>{program.description}</p>
                      </div>
                      <label>
                        <span>{program.courseProgramPhases.length}</span>
                      </label>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="my-course-detail-right">
          <div
            className="course-right-content"
            style={{ background: backgroundList[programIndex].background }}
          >
            <h3>Course Programs Phases</h3>
            <ul className="course-right-phases">
              {course &&
                course.coursePrograms[programIndex].courseProgramPhases.map(
                  (phase) => {
                    const schedule = handleSetPhase(phase.id);
                    return (
                      <li
                        className={`course-right-phase ${
                          schedule && schedule.isCompleted
                            ? "completed"
                            : "uncompleted"
                        }`}
                      >
                        <h3>{phase.name}</h3>
                        <div style={{ padding: "10px 0px" }}>
                          <span>
                            Date: {schedule && schedule.learnTime.date}
                          </span>
                          <span>
                            Time: {schedule && schedule.learnTime.startTime} -{" "}
                            {schedule && schedule.learnTime.endTime}
                          </span>
                        </div>
                        <div>
                          <p>{phase.content}</p>
                          {schedule && schedule.isCompleted && (
                            <Link
                              onClick={() => {
                                setPhaseId(phase.id);
                                setFeedback(schedule);
                              }}
                            >
                              My feedback
                            </Link>
                          )}
                        </div>
                      </li>
                    );
                  }
                )}
            </ul>
          </div>
          {phaseId && (
            <div className="course-right-feedback">
              <h3>
                My Feedbacks <img src={rate} />
              </h3>
              <p className="feedback-schedule">
                {feedBack.learnTime.date}
                <span>
                  {feedBack.learnTime.startTime} - {feedBack.learnTime.endTime}
                </span>
              </p>
              <ul className="course-feedback-content">
                {feedBack.feedBacks.map((feedback) => (
                  <li className="feedback-content-today">
                    <div className="feedback-content-phases">
                      <Rate value={feedback.ratting} disabled />
                      <div className="feedback-message">
                        <p>{feedback.message}</p>
                        <label>
                          {dayjs(feedback.createdAt).format("HH:mm DD-MM-YYYY")}
                        </label>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default CourseDetail;

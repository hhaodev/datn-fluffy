import "../../StudentPages/StudentSchedule/studentschedule.css";
import { Calendar } from "antd";
import { Collapse } from "antd";
import { useState } from "react";
import { Button, Modal } from "antd";
import React from "react";
import { Rate } from "antd";
import { Input } from "antd";
import client from "../../configGQL";
import dayjs from "dayjs";
import { gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
const { TextArea } = Input;
const { Panel } = Collapse;

export const SCHEDULE_BY_STUDENT = gql`
  query getSchedule($query: QueryFilterDto!) {
    getSchedulesByStudent(query: $query) {
      items {
        id
        isCompleted
        learnTime {
          endTime
          startTime
          date
          courseProgramPhases {
            name
          }
          set {
            course {
              name
            }
          }
        }
      }
    }
  }
`;

export const MUTATION_FEEDBACK = gql`
  mutation feedBack($input: SubmitFeedbackFormDto!) {
    submitFeedbackForm(input: $input) {
      message
      success
    }
  }
`;

function StudentSchedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [year, setYear] = useState(() => dayjs().get("year"));
  const [feedback, setFeedBack] = useState({
    scheduleId: "",
    message: "",
    ratting: 0,
  });

  const [schedules, setSchedules] = useState(null);

  useState(() => {
    client
      .query({
        query: SCHEDULE_BY_STUDENT,
        variables: {
          query: {
            limit: 99,
            page: 1,
          },
        },
      })
      .then((response) => {
        setSchedules(response.data.getSchedulesByStudent.items);
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  }, [year]);

  const handleSubmitFeedback = (id) => {
    client
      .mutate({
        mutation: MUTATION_FEEDBACK,
        variables: {
          input: { ...feedback, scheduleId: id },
        },
      })
      .then((response) => {
        setFeedBack({
          scheduleId: "",
          message: "",
          ratting: 0,
        });
        setIsModalOpen(false);
        dispatch(setError({ message: "Feedback successfully!" }));
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  };
  return (
    <>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1>My Schedule</h1>
            </div>
          </div>

          <div className="schedule__app">
            <Calendar
              mode={"month"}
              className="schedule__calen"
              dateCellRender={(date) => {
                const renders =
                  schedules &&
                  schedules.map((schedule) => {
                    if (
                      dayjs(date).format("YYYY-MM-DD") ===
                      schedule.learnTime.date
                    ) {
                      return (
                        <li
                          className={
                            schedule.isCompleted
                              ? "schedule-li-content completed"
                              : "schedule-li-content"
                          }
                        >
                          <h5>{schedule.learnTime.set.course.name}</h5>
                          <p>
                            {schedule.learnTime.startTime} -
                            {schedule.learnTime.endTime}
                          </p>
                        </li>
                      );
                    }
                  });

                return renders;
              }}
            />
          </div>

          <div className="feedback_student">
            <div className="course__left">
              <h1 className="feedback_h1feedback">
                Un-completed feedback list:
                <span
                  style={{
                    fontSize: "18px",
                    marginLeft: "10px",
                    color: "red",
                  }}
                ></span>
              </h1>
            </div>

            <div className="feedback_box">
              <Collapse defaultActiveKey={["1"]}>
                {schedules &&
                  schedules
                    .filter(
                      (schedule) =>
                        dayjs(new Date()).isAfter(schedule.learnTime.date) &&
                        schedule.isCompleted === false
                    )
                    // thistle
                    .map((el) => (
                      <Panel
                        header={`${el.learnTime.set.course.name}: ${el.learnTime.startTime} - ${el.learnTime.endTime}`}
                        key={el.id}
                      >
                        <div className="feedback_content1">
                          <div className="feedback_content1_group">
                            {el.learnTime.courseProgramPhases.map((phases) => (
                              <p>{phases.name}</p>
                            ))}
                          </div>
                          <div
                            className="feedback_link"
                            onClick={() => setIsModalOpen(true)}
                          >
                            <Button type="link">Link feedback</Button>
                          </div>
                        </div>

                        <Modal
                          title="Feedback"
                          open={isModalOpen}
                          onCancel={() => {
                            setIsModalOpen(false);
                            setFeedBack({
                              scheduleId: "",
                              message: "",
                              ratting: 0,
                            });
                          }}
                          onOk={() => handleSubmitFeedback(el.id)}
                          closeIcon={<span className="my-close-icon">X</span>}
                        >
                          <div className="box_feedback">
                            <div className="rates1">
                              <Rate
                                className="feedback_rates"
                                value={feedback.ratting}
                                onChange={(e) =>
                                  setFeedBack((state) => ({
                                    ...state,
                                    ratting: e,
                                  }))
                                }
                              />
                            </div>

                            <div className="box_des1">
                              <h2 className="feedback_des1">Description</h2>
                              <div className="descruption_feedbacks">
                                <TextArea
                                  value={feedback.message}
                                  onChange={(e) =>
                                    setFeedBack((state) => ({
                                      ...state,
                                      message: e.target.value,
                                    }))
                                  }
                                  placeholder="Input here ..."
                                  rows={4}
                                  className="text-area-des1"
                                />
                              </div>
                            </div>
                          </div>
                        </Modal>
                      </Panel>
                    ))}
              </Collapse>
            </div>
          </div>

          <div className="feedback_student">
            <div className="course__left">
              <h1 className="feedback_h1feedback">
                Today Feedback:
                <span
                  style={{
                    fontSize: "18px",
                    marginLeft: "10px",
                    color: "red",
                  }}
                >
                  {dayjs(new Date()).format("YYYY-MM-DD")}
                </span>
              </h1>
            </div>

            <div className="feedback_box">
              <Collapse defaultActiveKey={["1"]}>
                {schedules &&
                  schedules
                    .filter(
                      (schedule) =>
                        schedule.learnTime.date ===
                        dayjs(new Date()).format("YYYY-MM-DD")
                    )
                    // thistle
                    .map((el) => (
                      <Panel
                        header={`${el.learnTime.set.course.name}: ${el.learnTime.startTime} - ${el.learnTime.endTime}`}
                        key={el.id}
                      >
                        <div className="feedback_content1">
                          <div className="feedback_content1_group">
                            {el.learnTime.courseProgramPhases.map((phases) => (
                              <p>{phases.name}</p>
                            ))}
                          </div>
                          <div
                            className="feedback_link"
                            onClick={() => setIsModalOpen(true)}
                          >
                            <Button type="link">Link feedback</Button>
                          </div>
                        </div>

                        <Modal
                          title="Feedback"
                          open={isModalOpen}
                          onCancel={() => {
                            setIsModalOpen(false);
                            setFeedBack({
                              scheduleId: "",
                              message: "",
                              ratting: 0,
                            });
                          }}
                          onOk={() => handleSubmitFeedback(el.id)}
                          closeIcon={<span className="my-close-icon">X</span>}
                        >
                          <div className="box_feedback">
                            <div className="rates1">
                              <Rate
                                className="feedback_rates"
                                value={feedback.ratting}
                                onChange={(e) =>
                                  setFeedBack((state) => ({
                                    ...state,
                                    ratting: e,
                                  }))
                                }
                              />
                            </div>

                            <div className="box_des1">
                              <h2 className="feedback_des1">Description</h2>
                              <div className="descruption_feedbacks">
                                <TextArea
                                  value={feedback.message}
                                  onChange={(e) =>
                                    setFeedBack((state) => ({
                                      ...state,
                                      message: e.target.value,
                                    }))
                                  }
                                  placeholder="Input here ..."
                                  rows={4}
                                  className="text-area-des1"
                                />
                              </div>
                            </div>
                          </div>
                        </Modal>
                      </Panel>
                    ))}
              </Collapse>
            </div>
          </div>
        </main>
      </section>
      {/* CONTENT */}
    </>
  );
}

export default StudentSchedule;

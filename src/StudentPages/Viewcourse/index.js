import "../Viewcourse/viewcourses.css";
import React, { useEffect, useState } from "react";
import { Button, Collapse, Modal, Radio } from "antd";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import client from "../../configGQL";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import { CourseLabelComponent } from "../../component/CourseLabel";
import "./viewcourses.css";
import { Link } from "react-router-dom";
import { Calendar } from "antd";
import dayjs, { Dayjs } from "dayjs";

const QUERY_COURSE_DETAIL = gql`
  query getCourseById($courseId: String!) {
    getCourseById(courseId: $courseId) {
      id
      name
      price
      ratting
      imageUrl
      description
      sets {
        id
        isBooked
        name
        availableDates {
          setId
          date
          endTime
          startTime
        }
      }
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
          name
          order
          overviewUrl
          content
        }
      }
    }
  }
`;

function Viewcourse() {
  const { Panel } = Collapse;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState(null);
  const [modal, setModal] = useState({
    isOpen: false,
    link: null,
  });

  const [dateSet, setDateSet] = useState([]);
  const listSetIsBooked = courseData?.sets.map(item => item)
  const [nameSet, setNameSet] = useState()
  const disabledDate = () => true;


  const handleClick = (value) => {
    setNameSet(value.name)
    setDateSet(value.availableDates)
  }




  useEffect(() => {
    client
      .query({
        query: QUERY_COURSE_DETAIL,
        variables: {
          courseId: id,
        },
      })
      .then((response) => {
        setCourseData(response.data.getCourseById);
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  }, [id]);


  return (
    <section id="content">
      {modal.isOpen && (
        <Modal
          title="Video Modal"
          width="800px"
          open={true}
          footer={null}
          onCancel={() => setModal({ isOpen: false })}
        >
          <div className="video-container">
            <iframe
              title="YouTube video player"
              src={modal.link}
              width="100%"
              height="100%"
              allowFullScreen
            />
          </div>
        </Modal>
      )}

      <main>
        <div className="feedback__head-title">
          <div className="feedback__left led1">
            <h1>View Course</h1>
          </div>
        </div>
        {courseData && (
          <>
            <div className="all__course1">
              <CourseLabelComponent course={courseData} dateSet={dateSet} />
              <div className="course_box2">
                {listSetIsBooked.length === 0
                  ? <p>The course is currently sold out</p>
                  :
                  <Radio.Group
                    buttonStyle="solid"
                  >
                    {listSetIsBooked.map((option) => (
                      <Button
                        key={option.id}
                        name={option.name}
                        value={option.availableDates}
                        disabled={option.isBooked}
                        onClick={() => handleClick(option)}
                      >
                        {option.name}
                      </Button>
                    ))}
                  </Radio.Group>
                }
                {nameSet && (
                  <div className="calendar">
                    <p>You are choosing: {nameSet}</p>
                  </div>
                )}
                <Calendar
                  disabledDate={disabledDate}
                  fullscreen={false}
                  className="calendar-form"
                  dateCellRender={(date) => {
                    const renders =
                      dateSet &&
                      dateSet.map((schedule) => {
                        if (
                          dayjs(date).format("YYYY-MM-DD") === schedule.date
                        ) {
                          return (
                            <li className="li-schedule">
                              <p>
                                {schedule.startTime} - {schedule.endTime}
                              </p>
                            </li>
                          );
                        }
                      });
                    return renders;
                  }}
                />
              </div>
            </div>

            <div className="view__content">
              <div className="view__but212">
                <h1 className="view__h2r">Course Program:</h1>
              </div>
              <Collapse>
                {courseData.coursePrograms.map((el, index) => (
                  <Panel header={el.title} key={index}>
                    {el.courseProgramPhases.map((phase) => (
                      <p
                        className="introduction__view"
                        onClick={() =>
                          setModal({
                            isOpen: true,
                            link: phase.overviewUrl,
                          })
                        }
                      >
                        <i className="bx bxs-tv"></i>
                        {phase.name}
                        {/* <span className="span__view">09:28</span> */}
                        <span className="span__view">
                          <Link>Preview</Link>
                        </span>
                      </p>
                    ))}
                  </Panel>
                ))}
              </Collapse>
            </div>
          </>
        )}
      </main>
    </section>
  );
}

export default Viewcourse;

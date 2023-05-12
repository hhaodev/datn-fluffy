import "../Viewcourse/viewcourses.css";
import React, { useEffect, useState } from "react";
import { Collapse, Modal, Radio } from "antd";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import client from "../../configGQL";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import { CourseLabelComponent } from "../../component/CourseLabel";
import "./viewcourses.css";
import { Link } from "react-router-dom";
import { Calendar } from "antd";
import moment from 'moment';
import dayjs from "dayjs";

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

  const [dateSet, setDateSet] = useState([])
  const dateList = dateSet?.map(date => date.date)
  const disabledDate = () => true;
  





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


  const listSet = courseData && courseData.sets?.map((items) => (
    {
      name: items.name,
      id: items.id,
      availableDates: items.availableDates,
    }
  ))
  // console.log(listSet);
  const tutorId = courseData && courseData.tutorProfile.tutorId


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
              <CourseLabelComponent course={courseData} />
              <div className="course_box2">
                <Radio.Group onChange={(e) => setDateSet((e).target.value)} value={listSet}>
                  {listSet.map((option) => (
                    <Radio.Button key={option.id} value={option.availableDates}>
                      {option.name}
                    </Radio.Button>
                  ))}
                </Radio.Group>
                <Calendar
                  disabledDate={disabledDate}
                  value={dayjs(dateList[0])}
                  fullscreen={false}
                  className="calendar-form"
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
    </section >
  );
}

export default Viewcourse;

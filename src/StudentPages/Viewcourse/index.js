import "../Viewcourse/viewcourses.css";
import React, { useEffect, useState } from "react";
import { Button, Collapse, Rate, Modal } from "antd";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import client from "../../configGQL";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import "./viewcourses.css";

const QUERY_COURSE_DETAIL = gql`
  query getCourseById($courseId: String!) {
    getCourseById(courseId: $courseId) {
      id
      name
      price
      ratting
      duration
      imageUrl
      description
      sets {
        id
        isBooked
        name
        availableDates {
          date
          endTime
          startTime
        }
      }
      category {
        name
      }
      tutorProfile {
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
  const dispatch = useDispatch();
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [modal, setModal] = useState({
    isOpen: false,
    link: null,
  });

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

  const { Panel } = Collapse;
  const onChange = (key) => {};
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
              <div className="course_box1">
                <div className="course_thumnail1">
                  <img
                    src={courseData?.imageUrl}
                    alt=""
                    className="course_image1"
                  />
                </div>
                <div className="course_box1_content1">
                  <h3 className="course_box1_content_title1">
                    {courseData.name}
                  </h3>
                  <Rate disabled defaultValue={courseData.ratting} />
                  <div className="course_author1">
                    <div className="course_author_image1">
                      <img
                        src={courseData.tutorProfile.tutor.avatarUrl}
                        alt=""
                      />
                    </div>
                    <p className="course_author1_info1">{`${courseData.tutorProfile.tutor.firstName} ${courseData.tutorProfile.tutor.lastName}`}</p>
                  </div>

                  <div className="course_box1_content_des1">
                    <p>{courseData.description}</p>
                  </div>
                  <h3 className="dollar-h3">
                    {courseData.price}
                    <i className="bx bx-dollar"></i>
                  </h3>
                  <div className="all__button2">
                    <Button type="default" className="inline-btn1">
                      Start Trial Lesson
                    </Button>
                    <Button className="inline-btn1">Buy now</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="view__content">
              <div className="view__but212">
                <h1 className="view__h2r">Course Program:</h1>
              </div>
              <Collapse onChange={onChange}>
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
                        <span className="span__view">09:28</span>
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

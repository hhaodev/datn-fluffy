import "../Viewcourse/viewcourses.css";
import React, { useEffect, useState } from "react";
import { Collapse, Modal } from "antd";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import client from "../../configGQL";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import { CourseLabelComponent } from "../../component/CourseLabel";
import "./viewcourses.css";
import { Link } from "react-router-dom";
import { Calendar, theme } from "antd";
import { Segmented } from "antd";

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
  // calendar
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  // end calendar
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
              <CourseLabelComponent course={courseData} />
              <div className="course_box2">
                <Segmented block options={["Set 1", "Set 2", "Set 3"]} />
                <Calendar
                  fullscreen={false}
                  onPanelChange={onPanelChange}
                  className="calendar-form"
                />
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

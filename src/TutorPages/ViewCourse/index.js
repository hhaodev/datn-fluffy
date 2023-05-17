import "./viewcourse.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { CourseLabelComponent } from "../../component/CourseLabel";
import client from "../../configGQL";
import { Modal, Switch, Button, InputNumber } from "antd";
import { DollarOutlined, ReadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import EditCourseComponent from "./EditCourse";

const QUERY_COURSE_BY_ID = gql`
  query getCourseById($courseId: String!) {
    getCourseById(courseId: $courseId) {
      id
      name
      imageUrl
      description
      price
      spendTime
      isPublish
      ratting
      numberOfProgramRequired
      tutorProfile {
        tutor {
          lastName
          firstName
          avatarUrl
        }
      }
      category {
        name
      }
      coursePrograms {
        id
        title
        description
        isPublish
        courseProgramPhases {
          id
          order
          name
          content
          overviewUrl
        }
      }
    }
  }
`;

const MUTATION_PUBLISH_COURSE = gql`
  mutation publishCourse($input: PublishCourseDto!) {
    publishCourse(input: $input) {
      id
      name
      imageUrl
      description
      price
      spendTime
      isPublish
      ratting
      numberOfProgramRequired
      categoryId
      tutorProfile {
        tutor {
          lastName
          firstName
          avatarUrl
        }
      }
      coursePrograms {
        id
        title
        description
        isPublish
        courseProgramPhases {
          id
          order
          name
          content
          overviewUrl
        }
      }
    }
  }
`;

function ViewCourse() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isVisibled, setIsVisibled] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [courseData, setDataCourse] = useState(null);
  const [publishData, setPublishData] = useState(null);

  const onHandlePublished = (publishCourse) => {
    client
      .mutate({
        mutation: MUTATION_PUBLISH_COURSE,
        variables: {
          input: publishCourse,
        },
      })
      .then((response) => {
        dispatch(
          setError({
            message: `${
              response.data.publishCourse.isPublish
                ? "Publish course successfully"
                : "Unpublish course successfully"
            }`,
          })
        );
        setDataCourse(response.data.publishCourse);
        setIsVisibled(false);
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  };

  const hanldeOnChangeStatus = (field, value) => {
    let data = publishData;
    if (!publishData) {
      data = {
        id,
        price: courseData.price,
        isPublish: courseData.isPublish,
        numberOfProgramRequired: courseData.numberOfProgramRequired,
        courseProgram: courseData.coursePrograms.map((program) => ({
          id: program.id,
          isPublish: program.isPublish,
        })),
      };
    }

    if (field === "courseProgram") {
      const newPrograms = data.courseProgram.filter((el) => el.id !== value.id);
      newPrograms.push(value);
      data.courseProgram = newPrograms;
    } else {
      data[field] = value;
    }

    setPublishData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const hanldeToggleModal = () => {
    setIsVisibled(!isVisibled);
  };

  useEffect(() => {
    client
      .query({
        query: QUERY_COURSE_BY_ID,
        variables: { courseId: `${id}` },
      })
      .then((result) => {
        setDataCourse(result.data.getCourseById);
      });
  }, [id]);

  return (
    <>
      <section id="content">
        <main>
          <div className="feedback__head-title">
            <div className="feedback__left">
              <h1 className="view__h1view">View Course</h1>
            </div>
          </div>
          <Modal
            open={isVisibled}
            title="Publish Course"
            width="750px"
            footer={null}
            closable={false}
            className="publish-title"
          >
            <div className="publish-form">
              <Switch
                defaultChecked={courseData?.isPublish || false}
                onChange={(e) => {
                  hanldeOnChangeStatus("isPublish", e);
                }}
              />
              <h3>Course Programs: </h3>
              <div className="publish-coursePrograms">
                {courseData &&
                  courseData.coursePrograms.map((el) => (
                    <div className="publish-item">
                      <i className='bx bx-upload' ></i>
                      <p>{el.title}</p>
                      <Switch
                        defaultChecked={el.isPublish}
                        onChange={(e) => {
                          hanldeOnChangeStatus("courseProgram", {
                            id: el.id,
                            isPublish: e || false,
                          });
                        }}
                      />
                    </div>
                  ))}
              </div>
              <div className="publish-form-price">
                <label className="publish-form-price-lable">
                  <ReadOutlined /> Number of required programs
                </label>
                <InputNumber
                  className="input-price"
                  onChange={(e) =>
                    hanldeOnChangeStatus("numberOfProgramRequired", e)
                  }
                  defaultValue={courseData?.numberOfProgramRequired || 1}
                ></InputNumber>
              </div>
              <div className="publish-form-price">
                <label className="publish-form-price-lable">
                  <DollarOutlined className="icon-dolar" /> Price
                </label>
                <InputNumber
                  className="input-price"
                  defaultValue={courseData?.price || 0.0}
                  onChange={(e) => hanldeOnChangeStatus("price", e)}
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </div>
              <div className="publish-form-btn-group">
                <Button className="btn-publish" onClick={hanldeToggleModal}>
                  Cancel
                </Button>
                <Button
                  className="btn-publish btn-primary"
                  onClick={() => onHandlePublished(publishData)}
                >
                  Publish
                </Button>
              </div>
            </div>
          </Modal>
          <div className="tutor-course-detail">
            {courseData && (
              <CourseLabelComponent
                course={courseData}
                tutorType
                handleOpenPublished={hanldeToggleModal}
                setIsEdited={setIsEdited}
              />
            )}
          </div>
          <div className="view__content">
            <h1 className="view__h2r">
              <i class="bx bxs-book-content"></i>Course information
            </h1>
            {courseData && (
              <EditCourseComponent
                course={courseData}
                setCourseData={setDataCourse}
                canNotEditedPermission={isEdited}
                setIsEdited={setIsEdited}
              />
            )}
          </div>
        </main>
      </section>
    </>
  );
}

export default ViewCourse;

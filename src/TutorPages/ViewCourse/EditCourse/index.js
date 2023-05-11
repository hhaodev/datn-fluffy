import { Button, InputNumber, Form, Input, Upload } from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.css";
import { Collapse } from "antd";
import { useState } from "react";
import _ from "lodash";
import client from "../../../configGQL";
import { gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setError } from "../../../Redux/features/notificationSlice";

const { Panel } = Collapse;

const { TextArea } = Input;

const MUTATION_UPSERT_COURSE = gql`
  mutation createCourse($input: CourseDto!) {
    createCourse(input: $input) {
      id
      name
      imageUrl
      description
      price
      spendTime
      isPublish
      ratting
      numberOfProgramRequired
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

const onHandleAddNewPrograms = (setEdit) => {
  const newPrograms = {
    title: null,
    description: null,
    isPublish: false,
  };

  setEdit((state) => {
    return {
      ...state,
      coursePrograms: [...state.coursePrograms, newPrograms],
    };
  });
};

const onHandleAddProgramPhases = (indexProgram, setEdit) => {
  const newProgramPhase = {
    name: null,
    order: null,
    content: null,
    overviewUrl: null,
  };

  setEdit((state) => {
    const newProgams = _.cloneDeep(state.coursePrograms);
    if (!newProgams[indexProgram].courseProgramPhases) {
      newProgams[indexProgram].courseProgramPhases = [];
    }

    newProgams[indexProgram]?.courseProgramPhases?.push(newProgramPhase);

    return {
      ...state,
      coursePrograms: newProgams,
    };
  });
};

const onHandleDeletePrograms = (index, setEdit) => {
  setEdit((state) => {
    let newState = _.cloneDeep(state);
    newState.coursePrograms.splice(index, 1);
    return newState;
  });
};

const onHandleDeleteProgramPhase = (indexProgram, indexPhase, setEdit) => {
  setEdit((state) => {
    let newState = _.cloneDeep(state);
    newState.coursePrograms[indexProgram].courseProgramPhases.splice(
      indexPhase,
      1
    );
    return newState;
  });
};

const handleChangeValue = (field, value, setEdit) => {
  setEdit((state) => {
    const newState = _.cloneDeep(state);
    _.set(newState, field, value);

    return newState;
  });
};

const EditCourseComponent = ({
  course,
  canNotEditedPermission,
  setIsEdited,
}) => {
  const dispatch = useDispatch();
  const [editCourseData, setEditCourseData] = useState(course);

  const handleSaveCourse = (state, setState) => {
    const newObject = _.cloneDeep(state);
    const newValue = _.omit(newObject, [
      "__typename",
      "tutorProfile",
      "category",
      "ratting",
      "numberOfProgramRequired",
      "isPublish",
      ...state.coursePrograms?.reduce((cur, el, index) => {
        return [
          ...cur,
          `coursePrograms[${index}].__typename`,
          ...el?.courseProgramPhases?.map(
            (x, indexX) =>
              `coursePrograms[${index}].courseProgramPhases[${indexX}].__typename`
          ),
        ];
      }, []),
    ]);

    try {
      client
        .mutate({
          mutation: MUTATION_UPSERT_COURSE,
          variables: {
            input: newValue,
          },
        })
        .then((response) => {
          client.clearStore();
          setIsEdited(false);
        });
    } catch (error) {
      dispatch(setError({ message: error.message }));
    }
  };

  return (
    <Form className="course_information" disabled={!canNotEditedPermission}>
      <Form.Item className="course_content">
        <Form.Item label="Name">
          <Input
            className="course_level1"
            value={editCourseData?.name}
            onChange={(e) =>
              handleChangeValue("name", e.target.value, setEditCourseData)
            }
          />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            rows={4}
            className="course_level1"
            value={editCourseData?.description}
            onChange={(e) =>
              handleChangeValue(
                "description",
                e.target.value,
                setEditCourseData
              )
            }
          />
        </Form.Item>
        <Form.Item label="Duration" className="course_content_level1">
          <InputNumber
            value={editCourseData?.spendTime}
            onChange={(e) =>
              handleChangeValue("spendTime", e.target.value, setEditCourseData)
            }
            addonAfter={"Day"}
            defaultValue={100}
          />
        </Form.Item>
        <Form.Item label="Image" className="course_content_level1">
          <Upload
            listType="picture"
            defaultFileList={[
              {
                uid: "-1",
                name: "Course Image",
                status: "done",
                url: editCourseData?.imageUrl,
              },
            ]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Course Programs">
          {editCourseData?.coursePrograms?.map((program, index) => (
            <Form.Item className="course_programs course_content">
              <Form.Item>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  Program {index + 1}
                </p>
              </Form.Item>
              <Form.Item label="Title">
                <Input
                  value={program.title}
                  onChange={(e) =>
                    handleChangeValue(
                      `coursePrograms[${index}][title]`,
                      e.target.value,
                      setEditCourseData
                    )
                  }
                ></Input>
              </Form.Item>
              <Form.Item label="Description">
                <TextArea
                  rows={4}
                  value={program.description}
                  onChange={(e) =>
                    handleChangeValue(
                      `coursePrograms[${index}][description]`,
                      e.target.value,
                      setEditCourseData
                    )
                  }
                />
              </Form.Item>
              <Form.Item label="Program Phase">
                <Collapse defaultActiveKey={["1"]}>
                  {program?.courseProgramPhases?.map((phases, indexPhases) => (
                    <Panel header={`Phase ${indexPhases + 1}`} key={phases.id}>
                      <Form.Item>
                        <Form.Item label="Title">
                          <Input
                            value={phases.name}
                            onChange={(e) =>
                              handleChangeValue(
                                `coursePrograms[${index}][courseProgramPhases][${indexPhases}][name]`,
                                e.target.value,
                                setEditCourseData
                              )
                            }
                          ></Input>
                        </Form.Item>
                        <Form.Item label="Order">
                          <InputNumber
                            value={phases.order}
                            onChange={(e) =>
                              handleChangeValue(
                                `coursePrograms[${index}][courseProgramPhases][${indexPhases}][order]`,
                                e,
                                setEditCourseData
                              )
                            }
                          ></InputNumber>
                        </Form.Item>
                        <Form.Item label="Content">
                          <Input
                            value={phases.content}
                            onChange={(e) =>
                              handleChangeValue(
                                `coursePrograms[${index}][courseProgramPhases][${indexPhases}][content]`,
                                e.target.value,
                                setEditCourseData
                              )
                            }
                          ></Input>
                        </Form.Item>
                        <Form.Item label="Overview Link">
                          <Input
                            value={phases.overviewUrl}
                            onChange={(e) =>
                              handleChangeValue(
                                `coursePrograms[${index}][courseProgramPhases][${indexPhases}][overviewUrl]`,
                                e.target.value,
                                setEditCourseData
                              )
                            }
                          ></Input>
                        </Form.Item>
                        <Form.Item>
                          <div class="btn-group">
                            <Button
                              onClick={() =>
                                onHandleDeleteProgramPhase(
                                  index,
                                  indexPhases,
                                  setEditCourseData
                                )
                              }
                            >
                              Delete Phase {indexPhases + 1}
                            </Button>
                            <Button>Save</Button>
                          </div>
                        </Form.Item>
                      </Form.Item>
                    </Panel>
                  ))}
                </Collapse>
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() =>
                      onHandleAddProgramPhases(index, setEditCourseData)
                    }
                    style={{ width: "60%" }}
                    icon={<PlusOutlined />}
                  >
                    Add Program Phase
                  </Button>
                </Form.Item>
              </Form.Item>
              <Form.Item>
                <div class="btn-group">
                  <Button
                    onClick={() =>
                      onHandleDeletePrograms(index, setEditCourseData)
                    }
                  >
                    Delete Program {index + 1}
                  </Button>
                  <Button>Save</Button>
                </div>
              </Form.Item>
            </Form.Item>
          ))}

          <Form.Item>
            <Button
              type="dashed"
              onClick={() => onHandleAddNewPrograms(setEditCourseData)}
              style={{ width: "60%" }}
              icon={<PlusOutlined />}
            >
              Add Programs
            </Button>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <div class="btn-group">
            <Button
              onClick={() =>
                handleSaveCourse(editCourseData, setEditCourseData)
              }
            >
              Save Course
            </Button>
          </div>
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

export default EditCourseComponent;

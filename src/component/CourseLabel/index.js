import { Button, Rate, Modal, Input, Form, DatePicker, TimePicker, Select, Radio } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import "./index.css";
import { gql, useMutation } from "@apollo/client";
import client from "../../configGQL";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons"

const { confirm } = Modal;

const DELETE_COURSE_BY_ID = gql`
  mutation deleteCourseById($courseId: String!) {
    deleteCourseById(courseId: $courseId) {
      message
      success
    }
  }
`;

const BUY_COURSE = gql`
  mutation createCheckoutCourseUsingStripe($input: CheckoutCourseDto!){
  createCheckoutCourseUsingStripe(input: $input){
    checkoutUrl
    successUrl
    cancelUrl
  }
}
`;

const ADD_SET = gql`
  mutation createOrUpdateSetForCourse($input: CreateSetForCourseDto!){
    createOrUpdateSetForCourse(input: $input){
      id
      name
      isBooked
    }
  }
`

const DELETE_SET = gql`
  mutation deleteSet($id: String!){
    deleteSet(id:$id){
      message
      success
    }
  }
`

const GETCOURSE_BYID = gql`
  query getCourseById($courseId: String!){
    getCourseById(courseId:$courseId){
      coursePrograms{
        courseProgramPhases{
          id
          name
        }
      }
    }
  }
`;

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
    }
  }
`;

export const CourseLabelComponent = ({
  course,
  tutorType,
  handleOpenPublished,
  setIsEdited,
  dateSet,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams()
  const [isVisibled, setIsVisibled] = useState(false);
  const [isVisibled1, setIsVisibled1] = useState(false);
  const url = window.location.href
  const tutorId = course.tutorProfile.tutorId
  const setName = course?.sets?.find(
    (data) => data.id === dateSet[0]?.setId
  );
  const [nameSet, setNameSet] = useState()
  const [formListAddSet, setFormListAddSet] = useState([
    { startTime: null, endTime: null, date: null, courseProgramPhases: null },
  ]);
  const [coursePrograms, setCoursePrograms] = useState()
  const phaseList = coursePrograms?.flatMap(obj => obj.courseProgramPhases)
  const [setList, setSetList] = useState([])
  const [status, setStatus] = useState(false)
  const [dataSet, setDataSet] = useState()
  console.log("🚀 ~ file: index.js:116 ~ dataSet:", dataSet)

  useEffect(() => {
    client
      .query({
        query: GETCOURSE_BYID,
        variables: {
          courseId: id,
        }
      })
      .then(result => setCoursePrograms(result.data.getCourseById.coursePrograms))
      .catch(error => dispatch(setError({ message: error })))
  }, [id]);

  useEffect(() => {
    client
      .query({
        query: QUERY_COURSE_DETAIL,
        variables: {
          courseId: id,
        }
      })
      .then(result => setSetList(result.data.getCourseById.sets))
      .catch(error => dispatch(setError({ message: error })))
  }, [status, dataSet])

  const [buyCourse] = useMutation(BUY_COURSE)
  const [addSet] = useMutation(ADD_SET)
  const [deleteSet] = useMutation(DELETE_SET)


  const handleBuyCourse = () => {
    const data = {
      successUrl: url,
      cancelUrl: url,
      tutorId: tutorId,
      courseId: id,
      setId: dateSet[0]?.setId,
    }
    let validated = true
    if (dateSet.length === 0) {
      validated = false
    }
    if (validated === true) {
      const getData = async () => {
        try {
          const result = await buyCourse({
            variables: {
              input: data,
            },
          });
          window.location.href = result.data.createCheckoutCourseUsingStripe.checkoutUrl
        } catch (error) {
          dispatch(setError({ message: error.message }))
        }
      }
      getData()
    }
  }

  const handleButtonOk = () => {
    let isValidated = true;
    const datatemp = {
      courseId: id,
      name: nameSet,
      availableDates: formListAddSet,
    };
    if (nameSet) {
      formListAddSet.forEach((el) => {
        if (!el.startTime || !el.endTime || !el.date || !el.courseProgramPhases) {
          isValidated = false;
        } else {
          isValidated = true;
        }
      })
    } else {
      isValidated = false
    }

    if (isValidated) {
      const getData = async () => {
        try {
          const result = await addSet({
            variables: {
              input: datatemp,
            },
          });
          setStatus(!status)
          setIsVisibled(!isVisibled);
          client.clearStore()
          dispatch(setError({ message: "Create set successfully" }));
        } catch (error) {
          dispatch(setError({ message: error.message }));
        }
      };
      getData();
    }
    else {
      dispatch(setError({ message: "Please fill in all fields" }));
    }
  }
  //add set
  const handleAddSet = () => {
    setIsVisibled(!isVisibled);
  }
  //modal add set
  const hanldeToggleModal = () => {
    setIsVisibled(!isVisibled);
  };

  const handleAddForm = () => {
    const newFormList = formListAddSet.concat({
      startTime: null,
      endTime: null,
      date: null,
      courseProgramPhases: null
    });
    setFormListAddSet(newFormList);
  };

  const handleDeleteForm = (index) => {
    const newFormList = formListAddSet.filter((el, i) => index !== i);
    setFormListAddSet(newFormList);
  };

  const onChangeValue = (indexForm, field, value) => {
    const newForm = formListAddSet[indexForm];
    if (field === 'courseProgramPhases') {
      value = value.map(e => ({ id: e }))
    }
    newForm[field] = value;
    const newFormList = formListAddSet.filter((el, index) => index !== indexForm);
    newFormList.push(newForm);
    setFormListAddSet(newFormList);
  };

  const handleDelete = (courseId) => {
    client
      .mutate({
        mutation: DELETE_COURSE_BY_ID,
        variables: {
          courseId,
        },
      })
      .then((response) => {
        if (response.data.deleteCourseById.success) {
          client.clearStore();
          navigate("/courses");
        }
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  };

  const showPromiseConfirm = async ({ title, id, name, handle }) => {
    confirm({
      title: title,
      icon: <ExclamationCircleFilled />,
      onOk: handle,
      onCancel() { },
    });
  };
  ///handle Setttt
  const handleOpenSetData = (option) => {
    setIsVisibled1(!isVisibled1);
    setDataSet(option)
  }

  const handleDeleteSet = (value) => {
    if (value?.isBooked === true) {
      dispatch(setError({ message: "This set is in progress!!" }))
    } else {
      const getData = async () => {
        try {
          const result = await deleteSet({
            variables: {
              id: value.id
            },
          });
          dispatch(setError({ message: result.data.deleteSet.message }))
          client.clearStore()
          handleOpenSetData()
        } catch (error) {
          dispatch(setError({ message: error.message }))
        }
      }
      getData()
    }
  }

  let groupBtnAction = (
    <div className="courses_buynow">
      <Button
        className="inline-btn1"
        onClick={() => {
          showPromiseConfirm({
            title: `${setName ? `Do you want to buy ${setName?.name} this course?` : `Please select set`}`,
            handle: () => handleBuyCourse(),
          })
        }}
      >
        Buy now
      </Button>
    </div>
  );

  if (tutorType) {
    groupBtnAction = (
      <div className="form_modal_button_pad">
        <Button
          type="primary"
          className="view__but1"
          onClick={() =>
            showPromiseConfirm({
              title: `Do you want to edit ${course.name}`,
              handle: () => setIsEdited(true),
            })
          }
        >
          <i class="bx bxs-edit"></i>Edit
        </Button>
        <Button type="primary" onClick={handleOpenPublished}>
          Publish Course
        </Button>
        <Button
          type="primary"
          className="view__but242"
          onClick={() =>
            showPromiseConfirm({
              id: course.id,
              name: course.name,
              title: `Do you want to delete ${course.name}`,
              handle: () => handleDelete(course.id),
            })
          }
        >
          <i class="bx bx-x"></i>Delete
        </Button>
        <Button type="primary" onClick={handleAddSet}>
          Add Set
        </Button>
      </div>
    );
  }

  let formAddSetForTutor = (
    <Fragment></Fragment>
  )
  if (tutorType) {
    formAddSetForTutor = (
      <div>
        {setList?.length === 0
          ?
          <>
            <p>There are currently no classes available!!!</p>
            <button onClick={handleAddSet}>add set here?</button>
          </>
          :
          <>
            <p>Available study sets</p>
            <Radio.Group
              buttonStyle="solid"
            >
              {setList?.map((option) => (
                <Button
                  className={option.isBooked ? "isbooked_button" : ""}
                  onClick={() => handleOpenSetData(option)}
                  key={option.id}
                >
                  {option.name}
                </Button>
              ))}
            </Radio.Group>
          </>
        }
      </div>
    )
  }

  return (
    <>
      <Modal
        open={isVisibled1}
        title={dataSet?.name}
        closable={false}
        onCancel={handleOpenSetData}
        footer={
          <>
            <Button
              onClick={() =>
                showPromiseConfirm({
                  title: `Do you want to delete ${dataSet?.name}`,
                  handle: () => handleDeleteSet(dataSet),
                })
              }
            >
              Delete
            </Button>
            <Button
              onClick={handleOpenSetData}
            >
              Cancel
            </Button>
          </>
        }
      >
        {dataSet &&
          (
            <>
              <div>Set Name: {dataSet?.name}</div>
              <div>In process: {dataSet?.isBooked ? <CheckOutlined /> : <CloseOutlined />}</div>

              {dataSet?.availableDates?.map((data, index) => (
                <>
                  <div> Session {index + 1}:
                    <div className="formSession_modal">Date: {data.date}</div>
                    <div className="formSession_modal">Start time: {data.startTime}</div>
                    <div className="formSession_modal">End time: {data.endTime}</div>
                  </div>
                </>
              ))}
            </>
          )
        }
      </Modal >


      <Modal
        open={isVisibled}
        title="AddSet"
        // height={800}
        onOk={() =>
          showPromiseConfirm({
            title: `Do you want to create ${nameSet}?`,
            handle: () => handleButtonOk(),
          })}
      
        onCancel={hanldeToggleModal}
        closable={false}
        className="fom_modal_addset"
      >
        <Form className="form_aaa">
          <label>Set Name</label>
          <Input
            onChange={(e) =>
              setNameSet(e.target.value)
            }
            placeholder="Set name" className="fom_modal_addset_input" />

          {formListAddSet.map((el, index) => (
            <div className="form_modal_child1">
              <Form
                name="normal"
                layout="vertical"
                key={index}
                style={{ border: "1px solid #ccc;" }}
              >


                <Form.Item
                  name="range-picker"
                  rules={[
                    {
                      required: true,
                      message: "Please select date!",
                    },
                  ]}
                  className=""
                >
                </Form.Item>

                {/*  */}
                <div className="form_modal_box1">
                  {/* date */}
                  <div style={{ width: "100%" }} className="form_modal_date">
                    <label>Date</label>
                    <DatePicker
                      onChange={(e) =>
                        onChangeValue(
                          index,
                          "date",
                          dayjs(e).format("YYYY-MM-DD")
                        )
                      }
                    />
                  </div>

                  {/* start time, and time */}
                  <Form.Item
                    name="range-picker"
                    rules={[
                      {
                        required: true,
                        message: "Please select time!",
                      },
                    ]}
                    className="form_modal_start_end_time"
                  >
                    <div className="form_modal_start_end">
                      <div style={{ width: "45%" }}>
                        <label>Start Time</label>
                        <TimePicker
                          onChange={(e) =>
                            onChangeValue(
                              index,
                              "startTime",
                              dayjs(e).format("HH:mm:ss")
                            )
                          }
                        />
                      </div>
                      <div style={{ width: "45%" }}>
                        <label>End Time</label>
                        <TimePicker
                          onChange={(e) =>
                            onChangeValue(
                              index,
                              "endTime",
                              dayjs(e).format("HH:mm:ss")
                            )
                          }
                        />
                      </div>
                    </div>
                  </Form.Item>

                  {/* select */}
                  <Form.Item className="form_modal_select">
                    <label>Phase</label>
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="Please select phase"
                      onChange={(e) =>
                        onChangeValue(
                          index,
                          "courseProgramPhases",
                          e
                        )
                      }
                      options={phaseList?.map((phase) => ({ label: phase.name, value: phase.id }))}

                    />
                  </Form.Item>
                  {formListAddSet.length > 1 && index !== 0 ? (
                    <MinusCircleOutlined
                      className="form_modal_tru"
                      onClick={() => handleDeleteForm(index)}
                    />
                  ) : null}
                </div>


              </Form>
            </div>
          ))}
        </Form>

        <Button onClick={handleAddForm} className="form_modal_button_addcourse">
          <PlusOutlined /> Add date
        </Button>
      </Modal>

      <div className="course_box1">
        <div className="course_thumnail1">
          <img src={course?.imageUrl} alt="" className="course_image1" />
        </div>
        <div className="course_box1_content1">
          <h3 className="course_box1_content_title1">{course.name}</h3>
          <Rate disabled defaultValue={course.ratting} />
          <div className="course_author1">
            <div className="course_author_image1">
              <img src={course.tutorProfile.tutor.avatarUrl} alt="" />
            </div>
            <h4 className="course_author1_info1">{`${course.tutorProfile.tutor.firstName} ${course.tutorProfile.tutor.lastName}`}</h4>
          </div>

          <div className="course_box1_content_des1">
            <p>{course.description}</p>
          </div>
          <h3 className="dollar-h3">
            {course.price || 0}
            <i className="bx bx-dollar"></i>
          </h3>
          <div className="all__button2">{groupBtnAction}</div>
        </div>
      </div>
      {formAddSetForTutor}
    </>
  );
}

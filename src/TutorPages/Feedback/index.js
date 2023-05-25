import "../../TutorPages/Feedback/feedback.css";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import avtfeedback4 from "../../assets/images/avt3.jpg";
import { Avatar, Space } from "antd";
import { gql } from "@apollo/client";
import client from "../../configGQL";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import dayjs from "dayjs";


const GET_BOOKED = gql`
  query getMyBookedSessions($query: QueryFilterDto!){
    getMyBookedSessions(query: $query){
      items{
        data
        student{
          id
          lastName
          firstName
          avatarUrl
        }
        course{
          name
        }
      }
    }
  }
`

const GET_FEEDBACK = gql`
  query getTutoringFeedbacksBySet($input: TutoringFeedBackInputDto!){
    getTutoringFeedbacksBySet(input: $input){
      scheduleId
      message
      ratting
      schedule{
        learnTime{
          date
        }
      }
    }
  }
`

const CourseBox = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [feedBackList, setFeedBackList] = useState([])
  const [dataFB, setDataFB] = useState()
  const [dataModal, setDataModal] = useState()



  const showModal = (data) => {
    setOpen(true);
    setDataModal(data)

    client.query({
      query: GET_FEEDBACK,
      variables: {
        input: {
          setId: data.data.setId,
          studentId: data.student.id,
        },
      }
    })
      .then(result => setDataFB(result.data.getTutoringFeedbacksBySet))
      .catch(error => dispatch(setError({ message: error })))
  };

  const hideModal = () => {
    setOpen(false);
  };


  useEffect(() => {
    client
      .query({
        query: GET_BOOKED,
        variables: {
          query: {
            limit: 99,
            page: 1,
          }
        }
      })
      .then(result => setFeedBackList(result.data.getMyBookedSessions.items))
      .catch(error => dispatch(setError({ message: error })))
  }, []);


  return (
    <>
      {/* SIDEBAR */}

      <section id="content">
        <main>
          <div className="feedback__head-title">
            <div className="feedback__left">
              <h1 className="feedback__h1ba">
                Feedback
              </h1>
            </div>
            {/* <h1 className='feedback__h1'>FeedBack</h1> */}

            <div className="feedback__box">

              {feedBackList &&
                feedBackList.map(data => (
                  <div className="feedback__box1">
                    <div className="course-box" onClick={() => showModal(data)} >
                      <div>
                        <img
                          src={data.student.avatarUrl}
                          alt="Avatar"
                          className="feedback__boxavt"
                        />
                      </div>
                      <div className="course-box-info">
                        <h3 className="course-box-title">{data.student.firstName + " " + data.student.lastName}</h3>
                        <p className="course-box-subtitle">{data.course.name}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
              <Modal
                className="custom-modal"
                closable={false}
                open={open}
                onCancel={hideModal}
                footer={
                  <Button onClick={() => hideModal()}>Cancel</Button>
                }
              >
                {dataModal &&
                  <>
                    <div className="course-box-modal">
                      <div className="feedback__boxall">
                        <div className="course-box-avatar">
                          <Space size={16} wrap>
                            <Avatar
                              src={dataModal.student.avatarUrl}
                              alt="Avatar"
                              className="feedback__formavt"
                            />
                          </Space>
                        </div>
                        <div className="feedback__tittle">
                          <h3 className="course-box-title">Student: {dataModal.student.firstName + " " + dataModal.student.lastName}</h3>
                          <p className="course-box-subtitle">
                            Course: {dataModal.course.name}
                          </p>
                        </div>
                      </div>

                      {dataFB &&
                        dataFB.map(dataFB => (
                          <>
                            <p className="date_feedback">{dayjs(dataFB?.schedule.learnTime.date).format("DD/MM/YYYY")}: </p>
                            <div className="form_modal_star">
                              <div className=" form_fb_all">
                                <div className="form_des_modal">
                                  <p className="course-box-description">
                                    {dataFB?.message}
                                  </p>
                                </div>
                                <div className="form_ratting">
                                  <p className="feedback__star">{dataFB?.ratting}<i class="bx bxs-star"></i></p>
                                </div>
                              </div>
                            </div>
                          </>
                        ))
                      }
                    </div>
                  </>
                }
              </Modal>

            </div>
          </div>
        </main>
      </section >
    </>
  );
};

export default CourseBox;

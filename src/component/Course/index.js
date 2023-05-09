import "./index.css";
import { Link } from "react-router-dom";
import { Button, Modal } from 'antd';
import { useState } from 'react';
import avt1 from '../../assets/images/avt2.jpg'

const CourseComponent = ({ course, type }) => {
  const { firstName, lastName } = course.tutorProfile.tutor;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  return (
    <div className="course_box">
      <div className="course_thumnail">
        <img src={course.imageUrl} alt="" className="course_image" />
        <span className="course_program_number">10 Unit</span>
      </div>
      <div className="course_box_content">
        <h3 className="course_box_content_title">{course.name}</h3>
        <div className="course_author">
          <div className="course_author_image">
            <img
              src="https://i.pinimg.com/564x/0d/b1/d8/0db1d8d5fc83125ab2645388c06b3858.jpg"
              alt=""
              onClick={showModal}
            />
          </div>
          <p className="course_author_info">{`${firstName} ${lastName}`}</p>
        </div>

        <div className="course_box_content_des">
          <p>{course.description}</p>
        </div>
        <Link to={type ? `/courses/${course.id}` : `/dashboard/courses/${course.id}`} className="inline-btn">
          See detail
        </Link>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="information_tutor">
            <div className="infor_title1">
              <img src={avt1} alt="" className="infor_avt1"></img>
              <h2>Hoang Tran</h2>
            </div>

            <div className="infor_date1">
              <h2 className="infor_content">Date of birth: </h2>
              <p>16/04/2007</p>
            </div>

            <div className="infor_schools">
              <h2 className="infor_content">Schools:  </h2>
              <p>Duy Tan University</p>
            </div>

            <div className="infor_experience">
              <div className="infor_company">
                <h2 className="infor_content bottom">Organization Name: </h2>
                <p>KMS</p>
              </div>
              <div className="infor_company">
                <h2 className="infor_content">Position: </h2>
                <p>Tech Lead</p>
              </div>
            </div>

            <div className="infor_des">
              <h2 className="infor_content">Description: </h2>
              <p className="infor_descreption">I am an all-rounder, specializing in all fields, I am still handsome, especially very attractive, come with me, my house is in Hoa Vang, Da Nang</p>
            </div>
          </div>
          {/* <p>{course.name}</p>
          <p>{course.description}</p> */}
        </Modal>
      </div>
    </div>
  );
};

export default CourseComponent;
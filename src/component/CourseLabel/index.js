import { Button, Rate, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import "./index.css";
import { gql } from "@apollo/client";
import client from "../../configGQL";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import { useNavigate } from "react-router-dom";

const { confirm } = Modal;

const DELETE_COURSE_BY_ID = gql`
  mutation deleteCourseById($courseId: String!) {
    deleteCourseById(courseId: $courseId) {
      message
      success
    }
  }
`;

export const CourseLabelComponent = ({
  course,
  tutorType,
  handleOpenPublished,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const showPromiseConfirm = async ({ id, name }) => {
    confirm({
      title: `Do you want to delete ${name} ?`,
      icon: <ExclamationCircleFilled />,
      onOk: () => handleDelete(id),
      onCancel() { },
    });
  };

  let groupBtnAction = (
    <div className="courses_buynow">
      <Button className="inline-btn1">Buy now</Button>
    </div>
  );

  if (tutorType) {
    groupBtnAction = (
      <>
        <Button type="primary" className="view__but1">
          <i class="bx bxs-edit"></i>Edit
        </Button>
        <Button type="primary" onClick={handleOpenPublished}>
          Publish Course
        </Button>
        <Button
          type="primary"
          className="view__but242"
          onClick={() =>
            showPromiseConfirm({ id: course.id, name: course.name })
          }
        >
          <i class="bx bx-x"></i>Delete
        </Button>
      </>
    );
  }
  return (
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
          <p className="course_author1_info1">{`${course.tutorProfile.tutor.firstName} ${course.tutorProfile.tutor.lastName}`}</p>
        </div>

        <div className="course_box1_content_des1">
          <p>{course.description}</p>
        </div>
        <h3 className="dollar-h3">
          {course.price}
          <i className="bx bx-dollar"></i>
        </h3>
        <div className="all__button2">{groupBtnAction}</div>
      </div>
    </div>
  );
};

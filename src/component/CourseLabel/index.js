import { Button, Rate, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import "./index.css";
import { gql, useMutation } from "@apollo/client";
import client from "../../configGQL";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import { useNavigate, useParams } from "react-router-dom";

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

  const [buyCourse] = useMutation(BUY_COURSE)
  const url = window.location.href
  const tutorId = course.tutorProfile.tutorId
  const setName = course?.sets.find(
    (data) => data.id === dateSet[0]?.setId
  );
  
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
      <>
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
          {course.price || 0}
          <i className="bx bx-dollar"></i>
        </h3>
        <div className="all__button2">{groupBtnAction}</div>
      </div>
    </div>
  );
};

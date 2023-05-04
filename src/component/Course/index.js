import "./index.css";
import { Link } from "react-router-dom";

const CourseComponent = ({ course, type }) => {
  const { firstName, lastName } = course.tutorProfile.tutor;
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
            />
          </div>
          <p className="course_author_info">{`${firstName} ${lastName}`}</p>
        </div>

        <div className="course_box_content_des">
          <p>{course.description}</p>
        </div>
        <Link to={type? `/courses/${course.id}` : `/dashboard/courses/${course.id}`} className="inline-btn">
          See detail
        </Link>
      </div>
    </div>
  );
};

export default CourseComponent;

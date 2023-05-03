import "./index.css";
import { Link } from 'react-router-dom'


const CourseComponent = ({ course }) => {
  return (
    <div className="course_box">
      <div className="course_thumnail">
        <img
          src="https://i.pinimg.com/564x/8b/c7/35/8bc735de0ba302f32f3fa1bebe361b67.jpg"
          alt=""
          className="course_image"
        />
      </div>
      <div className="course_box_content">
        <h3 className="course_box_content_title">Metaverse For Beginners</h3>
        <div className="course_author">
          <div className="course_author_image">
            <img
              src="https://i.pinimg.com/564x/0d/b1/d8/0db1d8d5fc83125ab2645388c06b3858.jpg"
              alt=""
            />
          </div>
          <p className="course_author_info">Christopher</p>
        </div>

        <div className="course_box_content_des">
          <p>
            an element that lets the user navigate to another view by tapping
            it, similar to how a elements work in a web app. In
            react-router-native, a link renders a TouchableHighlight an element
            that lets the user navigate to another view by tapping it, similar
            to how a elements work in a web app. In react-router-native, a link
            renders a TouchableHighlight
          </p>
        </div>
        <Link to="/viewcourses" className="inline-btn">
          See detail
        </Link>
      </div>
    </div>
  );
};

export default CourseComponent;

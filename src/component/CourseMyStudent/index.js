import { Progress } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import "../CourseMyStudent/CourseMyStudent.css";

export default function CourseMyStudent({ data }) {
  const { name, imageUrl } = data;
  const { lastName, firstName } = data.tutorProfile.tutor;

  return (
    <Link to={`/courses/${data.id}`} className="course__box1">
      <div className="course__pad1">
        <label>{data.category.name}</label>
        <div>
          <img alt="" src={imageUrl} className="course__img1"></img>
        </div>
        <div className="course__cinema">
          <h3 className="course__h3learn">{name}</h3>
          <h3 className="course__h3learn">{`${firstName} ${lastName}`}</h3>
          <p>
            <span className="course__span2">1</span> of{" "}
            {data.coursePrograms.length} course programs
          </p>
        </div>
      </div>

      <div className="course__tit">
        <p className="course__prog">Progress</p>
        <Progress
          percent={Math.round((1 / data.coursePrograms.length) * 100)}
          size="small"
          status="exception"
        />
      </div>
    </Link>
  );
}

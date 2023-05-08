import { Progress } from 'antd'
import React from 'react'
import "../CourseMyStudent/CourseMyStudent.css"



export default function CourseMyStudent({ data }) {
    const {
        name,
        imageUrl,
    } = data
    const {
        lastName,
        firstName,
    } = data.tutorProfile.tutor
    return (
        <div className="course__box1">
            <div className="course__pad1">
                <div>
                    <img alt="" src={imageUrl} className="course__img1"></img>
                </div>
                <div className="course__cinema">
                    <h3 className="course__h3learn">{`${firstName} ${lastName}`}</h3>
                    <h3 className="course__h3learn">
                        {name}
                    </h3>
                    <p>
                        <span className="course__span2">5</span> of 19 course progress
                    </p>
                </div>
            </div>
            <div className="course__tit">
                <p className="course__prog">Progress</p>
            </div>
            <div className="course__rourse">
                <Progress percent={5} size="small" status="exception"/>
            </div>
        </div>
    )
}

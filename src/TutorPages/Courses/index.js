import "../../TutorPages/Courses/courses.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import client from "../../configGQL";
import { gql } from "@apollo/client";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import CourseComponent from "../../component/Course";

function MyCoursestt() {
  const [courseList, setCourseList] = useState([]);
  console.log("🚀 ~ file: index.js:12 ~ MyCoursestt ~ courseList:", courseList);
  const userId = useSelector((state) => state.user.currentUser.id);

  const [activeTab, setActiveTab] = useState("1");
  const { TabPane } = Tabs;

  useEffect(() => {
    client
      .query({
        query: gql`
          query getCoursesByTutorId(
            $tutorId: String!
            $query: QueryFilterDto!
          ) {
            getCoursesByTutorId(tutorId: $tutorId, query: $query) {
              items {
                id
                name
                isPublish
                imageUrl
                spendTime
                description
                tutorProfile {
                  tutor {
                    firstName
                    lastName
                    avatar
                  }
                }
                coursePrograms {
                  id
                  isPublish
                }
              }
            }
          }
        `,
        variables: {
          query: {
            page: 1,
            limit: 10,
          },
          tutorId: `${userId}`,
        },
      })
      .then((result) => {
        setCourseList(result.data.getCoursesByTutorId.items);
      });
  }, [userId]);

  return (
    <div>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left"></div>
          </div>

          <div className="course-container">
            <div className="title-container">
              <h1 className="course__h1tittle">Courses</h1>
              <Link to="/addcourses">
                <button className="add-course">
                  <i class="bx bx-plus add__plus"></i>Add Course
                </button>
              </Link>
            </div>
            {/* <div className='course__padding'> */}
            <Tabs activeKey={activeTab} onChange={(key) => setActiveTab(key)}>
              <TabPane tab="Technology" key="1">
                <div className="student__box">
                  {courseList.map((data) => {
                    return <CourseComponent course={data} />;
                  })}
                </div>
              </TabPane>
              <TabPane tab="Languages" key="2">
                <p>Nội dung khoá học về Languages</p>
              </TabPane>
              <TabPane tab="Economics" key="3">
                <p>Nội dung khoá học về Economics</p>
              </TabPane>
              <TabPane tab="Marketing" key="4">
                <p>Nội dung khoá học về Marketing</p>
              </TabPane>
              <TabPane tab="Design" key="5">
                <p>Nội dung khoá học về Design</p>
              </TabPane>
            </Tabs>
            {/* </div> */}
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
}

export default MyCoursestt;

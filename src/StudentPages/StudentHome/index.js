import "../../StudentPages/StudentHome/studenthome.css";
import CourseComponent from "../../component/Course";
import { Tabs } from "antd";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";


const GET_COURSES = gql`
  query getCourses($params: QueryFilterDto!) {
    getCourses(query: $params) {
      items {
        id
        name
        imageUrl
        numberOfProgramRequired
        price
        description
        tutorProfile {
          tutor {
            firstName
            lastName
            avatarUrl
          }
        }
      }
    }
  }
`;
const HomeComponent = () => {

  const { TabPane } = Tabs;
  const [activeTab, setActiveTab] = useState("1");
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
  });

  const { data } = useQuery(GET_COURSES, {
    variables: params,
  });

  console.log("🚀 ~ file: index.js:37 ~ HomeComponent ~ data:", data);

  return (
    <>
      <section id="content">
        <main className="main-content">
          <div className="My__courses">
            <h1 className="student__heading11">our courses</h1>
            <Tabs activeKey={activeTab} onChange={(key) => setActiveTab(key)}>
              <TabPane tab="Technology" key="1">
                  <div className="student__box">
                        <CourseComponent/>
                        <CourseComponent/>
                        <CourseComponent/>
                        <CourseComponent/>
                        <CourseComponent/>
                        <CourseComponent/>
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
          </div>
        </main>
      </section>
    </>
  );
};

export default HomeComponent;

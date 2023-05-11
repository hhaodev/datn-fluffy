import "../../StudentPages/StudentHome/studenthome.css";
import CourseComponent from "../../component/Course";
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { gql, useQuery } from "@apollo/client";
import Pagnigation from "../../component/Pagnigation";

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

export const GET_CATEGORY = gql`
  query getCategories {
    getCategories(queryParams: { limit: 10, page: 1 }) {
      items {
        id
        name
      }
    }
  }
`;

const HomeComponent = () => {
  const { TabPane } = Tabs;
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
  });
  const [categories, setCategories] = useState(null);

  const [courses, setCourses] = useState([]);

  const { loading, error, data } = useQuery(GET_CATEGORY);

  const {
    loading: courseLoading,
    error: courseError,
    data: courseData,
  } = useQuery(GET_COURSES, {
    variables: { params },
  });

  const onChangeCategories = (e) => {
    const newParams = {
      ...params,
      filters: [
        {
          field: "Course.categoryId",
          operator: "eq",
          data: e,
        },
      ],
    };
    setParams(newParams);
  };

  useEffect(() => {
    if (!loading && data) {
      setCategories(data.getCategories.items);
      setParams(() => onChangeCategories(data.getCategories.items[0]?.id));
    }
  }, [loading, data, error]);

  useEffect(() => {
    if (!courseLoading && courseData) {
      setCourses(courseData.getCourses.items);
    }
  }, [params, courseLoading, courseData, courseError]);


  return (
    <>
      <section id="content">
        {categories && (
          <main className="main-content">
            <div className="My__courses">
              <h1 className="student__heading11">our courses</h1>
              <Tabs

                onChange={(key) =>
                  setParams({
                    limit: 9,
                    page: 1,
                    filters: [
                      {
                        field: "Course.categoryId",
                        operator: "eq",
                        data: key,
                      },
                    ],
                  })
                }
              >
                {categories &&
                  categories.map((category) => (
                    <TabPane tab={category.name} key={category.id}>
                      <div className="student__box">
                        {courses &&
                          courses.map((course) => (
                            <CourseComponent course={course}/>
                          ))}
                      </div>
                    </TabPane>
                  ))}
              </Tabs>
              <Pagnigation />
            </div>
          </main>
        )}
      </section>
    </>
  );
};

export default HomeComponent;

import "../../TutorPages/Courses/courses.css";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import client from "../../configGQL";
import { gql } from "@apollo/client";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import CourseComponent from "../../component/Course";
import { AutoComplete, Input } from 'antd';

function MyCoursestt() {
  const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
  const searchResult = (query) =>
    new Array(getRandomInt(5))
      .join('.')
      .split('.')
      .map((_, idx) => {
        const category = `${query}${idx}`;
        return {
          value: category,
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>
                Found {query} on{' '}
                <a
                  href={`https://s.taobao.com/search?q=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {category}
                </a>
              </span>
              <span>{getRandomInt(200, 100)} results</span>
            </div>
          ),
        };
      });

  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  const [courseList, setCourseList] = useState(null);
  const categories = useSelector((state) => state.categories.items);
  const userId = useSelector((state) => state.user.currentUser.id);
  const { TabPane } = Tabs;

  const [params, setParams] = useState({
    page: 1,
    limit: 9,
    filters: [
      {
        field: "Course.categoryId",
        operator: "eq",
        data: categories[0]?.id,
      },
    ],
  });

  useEffect(() => {
    client
      .query(
        {
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
                      avatarUrl
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
            query: params,
            tutorId: `${userId}`,
          },
        },
        {}
      )
      .then((result) => {
        setCourseList(result.data.getCoursesByTutorId.items);
      });
  }, [params]);

  return (
    <div>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left"></div>
          </div>
          <div className="course-container">
            <div className="title-container">
              <div className="heading-search">
                <h1 className="course__h1tittle">Courses</h1>
                <div className="search-btn">
                  <AutoComplete
                    dropdownMatchSelectWidth={252}
                    style={{
                      width: 500,
                    }}
                    options={options}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                    className="search-button"
                  >
                    <Input.Search size="large" placeholder="Search courses ..." enterButton />
                  </AutoComplete>
                </div>
              </div>
              <Link to="/addcourses">
                <button className="add-course">
                  <i class="bx bx-plus add__plus"></i>Add Course
                </button>
              </Link>
            </div>

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
                      {courseList &&
                        courseList.map((course) => (
                          <CourseComponent course={course} type="tutor" />
                        ))}
                    </div>
                  </TabPane>
                ))}
            </Tabs>
          </div>
        </main>
      </section>
    </div>
  );
}

export default MyCoursestt;

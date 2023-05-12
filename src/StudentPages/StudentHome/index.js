import "../../StudentPages/StudentHome/studenthome.css";
import CourseComponent from "../../component/Course";
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { gql, useQuery } from "@apollo/client";
import Pagnigation from "../../component/Pagnigation";
import { AutoComplete, Input } from 'antd';

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
          educations{
            schoolId
          }
          experiences{
            organization
            description
            position
          }
          certifications{
            name
            score
          }
        }
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query getCategories {
    getCategories(queryParams: { limit: 99, page: 1 }) {
      items {
        id
        name
      }
    }
  }
`;

const HomeComponent = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
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
              <div className="heading-search">
                <h1 className="student__heading11">our courses</h1>
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
                            <CourseComponent course={course} />
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

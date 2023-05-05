import "../../StudentPages/StudentHome/studenthome.css";
import CourseComponent from "../../component/Course";
import React, { useEffect, useState } from "react";
import { Segmented } from "antd";
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
  let reload = null;
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
            {/* <div class="student__grid">
            <h1 class="student__heading11">quick options</h1>

            <div class="box__std">
              <div class="boxchild__std">
                <h3 class="std__title">likes and comments</h3>
                <p class="std__like">
                  total likes : <span className="std__span1">25</span>
                </p>
                <a href="" class="std__inline">
                  view likes
                </a>
                <p class="std__like">
                  total comments : <span className="std__span1">12</span>
                </p>
                <a href="" class="std__inline">
                  view comments
                </a>
                <p class="std__like">
                  saved playlists : <span className="std__span1">4</span>
                </p>
                <a href="" class="std__inline">
                  view playlists
                </a>
              </div>

              <div class="boxchild__std">
                <h3 class="std__title">top categories</h3>
                <div class="std__flexs">
                  <a href="#" className="std__aa">
                    <i class="fas fa-code"></i>
                    <span className="spanx">development</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-chart-simple"></i>
                    <span className="spanx">business</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-pen"></i>
                    <span className="spanx">design</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-chart-line"></i>
                    <span className="spanx">marketing</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-music"></i>
                    <span className="spanx">music</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-camera"></i>
                    <span className="spanx">photography</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-cog"></i>
                    <span className="spanx">software</span>
                  </a>
                  <a href="#" className="std__aa">
                    <i class="fas fa-vial"></i>
                    <span className="spanx">science</span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
            <div className="My__courses">
              <h1 className="student__heading11">our courses</h1>
              <Segmented
                options={categories.map((category) => ({
                  label: category.name,
                  value: category.id,
                }))}
                onChange={(e) => onChangeCategories(e)}
                className="student__segmented"
              />

              <div className="student__box">
                {reload}
                {courses.length !== 0 &&
                  courses.map((course) => <CourseComponent course={course} />)}
                  
              </div>
             
                  <Pagnigation/>
                    
            </div>
          </main>
        )}
      </section>
    </>
  );
};

export default HomeComponent;

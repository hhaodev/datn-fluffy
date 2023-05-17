import "../../StudentPages/StudentHome/studenthome.css";
import CourseComponent from "../../component/Course";
import React, { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { Input, Select, Button } from "antd";
import { useSelector } from "react-redux";
import client from "../../configGQL";
import _ from "lodash";
import { SearchOutlined } from "@ant-design/icons";
import Pagination from "../../component/Pagnigation/index";
import SliderCourse from "../../component/SliderCourse";

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
          educations {
            schoolId
          }
          experiences {
            organization
            description
            position
          }
          certifications {
            name
            score
          }
        }
      }
      meta {
        totalPages
        currentPage
        itemCount
        totalItems
        itemsPerPage
      }
    }
  }
`;

const setOnChangeFilter = (field, value, setFilter, operator = "eq") => {
  setFilter((filter) => {
    const object = _.cloneDeep(filter);

    if (field.split(".").length > 1) {
      const index = object.filters.findIndex((el) => el.field === field);

      if (index >= 0) {
        object.filters[index].data = value;
      } else {
        object.filters.push({
          field: field,
          operator,
          data: value,
        });
      }
    } else {
      object[field] = value;
    }

    return object;
  });
};

const HomeComponent = () => {
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
  });

  const categories = useSelector((state) => state.categories.items);

  const [meta, setMeta] = useState(null);
  const [filter, setFilter] = useState({
    q: "",
    filters: [],
  });

  const [courses, setCourses] = useState([]);

  const onFilter = () => {
    setParams({ ...params, ...filter });
  };

  const onUnFilter = () => {
    setFilter({ q: "", filters: [] });
    setParams({
      limit: 10,
      page: 1,
    });
  };

  useEffect(() => {
    const getCourse = async () => {
      const result = await client.query({
        query: GET_COURSES,
        variables: {
          params,
        },
      });
      console.log("🚀 ~ file: index.js:99 ~ getCourse ~ result:", result);

      setCourses(result.data.getCourses.items);
      setMeta(result.data.getCourses.meta);
    };

    getCourse();
  }, [params]);

  return (
    <>
      <section id="content">
        {categories && (
          <main className="main-content">
            <h1>About Course</h1>
            <SliderCourse />
            <div className="My__courses">
              <div className="heading-search">
                {/* <h1 className="student__heading11">our courses</h1> */}
                <div className="search-btn">
                  <Input
                    placeholder="Search course ..."
                    onChange={(e) =>
                      setOnChangeFilter("q", e.target.value, setFilter)
                    }
                    suffix={<SearchOutlined />}
                  />
                </div>
                <div className="price-btn">
                  <Select
                    showSearch
                    style={{
                      width: 200,
                    }}
                    placeholder="Sort by Price"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[
                      {
                        value: "Course.price:ASC",
                        label: "Low to High",
                      },
                      {
                        value: "Course.price:DESC",
                        label: "High to Low",
                      },
                    ]}
                    onChange={(e) => {
                      setOnChangeFilter("orderBy", e, setFilter);
                    }}
                  />
                </div>
                <div className="categories-course">
                  <Select
                    showSearch
                    style={{
                      width: 200,
                    }}
                    placeholder="All Categories"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={categories.map((el) => ({
                      value: el.id,
                      label: el.name,
                    }))}
                    onChange={(e) => {
                      setOnChangeFilter("Course.categoryId", e, setFilter);
                    }}
                  />
                </div>
                <div className="filter-course">
                  <Button type="default" onClick={onFilter}>
                    <i className="bx bx-filter-alt"></i>Filter
                  </Button>
                  <Button type="default" onClick={onUnFilter}>
                    <i className='bx bx-x'></i>Un Filter
                  </Button>
                </div>
              </div>
              <div className="course-list-tutor">
                <div className="student__box">
                  {courses &&
                    courses.map((course) => (
                      <CourseComponent course={course} />
                    ))}
                </div>
                {meta && <Pagination meta={meta} setParams={setParams} />}
              </div>
            </div>
          </main>
        )}
      </section>
    </>
  );
};

export default HomeComponent;

import style from "../../TutorPages/Courses/courses.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import client from "../../configGQL";
import { gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import CourseComponent from "../../component/Course";
import {
  AutoComplete,
  Input,
  Modal,
  Upload,
  Select,
  Form,
  Tabs,
  Button,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { setError } from "../../Redux/features/notificationSlice";

const PRESIGN_URL = gql`
  mutation getPresignUrl($input: PreSignedUrlDto!) {
    presignedUrl(input: $input) {
      url
    }
  }
`;

const MUTATION_UPSERT_COURSE = gql`
  mutation createCourse($input: CourseDto!) {
    createCourse(input: $input) {
      id
      name
      imageUrl
      description
      price
      spendTime
    }
  }
`;

const handleCreateCourse = (input, dispatch, setModal, setParams) => {
  client
    .mutate({
      mutation: MUTATION_UPSERT_COURSE,
      variables: {
        input,
      },
    })
    .then((response) => {
      client.clearStore();
      setParams((params) => ({ ...params }));
      setModal(false);
    })
    .catch((error) => {
      dispatch(setError({ message: error.message }));
    });
};

const getPresignedUrl = async (file) => {
  const response = await client.mutate({
    mutation: PRESIGN_URL,
    variables: {
      input: {
        fileType: file.type,
        pathType: "Profile",
        fileName: file.name,
      },
    },
  });

  return response.data.presignedUrl.url;
};

function MyCoursestt() {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const [courseList, setCourseList] = useState(null);
  const categories = useSelector((state) => state.categories.items);
  const userId = useSelector((state) => state.user.currentUser.id);
  const [createCourse, setCreateCourse] = useState({
    name: null,
    description: null,
    imageUrl: null,
    categoryId: null,
  });

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

  const handleUpload = async (file) => {
    const presignedUrl = await getPresignedUrl(file);

    await axios
      .put(presignedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      })
      .then((message) => {
        setCreateCourse({
          ...createCourse,
          imageUrl: message.config.url.split("?")[0],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
                  price
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

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <section id="content" style={style}>
        <main>
          <div className="course__head-title">
            <div className="course__left"></div>
          </div>
          <div className="course-container">
            <div className="title-container">
              <div className="heading-search">
                <div className="search-btn">
                  <AutoComplete
                    dropdownMatchSelectWidth={252}
                    style={{
                      width: 500,
                    }}
                    className="search-button"
                  >
                    <Input.Search
                      size="large"
                      placeholder="Search courses ..."
                      enterButton
                    />
                  </AutoComplete>
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
                        value: "1",
                        label: "Low to High",
                      },
                      {
                        value: "2",
                        label: "High to Low",
                      },
                    ]}
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
                    options={[
                      {
                        value: "1",
                        label: "Technology",
                      },
                      {
                        value: "2",
                        label: "Languages",
                      },
                      {
                        value: "3",
                        label: "Economics",
                      },
                      {
                        value: "4",
                        label: "Marketing",
                      },
                      {
                        value: "5",
                        label: "Design",
                      },
                    ]}
                  />
                </div>
                <div className="filter-course">
                  <Button type="default">
                    <i className="bx bx-filter-alt"></i>Filter
                  </Button>
                </div>
                <button
                  className="add-course"
                  onClick={() => setIsModal(!isModal)}
                >
                  <i class="bx bx-plus add__plus"></i>Add Course
                </button>
              </div>
            </div>
            <Modal
              title="Create New Course"
              centered
              open={isModal}
              width={800}
              onCancel={() => setIsModal(false)}
              onOk={() =>
                handleCreateCourse(
                  createCourse,
                  dispatch,
                  setIsModal,
                  setParams
                )
              }
            >
              <Form className="form_create-course">
                <Form.Item label="Name">
                  <Input
                    onChange={(e) =>
                      setCreateCourse({ ...createCourse, name: e.target.value })
                    }
                  ></Input>
                </Form.Item>
                <Form.Item label="Category">
                  <Select
                    onChange={(e) =>
                      setCreateCourse({ ...createCourse, categoryId: e })
                    }
                  >
                    {categories.map((category) => (
                      <Select.Option value={category.id}>
                        {category.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Description">
                  <TextArea
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    onChange={(e) =>
                      setCreateCourse({
                        ...createCourse,
                        description: e.target.value,
                      })
                    }
                  ></TextArea>
                </Form.Item>
                <Form.Item label="Course Image">
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action={handleUpload}
                  >
                    {createCourse.imageUrl ? (
                      <img
                        src={createCourse.imageUrl}
                        alt="avatar"
                        style={{ width: "100%" }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </Form.Item>
              </Form>
            </Modal>
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

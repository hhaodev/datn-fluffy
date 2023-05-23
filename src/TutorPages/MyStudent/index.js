import "../../TutorPages/MyStudent/mystudent.css";
import { Table, Modal, Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import client from "../../configGQL";
import { gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import avt1 from "../../assets/images/avt1.jpg";

const MyStudenttutor = () => {
  const dispatch = useDispatch();
  const schoolsList = useSelector((state) => state.schools.schoolsData);
  const [studentList, setStudentList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [moreData, setMoreData] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    client
      .query({
        query: gql`
          query getMyStudents($query: QueryFilterDto!) {
            getMyStudents(query: $query) {
              items {
                id
                lastName
                firstName
                email
                phoneNumber
                gender
                avatarUrl
                studentProfile {
                  studentEducations {
                    schoolId
                  }
                }
              }
            }
          }
        `,
        variables: {
          query: {
            limit: 99,
            page: 1,
          },
        },
      })
      .then((result) => {
        setStudentList(result.data.getMyStudents.items);
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  }, [studentList]);

  const handleViewMoreClick = (record) => {
    setMoreData(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const dataSource = studentList.map((data) => ({
    id: data.id,
    name: data.firstName + " " + data.lastName,
    phoneNumber: data.phoneNumber,
    avatarUrl: data.avatarUrl,
    gmail: data.email,
    gender: data.gender,
    array: data.studentProfile,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text ? text : "null"}</span>,
    },
    {
      title: "Gmail",
      dataIndex: "gmail",
      key: "gmail",
      render: (text) => <span>{text ? text : "null"}</span>,
    },
    {
      title: "PhoneNumber",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text) => <span>{text ? text : "null"}</span>,
    },
    {
      title: "Detail",
      key: "detail",
      render: (record) => (
        <Button
          type="primary"
          onClick={() => handleViewMoreClick(record)}
          className="view__payment"
        >
          More
        </Button>
      ),
    },
  ];
  // end Table
  return (
    <>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1 className="course__studentmy">My student</h1>
            </div>
          </div>

          <div className="mystdtutor__content">
            <Table dataSource={dataSource} columns={columns} />
            <Modal
              closable={false}
              title="Profile"
              visible={isModalVisible}
              onCancel={handleOk}
              footer={[<Button onClick={handleOk}>Cancel</Button>]}
            >
              {moreData && (
                <Form form={form} name="view-more-form">
                  <div className="mystdtt__avtt">
                    <Avatar
                      size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                      }}
                      src={moreData.avatarUrl ? moreData.avatarUrl : avt1}
                      className="view__avt2"
                    />
                    <p className="mystdtt__name">
                      {moreData.name ? moreData.name : "null"}
                    </p>
                  </div>
                  <div className="school1">
                    <p className="mystdtt__school">UserId: </p>
                    <p>{moreData.id ? moreData.id : "null"}</p>
                  </div>
                  <div className="school1">
                    <p className="mystdtt__school">Gender: </p>
                    <p>{moreData.gender ? moreData.gender : "null"}</p>
                  </div>
                  <div className="school1">
                    <p className="mystdtt__school">Phone number:</p>
                    <p>
                      {moreData.phoneNumber ? moreData.phoneNumber : "null"}
                    </p>
                  </div>
                  <div className="school1">
                    <p className="mystdtt__school">School: </p>
                    {moreData.array?.studentEducations.map((school) => {
                      const t = schoolsList?.find(
                        (sch) => sch.id === school.schoolId
                      );
                      return <p>{t.name}</p>;
                    })}
                  </div>
                  <div className="courses1">
                    <p className="mystdtt__courses"></p>
                  </div>
                </Form>
              )}
            </Modal>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
};

export default MyStudenttutor;

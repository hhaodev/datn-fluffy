import "../../TutorPages/Session/session.css";
import React, { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";
import { Select, Button, Table } from "antd";
import client from "../../configGQL";
import { gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import dayjs from "dayjs";

const QUERY_SESSION = gql`
  query getMyBookedSessions($query: QueryFilterDto!) {
    getMyBookedSessions(query: $query) {
      items {
        data
        checkoutSessionId
        course {
          name
        }
        status
        price
        student {
          lastName
          firstName
        }
      }
    }
  }
`;

function SessionTutor() {
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
  });

  const categories = useSelector((state) => state.categories.items);

  const [filter, setFilters] = useState([]);

  const [dataSession, setDataSession] = useState([]);

  useEffect(() => {
    client
      .query({
        query: QUERY_SESSION,
        variables: {
          query: params,
        },
      })
      .then((result) => setDataSession(result.data.getMyBookedSessions.items))
      .catch((error) => dispatch(setError({ message: error.message })));
  }, [params]);

  const columns = [
    {
      title: "Student",
      dataIndex: "student",
      key: "student",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
      render: (text) => {
        const truncatedText = `${text.substring(0, 30)}...`;
        return <span>{truncatedText}</span>;
      },
    },
    {
      title: "CheckOut ID",
      dataIndex: "checkoutId",
      key: "checkoutId",
      render: (text) => {
        const truncatedText = `${text.substring(0, 20)}...`;
        return <span>{truncatedText}</span>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        const truncatedText = `${text} $`;
        return <span>{truncatedText}</span>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const data = dataSession.map((data) => ({
    student: data.student.firstName + " " + data.student.lastName,
    startDate: dayjs(data.data.startDate).format("HH:mm, DD/MM/YYYY"),
    endDate: dayjs(data.data.endDate).format("HH:mm, DD/MM/YYYY"),
    checkoutId: data.checkoutSessionId,
    courseName: data.course.name,
    price: data.price,
    status: data.status,
    data: data.data,
  }));

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  return (
    <div>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1 className="sesison__h1s">Session</h1>
            </div>
          </div>

          <div className="session__all">
            <div className="session__date">
              <div className="session_from1">
                <p>From</p>
                <Space direction="vertical" size={12}>
                  <DatePicker format={dateFormatList} />
                </Space>
              </div>

              <div className="session_to1">
                <p>To</p>
                <Space direction="vertical" size={12}>
                  <DatePicker format={dateFormatList} />
                </Space>
              </div>


              <Select
                showSearch
                placeholder="Category"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={categories.map((cate) => ({
                  value: cate.id,
                  label: cate.name,
                }))}
                className="session__select"
              />

              <div className="">
                <Select
                  showSearch
                  placeholder="Status"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "inprogress",
                      label: "In progress",
                    },
                    {
                      value: "incompleted",
                      label: "In completed",
                    },
                    {
                      value: "completed",
                      label: "Completed",
                    },
                  ]}
                  className="session__select"
                />
              </div>

              <div className="">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="session__filter"
                >
                  Filter
                </Button>
              </div>

              <div className="">
                <Button type="default" htmlType="submit" className="">
                  Clear
                </Button>
              </div>
            </div>

            <Table columns={columns} dataSource={data} />
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
}

export default SessionTutor;

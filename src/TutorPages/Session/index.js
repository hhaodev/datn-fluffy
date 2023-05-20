import "../../TutorPages/Session/session.css";
import React, { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";
import { Select, Button, Table } from "antd";
import client from "../../configGQL";
import { gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setError } from "../../Redux/features/notificationSlice";
import dayjs from "dayjs";


const QUERY_SESSION = gql`
  query getMyBookedSessions($query: QueryFilterDto!){
    getMyBookedSessions(query: $query){
      items{
        data
        contractUrl
        checkoutSessionId
        courseId
        status
        price
        student{
          lastName
          firstName
        }
      }
    }
  }
`

function SessionTutor() {
  const dispatch = useDispatch()
  const [params, setParams] = useState({
    limit: 99,
    page: 1,
  })
  const [dataSession, setDataSession] = useState([])


  useEffect(() => {
    client
      .query({
        query: QUERY_SESSION,
        variables: {
          query: params
        }
      })
      .then(result => setDataSession(result.data.getMyBookedSessions.items))
      .catch(error => dispatch(setError({ message: error.message })))
  }, [params]);



  const columns = [
    {
      title: "Student",
      width: 60,
      dataIndex: "student",
      key: "student",
    },
    {
      title: "Start Date",
      width: 60,
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      width: 60,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 50,
    },
  ];

  const data = dataSession.map(data => ({
    student: data.student.firstName + " " + data.student.lastName,
    startDate: dayjs(data.data.startDate).format("HH:mm, DD/MM/YYYY"),
    endDate: dayjs(data.data.endDate).format("HH:mm, DD/MM/YYYY"),
    status: data.status,
    data: data.data,
  }))


  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  return (
    <div>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1 className='sesison__h1s'>Session</h1>
            </div>
          </div>

          <div className="session__all">
            <div className="session__date">
              <p>From</p>
              <Space direction="vertical" size={12}>
                <DatePicker
                  format={dateFormatList}
                />
              </Space>
              <p>To</p>
              <Space direction="vertical" size={12}>
                <DatePicker
                  format={dateFormatList}
                />
              </Space>

              <Select
                showSearch
                placeholder="Course"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "reactjs",
                    label: "ReactJs",
                  },
                  {
                    value: "bootstrap",
                    label: "Bootstrap",
                  },
                  {
                    value: "gamedesign",
                    label: "Game Design",
                  },
                  {
                    value: "codeuniy",
                    label: "Code Unity",
                  },
                ]}
                className="session__select"
              />

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
                    value: "in progress",
                    label: "In Progress",
                  },
                  {
                    value: "Done",
                    label: "Done",
                  },
                ]}
                className="session__select"
              />

              <Button
                type="primary"
                htmlType="submit"
                className="session__filter"
              >
                Filter
              </Button>

              <Button type="default" htmlType="submit" className="">
                Clear
              </Button>
            </div>

            <Table
              columns={columns}
              dataSource={data}
            />
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
}

export default SessionTutor;

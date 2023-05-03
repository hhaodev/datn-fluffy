import "../../TutorPages/Session/session.css";
import { Menu } from "antd";
import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Select, Button, Table } from "antd";

function sessionTutor() {
  const columns = [
    {
      title: "Date",
      width: 60,
      dataIndex: "date",
      key: "date",
      fixed: "left",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "1",
      width: 60,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "2",
      width: 60,
    },
    {
      title: "Session",
      dataIndex: "session",
      key: "3",
      width: 60,
    },
    {
      title: "Tutor",
      dataIndex: "tutor",
      key: "4",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "5",
      fixed: "right",
      render: () => <a className="session__booked">Booked</a>,
      width: 50,
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  dayjs.extend(customParseFormat);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  return (
    <div>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1>Session</h1>
              {/* <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Session</a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="session__all">
            <div className="session__date">
              <p>From</p>
              <Space direction="vertical" size={12}>
                <DatePicker
                  defaultValue={dayjs("01/01/2015", dateFormatList[0])}
                  format={dateFormatList}
                />
              </Space>
              <p>To</p>
              <Space direction="vertical" size={12}>
                <DatePicker
                  defaultValue={dayjs("01/01/2015", dateFormatList[0])}
                  format={dateFormatList}
                />
              </Space>

              <Select
                showSearch
                placeholder="Course"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
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
                placeholder="Tutor"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "david",
                    label: "David",
                  },
                  {
                    value: "statham",
                    label: "Statham",
                  },
                  {
                    value: "ciniver",
                    label: "Ciniver",
                  },
                  {
                    value: "evon",
                    label: "Evon",
                  },
                ]}
                className="session__select"
              />

              <Select
                showSearch
                placeholder="Status"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "begin",
                    label: "Begin",
                  },
                  {
                    value: "in progress",
                    label: "In Progress",
                  },
                  {
                    value: "finish",
                    label: "Finish",
                  },
                  {
                    value: "to do",
                    label: "To Do",
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
              scroll={{
                x: 1500,
                y: 300,
              }}
            />
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
}

export default sessionTutor;

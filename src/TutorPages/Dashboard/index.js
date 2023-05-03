import "../../TutorPages/Dashboard/dashboard.css";
import React from "react";
import { Space } from "antd";
import { Select } from "antd";
import { Progress } from "antd";
import welcomett from "../../assets/images/welcome-removebg-preview.png";

function DashBoardtutor() {
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  // const data = [
  //   {
  //     title: "Ant Design Title 1",
  //   },
  //   {
  //     title: "Ant Design Title 2",
  //   },
  //   {
  //     title: "Ant Design Title 3",
  //   },
  //   {
  //     title: "Ant Design Title 4",
  //   },
  // ];

  return (
    <div>
      <section id="content">
        <main>
          <div className="dashboard__all">
            <ul class="box-info">
              <li>
                <i class="bx bxs-calendar-check"></i>
                <span class="text">
                  <h3>129</h3>
                  <p className="dashboard__rightp">Course</p>
                </span>
              </li>
              <li>
                <i class="bx bxs-group"></i>
                <span class="text">
                  <h3>260</h3>
                  <p className="dashboard__rightp">Student</p>
                </span>
              </li>
              <li>
                <i class="bx bxs-dollar-circle"></i>
                <span class="text">
                  <h3>$2543</h3>
                  <p className="dashboard__rightp">Total Money</p>
                </span>
              </li>
            </ul>

            <div className="table-data">
              <div className="dashboard__welcome">
                <div className="dashboard__tieude">
                  <h1 className="dashboard__welh1">Welcome back, John!</h1>
                  <p className="dashboard__rightp">
                    Your students completed{" "}
                    <span className="dashboard__span"> 94% </span>of the tasks
                    Progress is very good!
                  </p>
                </div>
                <img src={welcomett} className="dashboard__img"></img>
              </div>

              <div className="dashboard__part">
                <div className="dashboard__trum">
                  <div className="dashboard__work">
                    <p className="dashboard__working">Working hours</p>
                  </div>
                  <div className="dashboard__select">
                    <Select
                      labelInValue
                      defaultValue={{
                        value: "today",
                        label: "Today",
                      }}
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "tomorrow",
                          label: "Tomorrow",
                        },
                        {
                          value: "last week",
                          label: "Last week",
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className="dashboard__tik">
                  <Space wrap>
                    <Progress
                      type="circle"
                      percent={75}
                      className="dashboard__size"
                    />
                  </Space>
                  <div className="dashboard__circle">
                    <i class="bx bxs-circle"></i>Done
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard__box2"></div>
          </div>
        </main>
        {/* MAIN */}
      </section>
    </div>
  );
}

export default DashBoardtutor;

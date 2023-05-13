import "../../StudentPages/StudentSchedule/studentschedule.css";
import { Badge, Calendar } from "antd";
import { Collapse } from 'antd';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import React from 'react';
import { Rate } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;

function StudentSchedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { Panel } = Collapse;
  const onChange = (key) => {
    console.log(key);
  };
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          {
            type: "warning",
            content: "This is warning event.",
          },
          {
            type: "success",
            content: "This is usual event.",
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: "warning",
            content: "This is warning event.",
          },
          {
            type: "success",
            content: "This is usual event.",
          },
          {
            type: "error",
            content: "This is error event.",
          },
        ];
        break;
      case 15:
        listData = [
          {
            type: "warning",
            content: "This is warning event",
          },
          {
            type: "success",
            content: "This is very long usual event。。....",
          },
          {
            type: "error",
            content: "This is error event 1.",
          },
          {
            type: "error",
            content: "This is error event 2.",
          },
          {
            type: "error",
            content: "This is error event 3.",
          },
          {
            type: "error",
            content: "This is error event 4.",
          },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return (
    <>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1>My Schedule</h1>
            </div>
          </div>

          <div className="schedule__app">
            <Calendar cellRender={cellRender} className="schedule__calen" />
          </div>

          <div className="feedback_student">
            <div className="course__left">
              <h1 className="feedback_h1feedback">Feedback</h1>
            </div>

            <div className="feedback_box">
              <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="13/05/2023" key="1">
                  <div className="feedback_content1">
                    <p>How to use Nodejs & Nestjs framework</p>
                    <div className="feedback_link">
                      <Button type="link" onClick={showModal}>Link feedback</Button>
                    </div>
                  </div>

                  <Modal title="Feedback" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} closeIcon={<span className="my-close-icon">X</span>}>
                    <div className="box_feedback">
                      <div className="rates1">
                        <Rate className="feedback_rates" />
                      </div>

                      <div className="box_des1">
                        <h2 className="feedback_des1">Description</h2>
                        <div className="descruption_feedbacks">
                          <TextArea placeholder="Input here ..." rows={4} className="text-area-des1"/>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </Panel>
              </Collapse>
            </div>
          </div>
        </main>
      </section>
      {/* CONTENT */}
    </>
  );
}

export default StudentSchedule;

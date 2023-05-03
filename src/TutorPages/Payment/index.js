import "../../TutorPages/Payment/paymentt.css";
import React, { useState } from "react";
import { Table, Modal } from "antd";
import { AutoComplete } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { Select } from "antd";
import { Button, Input, Form, message, Typography, Divider } from "antd";
import copy from "copy-to-clipboard";

const PaymentTutor = () => {
  // form bill
  const { Title } = Typography;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const code = "pi_3Mvek7IHWASmV6k..."; // replace with your bill code
    copy(code);
    setIsCopied(true);
    message.success("Code has been copied to clipboard!");
  };

  const onFinishes = (values) => {
    console.log(values); // do something with form values
  };

  // end form bill

  // search
  // const renderTitle = (title) => (
  //   <span>
  //     {title}
  //     <a
  //       style={{
  //         float: 'right',
  //       }}
  //       href="https://www.google.com/search?q=antd"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       more
  //     </a>
  //   </span>
  // );
  // const renderItem = (title, count) => ({
  //   value: title,
  //   label: (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'space-between',
  //       }}
  //     >
  //       {title}
  //       <span>
  //         <UserOutlined /> {count}
  //       </span>
  //     </div>
  //   ),
  // });
  // end search

  // datapicker
  const dateFormatList = ["DD/MM/YYYY"];
  // End datapicker

  // sort by price
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const [size, setSize] = useState("middle");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  // end sort by price

  // Table
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleViewMoreClick = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
    setIsModalVisible(false);
  };

  const dataSource = [
    {
      purchase: "1",
      subtotal: "John Brown",
      Fee: 32,
      total: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];

  const columns = [
    {
      title: "Purchase date",
      dataIndex: "purchasedate",
      key: "purchasedate",
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
    },
    {
      title: "Fee",
      dataIndex: "fee",
      key: "fee",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentmethod",
      key: "paymentmethod",
    },
    {
      title: "Payment ID",
      dataIndex: "paymentid",
      key: "paymentid",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          type="primary"
          onClick={handleViewMoreClick}
          className="view__payment"
        >
          View more
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
              <h1>Payment</h1>
              {/* <ul className="course__breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a href="">Payment</a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="payment__container">
            <div className="payment__header">
              {/* Search */}
              <div className="">
                <AutoComplete
                  popupClassName="certain-category-search-dropdown"
                  dropdownMatchSelectWidth={500}
                  style={{
                    width: 250,
                  }}
                  className="payment__searchs"
                >
                  <Input.Search
                    size="large"
                    placeholder="Search by payment ID"
                  />
                </AutoComplete>
              </div>
              {/* end Search */}

              {/* Datepicker */}
              <div className="">
                <Space
                  direction="vertical"
                  style={{
                    width: 250,
                  }}
                  size={12}
                >
                  <DatePicker
                    placeholder="Purchase date"
                    defaultValue={dayjs("21/04/2023", dateFormatList[0])}
                    format={dateFormatList}
                    className="payment__spaces"
                  />
                </Space>
              </div>
              {/* end Datepicker */}

              {/* sort by price */}
              <div className="">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Sort by price"
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
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                  ]}
                />
              </div>
              {/* end sort by price */}

              {/* sort by purchase date */}
              <div className="">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Sort by purchase date"
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
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                  ]}
                />
              </div>
              {/* end sort by purchase date */}
            </div>

            {/* form click */}
            <div className="payment__table">
              <Table dataSource={dataSource} columns={columns} />
              <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                className="payment__modal"
              >
                <Form form={form} name="view-more-form" onFinish={onFinish}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 24,
                      }}
                    >
                      <div
                        style={{ flex: 1, marginRight: 24 }}
                        className="payment__bill1"
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 16,
                          }}
                          className="bill__copy"
                        >
                          <div className="bill__ma">
                            <div className="bill__codema">
                              pi_3Mvek7IHWASmV6k....
                            </div>
                            <div className="bill__atm">
                              Visa **** **** **** 4242
                            </div>
                          </div>
                          <Button onClick={handleCopyClick}>
                            <i class="bx bx-copy"></i>
                            {isCopied ? "Copied!" : "Copy"}
                          </Button>
                        </div>
                        <div
                          style={{ marginBottom: 16 }}
                          className="payment__flex"
                        >
                          <div className="flex1">
                            <p className="payment__purchase">Purchase date: </p>
                            <p className="payment__2023">
                              2023-04-23<span>11:37 PM</span>
                            </p>
                          </div>
                          <div className="flex2">
                            <p className="payment__subtotal">Subtotal: </p>
                            <p>$100.00</p>
                          </div>
                          <div className="flex3">
                            <p className="payment__total">Total: </p>
                            <p>$110.00</p>
                          </div>
                          <div className="flex4">
                            <p className="payment__fee">Fee: </p>
                            <p>$10.00</p>
                          </div>
                          <div className="flex5">
                            <p className="payment__currency">Currency: </p>
                            <p>USD</p>
                          </div>
                        </div>
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: 16 }}>
                          <h2 className="payment__tutoring">
                            Tutoring session
                          </h2>
                        </div>
                        <div>
                          <Form onFinish={onFinish} className="payment__right">
                            <div className="payment__li1">
                              <h4 className="payment__sub">
                                <i className="bx bxs-book-bookmark"></i>Subject:
                              </h4>
                              <p>Units 3/4 Literature</p>
                            </div>

                            <div className="payment__ttli1">
                              <div className="payment__li2">
                                <h4 className="payment__tutors">
                                  <i class="bx bxs-id-card"></i>Tutor:
                                </h4>
                                <p>Tutor19 Van</p>
                              </div>
                              <div className="payment__li3">
                                <h4 className="payment__prices">
                                  <i class="bx bxs-coin"></i>Price:
                                </h4>
                                <p>$150</p>
                              </div>
                            </div>

                            <div className="payment__ttli2">
                              <div className="payment__li4">
                                <h4 className="payment__sessiondates">
                                  <i class="bx bx-calendar"></i>Session date:
                                </h4>
                                <p>Apr 12,2023</p>
                              </div>
                              <div className="payment__li5">
                                <h4 className="payment__duration">
                                  <i class="bx bx-alarm"></i>Duration
                                </h4>
                                <p>1 hour</p>
                              </div>
                            </div>

                            <div className="payment__li6">
                              <h4 className="payment__times">
                                <i class="bx bx-hourglass"></i>Session time:
                              </h4>
                              <p>01:00 PM - 02:00 PM</p>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                    <Divider />
                  </div>
                </Form>
              </Modal>
            </div>
            {/* end from click */}
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
};

export default PaymentTutor;

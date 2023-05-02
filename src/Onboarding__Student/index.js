import "../Onboarding__Student/OnBoard__Student.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { gql } from "@apollo/client";
import client from "../configGQL";
import { DatePicker, Button, Form, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function OnBoard__Student() {
  const [formList, setFormList] = useState([
    { schoolId: null, fromYear: null, toYear: null },
  ]);

  const { Option } = Select;
  const navigate = useNavigate();
  const schoolsList = useSelector((state) => state.schools.schoolsData);

  const CREATE_STUDENT_ON_BOARDING_MUTATION = gql`
    mutation createStudentOnBoarding($input: CreateStudentOnBoardingDto!) {
      createStudentOnBoarding(input: $input) {
        message
        success
      }
    }
  `;

  const onChangeValue = (indexForm, field, value) => {
    const newForm = formList[indexForm];
    newForm[field] = value;

    const newFormList = formList.filter((el, index) => index !== indexForm);
    newFormList.push(newForm);

    setFormList(newFormList);
  };

  const onSubmitForm = () => {
    const input = {
      studentEducations: formList,
    };

    const createStudentOnBoarding = async (client, input) => {
      try {
        const { data } = await client.mutate({
          mutation: CREATE_STUDENT_ON_BOARDING_MUTATION,
          variables: { input },
        });

        return data.createStudentOnBoarding;
      } catch (error) {
        console.error(error);
      }
    };

    createStudentOnBoarding(client, input)
      .then((result) => {
        if (result.success) {
          navigate("/dashboard");
        }
      })
      .catch((error) => alert(error));
  };

  const handleDeleteForm = (index) => {
    const newFormList = formList.filter((el, i) => index !== i);
    setFormList(newFormList);
  };

  const handleAddForm = () => {
    const newFormList = formList.concat({
      schoolId: null,
      fromYear: null,
      toYear: null,
    });
    setFormList(newFormList);
  };

  return (
    <div className="body-onboarding">
      {/* <h1 className="student__logo">Fluffy</h1> */}
      <div className="form-wrapper">
        <div className="box__onboardstd">
          <div className="onboard__heading">
            <h2 className="student__heading">Onboarding</h2>
            <p className="onboardstd__welcome">
              Welcome! First things first ...
            </p>
          </div>
          <div className="student-form-container">
            <div className="student-onboarding-form">
              {formList.map((el, index) => (
                <div className="form__dropdown">
                  <Form
                    name="normal"
                    layout="vertical"
                    key={index}
                    style={{ border: "1px solid #ccc;" }}
                  >
                    <Form.Item
                      name="schoolId"
                      label="School"
                      rules={[
                        {
                          required: true,
                          message: "Please select school!",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select your school"
                        onChange={(e) => onChangeValue(index, "schoolId", e)}
                      >
                        {schoolsList.map((school) => {
                          return (
                            <Option key={school.id} value={school.id}>
                              {school.name}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="range-picker"
                      rules={[
                        {
                          required: true,
                          message: "Please select time!",
                        },
                      ]}
                      className="onboardstd__calendar"
                    >
                      <div className="onboardstd__calendar">
                        <div style={{ width: "45%" }}>
                          <label>From Year</label>
                          <DatePicker
                            onChange={(e) =>
                              onChangeValue(
                                index,
                                "fromYear",
                                dayjs(e).format("YYYY-MM-DD")
                              )
                            }
                          />
                        </div>
                        <div style={{ width: "45%" }}>
                          <label>To Year</label>
                          <DatePicker
                            onChange={(e) =>
                              onChangeValue(
                                index,
                                "toYear",
                                dayjs(e).format("YYYY-MM-DD")
                              )
                            }
                          />
                        </div>
                      </div>
                    </Form.Item>
                    {formList.length > 1 && index !== 0 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => handleDeleteForm(index)}
                      />
                    ) : null}
                  </Form>
                </div>
              ))}
            </div>
            <Button onClick={handleAddForm} className="student-add-form">
              <PlusOutlined /> Add form
            </Button>
          </div>
          <div className="submit-form-student">
            <Button
              type="primary"
              htmlType="submit"
              className="button-submit"
              onClick={onSubmitForm}
            >
              Submit
            </Button>
            <Link to="/dashboard" className="onboardstd__skip">
              Skip onboarding for student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnBoard__Student;

import "../Onboarding__Student/OnBoard__Student.css"
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import client from "../configGQL";
import {
  DatePicker,
  Button,
  Form,
  Select,
} from 'antd';
import { useSelector } from "react-redux";





function OnBoard__Student() {
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const navigate = useNavigate()
  const schoolsList = useSelector(state => state.schools.schoolsData)


  //mutation

  const CREATE_STUDENT_ON_BOARDING_MUTATION = gql`
    mutation createStudentOnBoarding($input: CreateStudentOnBoardingDto!) {
      createStudentOnBoarding(input: $input) {
        message
        success
      }
    }
  `;
  const onFinish = (values) => {
    const rangeValue = values['range-picker'];
    const fromYear = new Date(rangeValue[0]).toISOString()
    const toYear = new Date(rangeValue[1]).toISOString()
    const dataStudent = {
      schoolId: values.schoolId,
      toYear: toYear,
      fromYear: fromYear
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
    const input = { studentEducations: [dataStudent] };
    createStudentOnBoarding(client, input)
      .then((result) => {
        if (result.success) {
          navigate("/")
        }
      })
      .catch((error) => alert(error));
  }


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="body-onboarding">
      <h1 className="student__logo">Fluffy</h1>
      <div className="form-wrapper">
        <div className="box__onboardstd">
          <div className="onboard__heading">
            <h2 className="student__heading">Onboarding</h2>
          </div>
          <div className="onboardstd__p">
            <p className="onboardstd__welcome">Welcome! First things first ...</p>
          </div>
          <Form
            name="normal"
            className="form__dropdown"
            layout="vertical"
            initialValues={{
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="schoolId"
              label="School"
              rules={[
                {
                  required: true,
                  message: 'Please select school!',
                },
              ]}
            >
              <Select placeholder="Select your school">
                {schoolsList.map(school => {
                  return (
                    <Option key={school.id} value={school.id}>{school.name}</Option>
                  )
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name="range-picker"
              label="RangePicker"
              rules={[
                {
                  required: true,
                  message: 'Please select time!',
                },
              ]}
              className="onboardstd__calendar"
            >
              <RangePicker format="DD/MM/YYYY" />
            </Form.Item>
            {/* <div className="onboardstd__bot"> */}
              <Button type="primary" htmlType="submit" className="student__buttonsub">
                Submit
              </Button>
              <Link to="/studenthome" className="onboardstd__skip"><Button>Skip</Button></Link>
            {/* </div> */}
          </Form>
        </div>
      </div>
    </div>
  );
}


export default OnBoard__Student;

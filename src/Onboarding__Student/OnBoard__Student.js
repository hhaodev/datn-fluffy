import "../Onboarding__Student/OnBoard__Student.css"
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import imgright from '../assets/images/onboarding1.png'
import client from "../configGQL";

import {
  DatePicker,
  Button,
  Form,
  Select,
} from 'antd';

function OnBoard__Student() {
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const [schools, setSchools] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    client.query({
      query: gql`
      query getSchools($queryParams: QueryFilterDto!) {
        getSchools(queryParams: $queryParams) {
          items{
            name
            id
            location
          }
        }
      }
    `,
      variables: {
        queryParams: {
          limit: 10,
          page: 1
        }
      }
    })
  
      .then(result => {
        setSchools(result.data.getSchools.items)
      })
      .catch(error => {
        console.error(error);
      })
  }, [])


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
    const fromYear = new Date(rangeValue[0].format('DD/MM/YYYY')).toISOString()
    const toYear = new Date(rangeValue[1].format('DD/MM/YYYY')).toISOString()
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
    const input = { studentEducations: [ dataStudent ] };
    createStudentOnBoarding(client, input)
      .then((result) => {
        if(result.success) {
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
      <h1 className="Logo_onboarding">Onboarding</h1>
      <p className="p">Thank you for signing up for our account, let's start your goals with these steps</p>
      <div>
        <img src={imgright} className="img_onboarding"></img>
      </div>
      <div className="form-wrapper">
        <div className="content">
          <h2 className="h2">Fluffy</h2>
          <p className="welcome">Welcome! First things first ...</p>
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
                {schools.map(school => {
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
            >
              <RangePicker />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Link to=""><Button>Skip</Button></Link>
          </Form>
        </div>
      </div>
    </div>
  );
}


export default OnBoard__Student;
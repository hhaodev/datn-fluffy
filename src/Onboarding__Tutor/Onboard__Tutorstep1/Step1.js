import '../../Onboarding__Tutor/Onboard__Tutorstep1/OnboardTutor__Step1.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Steps } from 'antd';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';


function OnboardTutor__Step1() {
  const schoolsList = useSelector(state => state.schools.schoolsData)
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const description = '';
  const items = [
    {
      title: 'In Progress',
      description,
    },
    {
      title: 'Waiting',
      description,
    },
    {
      title: 'Waiting',
      description,
    },
    {
      title: 'Waiting',
      description,
    },
  ];


  const onFinish = (values) => {
    const rangeValue = values['range-picker'];
    const fromYear = new Date(rangeValue[0].format('DD/MM/YYYY')).toISOString()
    const toYear = new Date(rangeValue[1].format('DD/MM/YYYY')).toISOString()

  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div className="step1__body">
      <h1 className="step1__logo">Fluffy</h1>
      <div className='step1__step'>
        <>
          <Steps current={0} labelPlacement="vertical" items={items} className='step1__stepss' />
        </>
      </div>
      <div className="step1__wrapper">
        <div className="box__step1">
          <h2 className="step1__h2">Academic Level</h2>
          {/* <p className="welcome">Welcome! First things first ...</p> */}
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
            >
              <RangePicker />
            </Form.Item>
            <Form.Item
              label="What subject are you good at ?"
              name="yougood"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Upload here"
              valuePropName="fileList"
              rules={[
                {
                  required: true,
                  message: 'Please upload!',
                },
              ]}>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Button type="primary" htmlType="submit" className="student__buttonsub">
              <Link to="/onboardtutorstep2">Submit</Link>
            </Button>

          </Form>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step1;
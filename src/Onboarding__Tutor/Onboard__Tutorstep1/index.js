import '../../Onboarding__Tutor/Onboard__Tutorstep1/OnboardTutor__Step1.css'
import { Link, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { uploadToCloudinary } from '../../cloudinary/cloudinaryHelper';
import { setCurrentTutor, setCurrentTutor_educations } from '../../Redux/features/tutorSlice';

function OnboardTutor__Step1() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
  const handleUploadImage = (options) => {
    const { onSuccess, onError, file } = options;
    // console.log(options);
    uploadToCloudinary({
      file,
      fileType: "image",
      successCallback: onSuccess,
      failureCallback: onError,
    });
  };
  const onFinish = (values) => {
    const rangeValue = values['range-picker'];
    const fromYear = new Date(rangeValue[0]).toISOString()
    const toYear = new Date(rangeValue[1]).toISOString()
    const dataTutor = {
      schoolId: values.schoolId,
      toYear: toYear,
      fromYear: fromYear,
      scoreUrl: values.url
    };
    dispatch(setCurrentTutor_educations(dataTutor))
    navigate("/onboardtutorstep2")
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div className="step1__body">
      {/* <h1 className="step1__logo">Fluffy</h1> */}
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
              <RangePicker format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item
              label="Upload here"
              getValueFromEvent={(value) => value.file?.response}
              name="url"
              rules={[
                {
                  required: true,
                  message: 'Please upload!',
                },
              ]}>
              <Upload
                accept="image/*"
                name="url"
                customRequest={handleUploadImage}
                listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Button type="primary" htmlType="submit" className="student__buttonsub">
              Submit
            </Button>

          </Form>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step1;

import '../../Onboarding__Tutor/Onboard__Tutorstep3/OnboardTutor__Step3.css'
import imgright from '../../assets/images/backgroundapply.png';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Steps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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

function OnboardTutor__Step3() {

  const description = '';
  const items = [
    {
      title: 'Done',
      description,
    },
    {
      title: 'Done',
      description,
    },
    {
      title: 'In Progress',
      description,
    },
    {
      title: 'Waiting',
      description,
    },
  ];


  const onFinish = (values) => {

  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="step3__body">
      <h1 className="step3__logo">Fluffy</h1>
      <div className='step3__step'>
        <>
          <Steps current={2} labelPlacement="vertical" items={items} className='step3__stepss' />
        </>
      </div>
      <div className="step3__wrapper">
        <div className="step3__content">
          <h2 className="step3__h2">Certificate</h2>
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
              label="Name Certificate?"
              name="certificate"
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
            name="point"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
            label="Point">
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Upload"
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
              Submit
            </Button>
            <Link to="onboardtutorstep4"><Button>Skip</Button></Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step3;
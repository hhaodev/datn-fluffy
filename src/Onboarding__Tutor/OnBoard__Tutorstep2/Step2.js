import React from 'react'
import { Link } from "react-router-dom";
import '../../Onboarding__Tutor/OnBoard__Tutorstep2/OnboardTutor__Step2.css'
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







function OnboardTutor__Step2() {
  const { RangePicker } = DatePicker;
  const schoolsList = useSelector(state => state.schools.schoolsData)


  const description = '';
  const items = [
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
    {
      title: 'Waiting',
      description,
    },
  ];
  const onFinish = (values) => {
    const rangeValue = values['range-picker'];
    const fromYear = new Date(rangeValue[0].format('DD/MM/YYYY')).toISOString()
    const toYear = new Date(rangeValue[1].format('DD/MM/YYYY')).toISOString()
    console.log(values);

  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div className="step2__body">
      <h1 className="step2__logo">Fluffy</h1>

      <div className='step2__step'>
        <>
          <Steps current={1} labelPlacement="vertical" items={items} className='step2__stepss' />
        </>
      </div>

      <div className="step2__wrapper">
        <div className="step2__content">
          <h2 className="step2__h2">Work Experience</h2>
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
              label="Name Organization?"
              name="origan"
              rules={[
                {
                  required: true,
                  message: 'Please select time!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Position"
              name="position"
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
              name="range-picker"
              label="RangePicker"
              rules={[
                {
                  required: true,
                  message: 'Please input!',
                },
              ]}
            >
              <RangePicker />
            </Form.Item>
            <Form.Item
              name="describe"
              label="Describe"
              rules={[{ required: true, message: 'Please input' }]}
            >
              <Input.TextArea showCount maxLength={1000} />
            </Form.Item>


            <Button type="primary" htmlType="submit" className="student__buttonsub">
              Submit
            </Button>
            <Link to="onboardtutorstep3"><Button>Skip</Button></Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step2;
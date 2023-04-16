import React from 'react'
import { Link, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTutor, setCurrentTutor_experiences } from '../../Redux/features/tutorSlice';







function OnboardTutor__Step2() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
    const startTime = new Date(rangeValue[0]).toISOString()
    const endTime = new Date(rangeValue[1]).toISOString()
    console.log(values);
    const dataTutor = {
      organization: values.organization,
      description: values.description,
      positions: values.positions,
      startTime: startTime,
      endTime: endTime
    }
    dispatch(setCurrentTutor_experiences(dataTutor))
    navigate("/onboardtutorstep3")

  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div className="step2__body">
      {/* <h1 className="step2__logo">Fluffy</h1> */}

      <div className='step2__step'>
        <>
          <Steps current={1} labelPlacement="vertical" items={items} className='step2__stepss' />
        </>
      </div>

      <div className="step2__wrapper">
        <div className="box__step2">
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
              name="organization"
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
              <RangePicker format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please input' }]}
            >
              <Input.TextArea showCount maxLength={1000} />
            </Form.Item  >


            <Button type="primary" htmlType="submit" className="student__buttonsub2">
              Submit
            </Button>
            <Link to="onboardtutorstep3" className="step2__skip"><Button >Skip</Button></Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step2;

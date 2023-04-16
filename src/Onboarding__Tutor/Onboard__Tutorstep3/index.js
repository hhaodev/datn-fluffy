import '../../Onboarding__Tutor/Onboard__Tutorstep3/OnboardTutor__Step3.css'
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import { Steps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Upload,
} from 'antd';
import { uploadToCloudinary } from '../../cloudinary/cloudinaryHelper';
import { useDispatch } from 'react-redux';
import { setCurrentTutor_cetifications } from '../../Redux/features/tutorSlice';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

function OnboardTutor__Step3() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

//mutiton
  const CREATE_TUTOR_ON_BOARDING_MUTATION = gql`
    mutation createTutorOnboarding($input: CreateTutorOnboardingDto!) {
      createTutorOnboarding(input: $input) {
        id
      }
    }
  `;

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
    const dataTutor = {
      organization: values.certificate,
      score: values.point,
      awardUrl: values.url,
    }
    dispatch(setCurrentTutor_cetifications(dataTutor))
    
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="step3__body">
      {/* <h1 className="step3__logo">Fluffy</h1> */}
      <div className='step3__step'>
        <>
          <Steps current={2} labelPlacement="vertical" items={items} className='step3__stepss' />
        </>
      </div>
      <div className="step3__wrapper">
        <div className="box__step3">
          <h2 className="step3__h2">Certificate</h2>
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
              <Input />
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

            <Button type="primary" htmlType="submit" className="student__buttonsub3">
              Submit
            </Button>
            <Link to="onboardtutorstep4" className="step3__skip"><Button>Skip</Button></Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step3;

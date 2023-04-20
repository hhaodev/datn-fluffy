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
import { useDispatch, useSelector } from 'react-redux';
import { gql, } from '@apollo/client';
import client from '../../configGQL';

function OnboardTutor__Step3() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const educations_r = useSelector(state => state.tutor.currentTutor.educations)
  const experiences_r = useSelector(state => state.tutor.currentTutor.experiences)

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


  //mutiton
  const CREATE_TUTOR_ON_BOARDING_MUTATION = gql`
    mutation createTutorOnboarding($input: CreateTutorOnboardingDto!) {
      createTutorOnboarding(input: $input) {
        status
      }
    }`;

  const onFinish = (values) => {
    const createTutorOnboarding = async (client, input) => {
      try {
        const { data } = await client.mutate({
          mutation: CREATE_TUTOR_ON_BOARDING_MUTATION,
          variables: { input },
        });
        return data.createTutorOnboarding;
      } catch (error) {
        console.log(error);
      }
    };
    const educations = {
      schoolId: educations_r.schoolId,
      scoreUrl: educations_r.scoreUrl,
      fromYear: educations_r.fromYear,
      toYear: educations_r.toYear,
    }
    const experiences = {
      organization: experiences_r.organization,
      position: experiences_r.position,
      description: experiences_r.description,
      startTime: experiences_r.startTime,
      endTime: experiences_r.endTime,
    }
    const cetifications = {
      organization: values.organization,
      name: values.certificate,
      score: parseFloat(values.point),
      awardUrl: values.url,
    }
    const input = {
      educations: [educations],
      experiences: [experiences],
      certifications: [cetifications],
    };
    createTutorOnboarding(client, input)
      .then((result) => {
        if (result) {
          navigate("/onboardtutorstep4")
        }
      })
      .catch((error) => alert(error));
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
              label="Name Organization?"
              name="organization"
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
              <Input type='number' />
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

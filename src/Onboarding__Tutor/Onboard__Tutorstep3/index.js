import "../../Onboarding__Tutor/Onboard__Tutorstep3/OnboardTutor__Step3.css";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { Input, Steps } from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Form, Button, Upload, InputNumber } from "antd";
import { uploadToCloudinary } from "../../cloudinary/cloudinaryHelper";
import { setCurrentTutor_certifications } from "../../Redux/features/tutorSlice";
import { useDispatch, useSelector } from "react-redux";
import client from "../../configGQL";
import { gql } from "@apollo/client";
import { setError } from "../../Redux/features/notificationSlice";

const CREATE_TUTOR_ON_BOARDING_MUTATION = gql`
  mutation createTutorOnboarding($input: CreateTutorOnboardingDto!) {
    createTutorOnboarding(input: $input) {
      status
    }
  }
`;

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

function OnboardTutor__Step3() {
  const navigate = useNavigate();
  const educations = useSelector((state) => state.tutor.currentTutor.educations);
  const experiences = useSelector((state) => state.tutor.currentTutor.experiences);
  const tutorDataFromRedux = useSelector(state => state.tutor.currentTutor)
  const [formList, setFormList] = useState([
    { organization: null, score: null, name: null, awardUrl: null },
  ]);

  const dispatch = useDispatch();

  const description = "";
  const items = [
    {
      title: "Done",
      description,
    },
    {
      title: "Done",
      description,
    },
    {
      title: "Inprogress",
      description,
    },
    {
      title: "Waiting",
      description,
    },
  ];

  const onChangeValue = (indexForm, field, value) => {
    const newForm = formList[indexForm];

    newForm[field] = value || null;

    const newFormList = formList.filter((el, index) => index !== indexForm);

    newFormList.push(newForm);

    setFormList(newFormList);
  };

  const handleUploadImage = (options) => {
    const { onSuccess, onError, file } = options;

    uploadToCloudinary({
      file,
      fileType: "image",
      successCallback: onSuccess,
      failureCallback: onError,
    });
  };

  const handleDeleteForm = (index) => {
    const newFormList = formList.filter((el, i) => index !== i);
    setFormList(newFormList);
  };

  const handleAddForm = () => {
    const newFormList = formList.concat({
      organization: null,
      score: null,
      name: null,
      awardUrl: null,
    });
    setFormList(newFormList);
  };
  const handleSkipStep3 = () => {
    createTutorOnboarding(client, tutorDataFromRedux)
      .then((result) => {
        if (result) {
          navigate("/onboarding/step-4");
        }
      })
      .catch((error) => dispatch(setError({ message: error.message })));
  }

  const onSubmitStep1 = () => {
    let isValidated = true;
    formList.forEach((el) => {
      if (!el.organization || !el.name || !el.score || !el.awardUrl) {
        isValidated = false;
      }
    });

    if (!isValidated) {
      dispatch(setError({ message: "Please fill in all fields" }));
    } else {
      
      const tutorData = {
        educations: educations,
        experiences: experiences,
        certifications: formList,
      }
      createTutorOnboarding(client, tutorData)
        .then((result) => {
          if (result) {
            navigate("/onboarding/step-4");
          }
        })
        .catch((error) => dispatch(setError({ message: error.message })));
    }
  };

  return (
    <div className="step1__body step2__body step3__body">
      <div className="step1__step">
        <>
          <Steps
            current={2}
            labelPlacement="vertical"
            items={items}
            className="step1__stepss"
          />
        </>
      </div>

      <div className="form-wrapper">
        <div className="box__onboardstd">
          <h2 className="step2__h2">Certifications</h2>
          <div className="student-form-container">
            <div className="student-onboarding-form">
              {formList.map((el, index) => (
                <Form className="form__dropdown" layout="vertical">
                  <Form.Item label="Organization Name" name="organization">
                    <Input
                      onChange={(e) =>
                        onChangeValue(index, "organization", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="Certification Name"
                    name="name"
                  >
                    <Input
                      onChange={(e) =>
                        onChangeValue(index, "name", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item label="Score">
                    <InputNumber
                      min={0}
                      max={1000}
                      defaultValue={0}
                      onChange={(e) => onChangeValue(index, "score", e)}
                    />
                  </Form.Item>
                  <Form.Item name="Award Image" label="Award Image">
                    <Upload
                      listType="picture"
                      customRequest={handleUploadImage}
                      onChange={(e) =>
                        onChangeValue(index, "awardUrl", e.file.response)
                      }
                      onRemove={() => onChangeValue(index, "awardUrl", null)}
                    >
                      <Button
                        icon={<UploadOutlined />}
                        style={
                          el.scoreUrl
                            ? {
                              opacity: 0,
                              duration: "0.5s",
                              position: "absolute",
                            }
                            : {
                              position: "absolute",
                              opacity: "1",
                              left: "45%",
                              top: "45%",
                            }
                        }
                      >
                        Upload
                      </Button>
                    </Upload>
                  </Form.Item>
                  {formList.length > 1 && index !== 0 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => handleDeleteForm(index)}
                    />
                  ) : null}
                </Form>
              ))}
              <Button onClick={handleAddForm} className="student-add-form">
                <PlusOutlined /> Add form
              </Button>
            </div>
            <div className="tutor-button1">
              <div>
                <Button
                  type="primary"
                  className="button-submit"
                  onClick={onSubmitStep1}
                >
                  Next
                </Button>
              </div>
              <div>
                <Link className="step2__skip">
                  <Button onClick={handleSkipStep3} danger>Skip</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step3;

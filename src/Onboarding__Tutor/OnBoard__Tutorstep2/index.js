import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Onboarding__Tutor/OnBoard__Tutorstep2/OnboardTutor__Step2.css";
import { Steps } from "antd";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTutor_experiences } from "../../Redux/features/tutorSlice";
import { DatePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { setError } from "../../Redux/features/notificationSlice";

const { RangePicker } = DatePicker;

const description = "";
const items = [
  {
    title: "Done",
    description,
  },
  {
    title: "In Progress",
    description,
  },
  {
    title: "Waiting",
    description,
  },
  {
    title: "Waiting",
    description,
  },
];

function OnboardTutor__Step2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formList, setFormList] = useState([
    {
      organization: null,
      position: null,
      description: null,
      startTime: null,
      endTime: null,
    },
  ]);

  const onChangeValue = (indexForm, field, value) => {
    const newForm = formList[indexForm];

    newForm[field] = value || null;

    const newFormList = formList.filter((el, index) => index !== indexForm);

    newFormList.push(newForm);

    setFormList(newFormList);
  };

  const handleDeleteForm = (index) => {
    const newFormList = formList.filter((el, i) => index !== i);
    setFormList(newFormList);
  };

  const handleAddForm = () => {
    const newFormList = formList.concat({
      organization: null,
      position: null,
      description: null,
      startTime: null,
      endTime: null,
    });
    setFormList(newFormList);
  };

  const handleSubmitNextStep = () => {
    let isValidated = true;
    formList.forEach((el) => {
      if (
        !el.organization ||
        !el.position ||
        !el.startTime ||
        !el.endTime ||
        !el.description
      ) {
        isValidated = false;
      }
    });

    if (isValidated) {
      dispatch(setCurrentTutor_experiences(formList));
      navigate("/onboarding/step-3");
    } else {
      dispatch(setError({ message: "Please fill in all fields" }));
    }
  };

  return (
    <div className="step1__body step2__body">
      <div className="step1__step">
        <>
          <Steps
            current={1}
            labelPlacement="vertical"
            items={items}
            className="step1__stepss"
          />
        </>
      </div>

      <div className="form-wrapper">
        <div className="box__onboardstd">
          <h2 className="step2__h2">Experiences</h2>
          <div className="student-form-container">
            <div className="student-onboarding-form">
              {formList?.map((el, index) => (
                <Form className="form__dropdown" layout="vertical">
                  <Form.Item label="Organization Name" name="organization">
                    <Input
                      onChange={(e) =>
                        onChangeValue(index, "organization", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item label="Position" name="position">
                    <Input
                      required
                      onChange={(e) =>
                        onChangeValue(index, "position", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item label="RangePicker">
                    <RangePicker
                      onChange={(e) => {
                        onChangeValue(
                          index,
                          "startTime",
                          e && dayjs(e[0]).format("YYYY-MM-DD")
                        );
                        onChangeValue(
                          index,
                          "endTime",
                          e && dayjs(e[1]).format("YYYY-MM-DD")
                        );
                      }}
                    />
                  </Form.Item>
                  <Form.Item name="description" label="Description">
                    <Input.TextArea
                      required
                      showCount
                      defaultValue={el.description}
                      maxLength={1000}
                      onChange={(e) =>
                        onChangeValue(index, "description", e.target.value)
                      }
                    />
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
            <div className="onboard-button-all">
              <div className="onboard-button-next">
                <Button
                  type="primary"
                  className="button-submit"
                  onClick={handleSubmitNextStep}
                >
                  Next
                </Button>
              </div>
              <div className="onboard-button-skip">
                <Link to="/onboarding/step-3">
                  <Button danger>Skip</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step2;

import "../../Onboarding__Tutor/Onboard__Tutorstep1/OnboardTutor__Step1.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import { Form, Button, Select, DatePicker, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { uploadToCloudinary } from "../../cloudinary/cloudinaryHelper";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { setCurrentTutor_educations } from "../../Redux/features/tutorSlice";
import dayjs from "dayjs";

const description = "";
const items = [
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
  {
    title: "Waiting",
    description,
  },
];

function OnboardTutor__Step1() {
  const data = useSelector((state) => state.tutor.currentTutor.educations);
  const navigate = useNavigate();

  const [formList, setFormList] = useState(null);

  useEffect(() => {
    if (data.length) {
      setFormList(data);
    } else {
      setFormList([
        { schoolId: null, fromYear: null, toYear: null, scoreUrl: null },
      ]);
    }
  }, [data]);

  const schoolsList = useSelector((state) => state.schools.schoolsData);
  const dispatch = useDispatch();

  const { Option } = Select;

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
      schoolId: null,
      fromYear: null,
      toYear: null,
      scoreUrl: null,
    });
    setFormList(newFormList);
  };

  const onSubmitStep1 = () => {
    let isValidated = true;
    formList.forEach((el) => {
      if (!el.toYear || !el.schoolId || !el.scoreUrl || !el.fromYear) {
        isValidated = false;
      }
    });

    if (!isValidated) {
      alert("Please fill in all fields");
    } else {
      dispatch(setCurrentTutor_educations(formList));
      navigate("/onboarding/step-2");
    }
  };

  return (
    <div className="step1__body">
      <div className="step1__step">
        <>
          <Steps
            current={0}
            labelPlacement="vertical"
            items={items}
            className="step1__stepss"
          />
        </>
      </div>
      <div className="form-wrapper">
        <div className="box__onboardstd">
          <h2 className="step1__h2">Education</h2>

          <div className="student-form-container">
            <div className="student-onboarding-form">
              {formList?.map((el, index) => (
                <div className="form__dropdown">
                  <Form
                    name="normal"
                    layout="vertical"
                    key={index}
                    style={{ border: "1px solid #ccc;" }}
                  >
                    <Form.Item
                      name="schoolId"
                      label="School"
                      style={{ height: "30px;" }}
                    >
                      <Select
                        placeholder="Select your school"
                        onChange={(e) => onChangeValue(index, "schoolId", e)}
                        defaultValue={el.schoolId}
                      >
                        {schoolsList.map((school) => {
                          return (
                            <Option key={school.id} value={school.id}>
                              {school.name}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      className="onboardstd__calendar"
                      style={{ height: "30px;" }}
                    >
                      <div className="onboardstd__calendar">
                        <div style={{ width: "45%" }}>
                          <label>From Year</label>
                          <DatePicker
                            defaultValue={
                              el.fromYear && dayjs(el.fromYear, "YYYY-MM-DD")
                            }
                            onChange={(e) =>
                              onChangeValue(
                                index,
                                "fromYear",
                                dayjs(e).format("YYYY-MM-DD")
                              )
                            }
                          />
                        </div>
                        <div style={{ width: "45%" }}>
                          <label>To Year</label>
                          <DatePicker
                            defaultValue={
                              el.toYear && dayjs(el.toYear, "YYYY-MM-DD")
                            }
                            onChange={(e) =>
                              onChangeValue(
                                index,
                                "toYear",
                                dayjs(e).format("YYYY-MM-DD")
                              )
                            }
                          />
                        </div>
                      </div>
                    </Form.Item>
                    <Form.Item label="Score Image" name="url">
                      <Upload
                        listType="picture"
                        customRequest={handleUploadImage}
                        defaultFileList={
                          el.scoreUrl ? [{ uid: index, url: el.scoreUrl }] : []
                        }
                        onChange={(e) =>
                          onChangeValue(index, "scoreUrl", e.file.response)
                        }
                        onRemove={() => onChangeValue(index, "scoreUrl", null)}
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
                </div>
              ))}
            </div>
            <Button onClick={handleAddForm} className="student-add-form">
              <PlusOutlined /> Add form
            </Button>
          </div>
          <Button
            type="primary"
            onClick={onSubmitStep1}
            className="button-submit"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step1;

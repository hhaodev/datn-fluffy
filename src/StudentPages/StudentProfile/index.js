import "../StudentProfile/studentprofile.css";
import { Avatar, Button, Form, Input, Upload, Select } from "antd";
import { Link } from "react-router-dom";
import avt from "../../../src/assets/images/avt1.jpg";
import { useEffect, useState } from "react";
import client from "../../configGQL";
import gql from "graphql-tag";
import { UploadOutlined } from "@ant-design/icons";
import { uploadToCloudinary } from "../../cloudinary/cloudinaryHelper";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { setError } from "../../Redux/features/notificationSlice";
import { UserGender } from "../../constraint";

const UPDATEME = gql`
mutation updateMe($input: UpdateUserDto!) {
  updateMe(input: $input) {
    firstName
    lastName
    avatarUrl
    phoneNumber
    email
    gender
  }
}`;



function StudentProfile() {
  const { Option } = Select;
  const dispatch = useDispatch()
  const [dataUser, setDataUser] = useState()
  const [formValues, setFormValues] = useState();
  const idUser = useSelector(state => state.user.currentUser.id)

  const handleUploadImage = (options) => {
    const { onSuccess, onError, file } = options;

    uploadToCloudinary({
      file,
      fileType: "image",
      successCallback: onSuccess,
      failureCallback: onError,
    });
  };
  const [updateMe] = useMutation(UPDATEME);
  useEffect(() => {
    client
      .query({
        query: gql`
          query getMe {
            getMe {
              avatarUrl
              lastName
              firstName
              phoneNumber
              email
              gender
            }
          }
        `,
      })
      .then((result) => {
        setDataUser(result.data.getMe)
      })
  }, [dataUser]);


  const handleInputChange = (filed, value) => {
    setFormValues({
      ...formValues,
      [filed]: value
    });
  };
  const handleUpdate = () => {
    const data = {
      id: idUser,
      lastName: formValues?.lastName,
      firstName: formValues?.firstName,
      phoneNumber: formValues?.phoneNumber,
      avatarUrl: formValues?.avatarUrl,
      gender: formValues?.gender,
    }
    let isValidated = true;
    if (!data.firstName && !data.lastName && !data.phoneNumber && !data.avatarUrl && !data.gender) {
      isValidated = false;
    }
    if (isValidated === true) {
      const getData = async () => {
        try {
          const result = await updateMe({
            variables: {
              input: data,
            },
          });
          window.location.reload()
          setDataUser(result.data.updateMe)
          dispatch(setError({ message: "successfully" }));
          client.clearStore();
        } catch (error) {
          dispatch(setError({ message: error.message }));
        }
      };
      getData();
    }
    else {
      dispatch(setError({ message: "no data to update" }));
    }

  }

  return (
    <>
      {dataUser &&
        <section id="content">
          <main>
            <div className="course__head-title__view">
              <div className="course__left">
                <h1>View Profile</h1>
                <div className="view__allform">
                  <div className="view__form">
                    <div className="view__avt">
                      <h2 className="view__htitle">Personal Information</h2>
                      <div className="view_heading">
                        <Avatar
                          size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 120,
                          }}
                          src={dataUser?.avatarUrl ? dataUser.avatarUrl : avt}
                          className="view__avt2"
                        />
                        <Upload
                          listType="picture"
                          customRequest={handleUploadImage}
                          onChange={(e) => handleInputChange("avatarUrl", e.file.response)}
                        >
                          <Button
                            icon={<UploadOutlined />}
                            className="view__upload"
                          >
                            Upload picture
                          </Button>
                        </Upload>
                      </div>
                    </div>
                    <Form
                      name="normal_login"
                      className="login-form"
                      layout="vertical"
                      initialValues={{
                        remember: true,
                      }}
                    >
                      <div className="view__email">
                        <h3>Email: </h3>
                        <span>{dataUser?.email}</span>
                      </div>
                      <div className="view__firsts">
                        <Form.Item
                          label="First name"
                          name="firstname"
                          className="view__firsts1"
                        >
                          <Input
                            placeholder={dataUser?.firstName}
                            style={{ height: "50px", width: "258px" }}
                            className="profile__input"
                            onChange={(event) => handleInputChange("firstName", event.target.value)}
                          />
                        </Form.Item>

                        <Form.Item
                          label="Last name"
                          name="lastname"
                        >
                          <Input
                            onChange={(event) => handleInputChange("lastName", event.target.value)}
                            placeholder={dataUser?.lastName}
                            style={{
                              height: "50px",
                              width: "278px",
                              width: "278px",
                            }}
                          />
                        </Form.Item>
                      </div>


                      <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        className="view__firsts1"
                      >
                        <Input
                          onChange={(event) => handleInputChange("phoneNumber", event.target.value)}
                          placeholder={dataUser?.phoneNumber}
                          style={{
                            height: "50px",
                            width: "103%",
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="gender"
                        label="Gender"
                      >
                        <Select
                          placeholder={dataUser?.gender}
                          onChange={(event) => handleInputChange("gender", event)}
                        >
                          <Option value={UserGender.MALE}>Male</Option>
                          <Option value={UserGender.FEMALE}>Female</Option>
                        </Select>
                      </Form.Item>

                      <div className="view__bottom">
                        <Button
                          type="default"
                          htmlType="submit"
                          className="view__dis"
                        >
                          Discard
                        </Button>

                        <Button
                          onClick={handleUpdate}
                          type="primary"
                          htmlType="submit"
                          className="view__upload"
                        >
                          Save Changes
                        </Button>
                      </div>
                      <div className="button-changes">
                        <Button type="link" className="student_change"><Link to="/changepass">Change Password ?</Link></Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* MAIN */}
        </section>
      }

      {/* CONTENT */}
    </>
  );
}

export default StudentProfile;

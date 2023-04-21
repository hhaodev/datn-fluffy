import '../../TutorPages/AddCourse/addcourse.css'
import { Button, Form, Input, message, Select, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { uploadToCloudinary } from '../../cloudinary/cloudinaryHelper';
import { useNavigate } from 'react-router-dom';
import { Duration } from '../../constraint';
import { gql } from '@apollo/client';
import client from '../../configGQL';

function Addcourse() {

    const navigate = useNavigate()
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

    const CREATE_COURSE = gql`
        mutation createCourse($input: CourseDto!){
        createCourse(input: $input){
            id
        }
        }`;
    const onFinish = (values) => {
        const createCourse = async (client, input) => {
            try {
                const { data } = await client.mutate({
                    mutation: CREATE_COURSE,
                    variables: { input },
                });
                return data.createCourse;
            } catch (error) {
                console.log(error);
            }
        };
        let courseProgramPhases = {
            order: parseFloat(values.order),
            content: values.content,
            name: values.name_phase,
            overviewUrl: values.overviewUrl
        }
        let coursePrograms = {
            title: values.title,
            description: values.description_program,
            courseProgramPhases: [courseProgramPhases]
        }
        let input = {
            imageUrl: values.imageUrl,
            name: values.name_course,
            description: values.description_course,
            categoryId: values.categoryId,
            spendTime: parseFloat(values.spendTime),
            duration: values.duration,
            coursePrograms: [coursePrograms]
        }
        createCourse(client, input)
            .then((result) => {
                if (result)
                    console.log(result);
            })
            .catch((error) => alert(error));
    };

    const handleCancel = () => {
        navigate('/mycoursett')
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='add__all'>
            <h1 className='add__logo'>Fluffy</h1>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className='add__form'
            >
                <div className='add__infomation'>
                    <div className='add__box1'>
                        <h1 className='add__h1course'>Course Information</h1>
                        <Form.Item
                            name="name_course"
                            label="Course Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your course name!',
                                },
                            ]}
                        >
                            <Input style={{ height: "35px" }} />
                        </Form.Item>
                        <Form.Item
                            name="categoryId"
                            label="Category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                        >
                            <Input style={{ height: "35px" }} />
                        </Form.Item>
                        <Form.Item
                            name="description_course"
                            label="Description"
                            rules={[{ required: true, message: 'Add short description for course' }]}
                        >
                            <Input.TextArea showCount maxLength={1000} />
                        </Form.Item>
                        <Form.Item
                            name="duration"
                            label="Duration"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select duration!',
                                },
                            ]}
                        >
                            <Select>
                                <Select.Option value={Duration.MONTH}>MONTH</Select.Option>
                                <Select.Option value={Duration.DAY}>DAY</Select.Option>
                                <Select.Option value={Duration.HOUR}>HOUR</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="spendTime"
                            label="Total"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input total!',
                                },
                            ]}
                        >
                            <Input type='number' style={{ height: "35px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Upload here"
                            getValueFromEvent={(value) => value.file?.response}
                            name="imageUrl"
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
                    </div>
                </div>

                <div className='add__program'>
                    <div className='add__box2'>
                        <div className='add__tag'>
                            <h1 className='add__h1'>Course Program</h1>
                        </div>
                        <div className='addcourse__all'>
                            <Form.Item
                                name="title"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your program name!',
                                    },
                                ]}
                            >
                                <Input style={{ height: "35px" }} />
                            </Form.Item>
                            <Form.Item
                                name="description_program"
                                label="Description"
                                rules={[{ required: true, message: 'Add short description for course' }]}
                            >
                                <Input.TextArea showCount maxLength={1000} style={{ height: "50px" }} />
                            </Form.Item>
                            <div className='addcourse__a'>
                                <h1 className='add__phase'>Phase</h1>
                                <h2 className='add__session1'>Session 1</h2>
                                <Form.Item
                                    name="order"
                                    label="Order"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input!',
                                        },
                                    ]}
                                >
                                    <Input type='number' style={{ height: "35px" }} />
                                </Form.Item>
                                <Form.Item
                                    name="name_phase"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input!',
                                        },
                                    ]}
                                >
                                    <Input style={{ height: "35px" }} />
                                </Form.Item>
                                <Form.Item
                                    name="content"
                                    label="Content"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input!',
                                        },
                                    ]}
                                >
                                    <Input style={{ height: "35px" }} />
                                </Form.Item>
                                <Form.Item
                                    name="overviewUrl"
                                    label="OverView"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input!',
                                        },
                                    ]}
                                >
                                    <Input style={{ height: "35px" }} />
                                </Form.Item>
                            </div>
                            <div className='add__savecancel'>
                                <Button type="primary" htmlType="submit" className='add__addtomore'>
                                    Save
                                </Button>
                                <Button onClick={handleCancel}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>


            </Form>
        </div>
    );
}

export default Addcourse;

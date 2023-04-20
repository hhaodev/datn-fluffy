import '../../TutorPages/AddCourse/addcourse.css'
import { Button, Form, Input, message, Select, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { uploadToCloudinary } from '../../cloudinary/cloudinaryHelper';
import { useNavigate } from 'react-router-dom';

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

    const onFinish1 = (values) => {
        console.log(values);
    };

    const handleCancel = () => {
        navigate('/mycoursett')
    }

    const onFinishFailed1 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish2 = (values) => {
        console.log(values);
    };
    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='add__all'>
            <h1 className='add__logo'>Fluffy</h1>
            <div className='add__infomation'>
                <div className='add__box1'>
                    <h1 className='add__h1course'>Course Information</h1>
                    <Form
                        name="basic"
                        onFinish={onFinish1}
                        onFinishFailed={onFinishFailed1}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Form.Item
                            name="name"
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
                                    message: 'Please select category!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="description"
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
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="spendTime"
                            label="Total"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your total!',
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
                        <div className='add__savecancel'>
                            <Button type="primary" htmlType="submit" className='add__addtomore'>
                                Save
                            </Button>
                            <Button onClick={handleCancel}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>


            <div className='add__program'>
                <div className='add__box2'>
                    <div className='add__tag'>
                        <h1 className='add__h1'>Course Program</h1>
                        <Button type="default" htmlType="submit">
                            Add Program
                        </Button>
                    </div>

                    <Form
                        name="basic"
                        onFinish={onFinish2}
                        onFinishFailed={onFinishFailed2}
                        autoComplete="off"
                    >
                        <div className='addcourse__all'>
                            <Form.Item
                                label="Upload here"
                                getValueFromEvent={(value) => value.file?.response}
                                name="overviewUrl"
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
                            <Form.Item
                                name="programname"
                                label="Program Name"
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
                                name="description"
                                label="Description"
                                rules={[{ required: true, message: 'Add short description for course' }]}
                            >
                                <Input.TextArea showCount maxLength={1000} style={{ height: "140px" }} />
                            </Form.Item>
                            <div className='addcourse__a'>
                                <h1 className='add__phase'>Phase</h1>
                                <h2 className='add__session1'>Session 1</h2>
                                <Form.Item
                                    name="order1"
                                    label="Order"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your order!',
                                        },
                                    ]}
                                >
                                    <Input style={{ height: "35px" }} />
                                </Form.Item>
                                <Form.Item
                                    name="name1"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Name!',
                                        },
                                    ]}
                                >
                                    <Input style={{ height: "35px" }} />
                                </Form.Item>
                                <h2>Session 2</h2>
                                <Form.Item
                                    name="order2"
                                    label="Order"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your order!',
                                        },
                                    ]}
                                >
                                    <Input style={{ height: "35px" }} />
                                </Form.Item>
                                <Form.Item
                                    name="name2"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Name!',
                                        },
                                    ]}
                                >
                                    <Input style={{ height: "35px" }} />
                                </Form.Item>



                            </div>
                            <Button type="primary" htmlType="submit" className='add__addtomore add'>
                                Add to more
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default Addcourse;

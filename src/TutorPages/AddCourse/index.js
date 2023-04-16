import '../../TutorPages/AddCourse/addcourse.css'
import { Button, Form, Input, message, Select, Upload } from 'antd';
import { useState } from "react";
import { Checkbox } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function addcourse() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <h1>Course Information</h1>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                    name="coursename"
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
                    name="category"
                    label="Category"
                    rules={[
                        {
                            required: true,
                            message: 'Please select category!',
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
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
                    label="Upload here"
                    getValueFromEvent={(value) => value.file?.response}
                    name="url"
                    rules={[
                        {
                            required: true,
                            message: 'Please upload!',
                        },
                    ]}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="Total"
                    label="total"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your total!',
                        },
                    ]}
                >
                    <Input style={{ height: "35px" }} />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
                <Button type="default" htmlType="submit">
                    Cancel
                </Button>
            </Form>

            <h1>Course Program</h1>
            <Button type="default" htmlType="submit">
                Add Program
            </Button>

            <Form>
                <div className='addcourse__all'>
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
                        <Input.TextArea showCount maxLength={1000} />
                    </Form.Item>
                    <div className='addcourse__a'>
                        <h1>Phase</h1>
                        <h2>Session 1</h2>
                        <Form.Item
                            name="order"
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
                            name="name"
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
                            name="order"
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
                            name="name"
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
                    <Button type="primary" htmlType="submit">
                        Add to more
                    </Button>
                </div>
            </Form>

        </>

    );
}

export default addcourse;
import '../../Onboarding__Tutor/Onboard__Tutorstep1/OnboardTutor__Step1.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import imgright from '../../assets/images/backgroundsignin.png';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { Steps } from 'antd';


const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};



function OnboardTutor__Step1() {
  const { RangePicker } = DatePicker;

  const description = 'Academic Level';
  const items = [
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
    {
      title: 'Waiting',
      description,
    },
  ];
  const [isDivVisible, setIsDivVisible] = useState(false);
  function handleButtonClick() {
    setIsDivVisible(true);
  }
  const [school, setschool] = React.useState('');
  const handleChange = (event) => {
    setschool(event.target.value);
  };
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement('img');
          img.src = reader.result;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = 'red';
            ctx.textBaseline = 'middle';
            ctx.font = '33px Arial';
            ctx.fillText('Ant Design', 20, 20);
            canvas.toBlob((result) => resolve(result));
          };
        };
      });
    },
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="step1__body">
      <h1 className="step1__logo">Fluffy</h1>
      <div className='step1__step'>
        <>
          <Steps current={0} labelPlacement="vertical" items={items} className='step1__stepss' />
        </>
      </div>
      <div className="step1__wrapper">
        <div className="step1__content">
          <h2 className="step1__h2">Academic Level</h2>
          {/* <p className="welcome">Welcome! First things first ...</p> */}
          <div className="step1__formdropdown">
            <p className='step1__pheader'>Schools</p>
            <Select className='step1__school'
              style={{ width: 160 }}
              placeholder="Select your school"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  value: 'Duy Tan University',
                  label: 'Duy Tan University',
                },
                {
                  value: 'Bach Khoa',
                  label: 'Bach Khoa',
                },
              ]}
            />
            <p className='step1__year'>From year - To year</p>
            <Space direction="vertical" size={12}>
              <RangePicker className='step1__rangepicker' />
            </Space>
            <div className="step1__subject">
              <p className="step1__psubject">What subject are you good at?</p>
              <div className="step1__input">
                <input type="text" className='step1__text' />
              </div>
            </div>
            <p className='step1__textupload'>Update Academic here</p>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </div>
          <div>
            <button className="step1__plus"><i class="fa-solid fa-circle-plus"></i></button>
            
          </div>
          <div className='step1__footer'>
            <Link to="/onboardtutorstep2"><Button type="primary" htmlType="submit" className="step1__buttonsub">
              Submit
            </Button></Link>
            <Link to="/onboardtutorstep2"><Button>Skip</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step1;
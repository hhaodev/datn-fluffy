import '../../Onboarding__Tutor/Onboard__Tutorstep3/OnboardTutor__Step3.css'
import imgright from '../../assets/images/backgroundapply.png';
import { Input } from 'antd';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { Select } from 'antd';
import { Steps } from 'antd';
import { Button } from 'antd';

function OnboardTutor__Step3() {

  const description = 'Academic Level';
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

  return (
    <div className="step3__body">
      <h1 className="step3__logo">Fluffy</h1>
      <div className='step3__step'>
        <>
          <Steps current={2} labelPlacement="vertical" items={items} className='step3__stepss' />
        </>
      </div>
      <div className="step3__wrapper">
        <div className="step3__content">
          <h2 className="step3__h2">Certificate</h2>
          {/* <p className="welcome">Welcome! First things first ...</p> */}
          <div className="step3__formdropdown">

            <div className='step3__inputall'>
              <div className='step3__input1'>
                <p className='step3__pinput'>Name Certificate</p>
                <input type="text" className='step3__inputtext' />
              </div>
              <div className='step3__input2'>
                <p className='step3__pinput'>Point</p>
                <input type="text" className='step3__inputtext' />
              </div>
            </div>

            <p className='step3__textupload'>Update Certificate</p>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </div>
          <div>
            <button className="step1__plus"><i class="fa-solid fa-circle-plus"></i></button>
            
          </div>

        </div>
        <div className='step3__footer'>
          <Link to="/onboardtutorstep4"><Button type="primary" htmlType="submit" className="step1__buttonsub">
            Submit
          </Button></Link>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step3;
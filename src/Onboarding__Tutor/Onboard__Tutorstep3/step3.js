// import React from 'react'
import '../../Onboarding__Tutor/Onboard__Tutorstep3/OnboardTutor__Step3.css'
import imgright from '../../assets/images/backgroundapply.png';

import { Input } from 'antd';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';





function OnboardTutor__Step3() {
//   const { TextArea } = Input;
//   const onChange = (e) => {
//   console.log('Change:', e.target.value);

//   const [img, setImg] = useState()

//   const handlePreviewImg = (e) => {
//     const file = e.target.files[0];
//     file.preview = URL.createObjectURL(file)
//     setImg(file)
//     }

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
        <p className="step3__p">Thank you for signing up for our account, let's start your goals with these steps</p>
        <div>
          <img src={imgright} className="step3__img"></img>
        </div>
      <div className="step3__wrapper">
        <div className="step3__content">
          <h2 className="step3__h2">Certificate</h2>
          {/* <p className="welcome">Welcome! First things first ...</p> */}
          <div className="step3__formdropdown">
         
         <div className='step3__inputall'>
          <div className='step3__input1'>
            <p className='step3__pinput'>Name Certificate</p>
            <input type="text"  className='step3__inputtext'/>
          </div>
          <div className='step3__input2'>
            <p className='step3__pinput'>Point</p>
            <input type="text" className='step3__inputtext'/>
          </div>
         </div>
         {/* <div className='step3__upload'>
        <p className='step3__pupload'>Update Certificate</p>
      <input type="file" onChange={handlePreviewImg} className="step3__input"/>
      {img && (
        <img src={img.preview} alt="" width="100%" className='step3__imgborder'/>
      )}
    </div> */}
    <p className='step3__textupload'>Update Certificate</p>
    <Upload {...props}>
    <Button ><i class="fa-sharp fa-solid fa-upload"></i>Upload</Button>
  </Upload>
             </div>
        <div className="step3__bottom"> 
          <Button variant="contained" className="step3__button"><Link to="/onboardtutorstep4">Next</Link></Button>
          <Link to="/onboardtutorstep4" className="skip">skip</Link> 
           </div>
          </div>
        </div>
       </div>
     );
}

export default OnboardTutor__Step3;
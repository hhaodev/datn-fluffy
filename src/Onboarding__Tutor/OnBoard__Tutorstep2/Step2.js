import React from 'react'
import '../../Onboarding__Tutor/OnBoard__Tutorstep2/OnboardTutor__Step2.css'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import imgright from '../../assets/images/onboarding1.png';
import TextField from '@mui/material/TextField';
import { Input } from 'antd';



function OnboardTutor__Step2() {
  const [school, setschool] = React.useState('');
  const handleChange = (event) => {
    setschool(event.target.value);
  };


  const { TextArea } = Input;
  const onChange = (e) => {
  console.log('Change:', e.target.value);
};
  return ( 
    <div className="step2__body">
      <h1 className="step2__logo">Onboarding</h1>
      <p className="step2__p">Thank you for signing up for our account, let's start your goals with these steps</p>
      <div>
        <img src={imgright} className="step2__img"></img>
      </div>
    <div className="step2__wrapper">
      <div className="step2__content">
        <h2 className="step2__h2">Work Experience</h2>
        {/* <p className="welcome">Welcome! First things first ...</p> */}
        <div className="step2__formdropdown">
       
       <div className='step2__inputall'>
        <div className='step2__input1'>
          <p className='step2__pinput'>Name Organization</p>
          <input type="text"  className='step2__inputtext'/>
        </div>
        <div className='step2__input2'>
          <p className='step2__pinput'>Position</p>
          <input type="text" className='step2__inputtext'/>
        </div>
       </div>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['School Time']}>
        <DateRangePicker  localeText={{ start: 'From year', end: 'To year' }} />
      </DemoContainer>
    </LocalizationProvider>
    
    <div className='step2__describe'>
    <>
    <p className='step2__pdescribe'>Describe</p>
    <TextArea
      showCount
      maxLength={1000}
      style={{
        height: 160,
        resize: 'none',
      }}
      onChange={onChange}
      placeholder="disable resize"
    />
  </>
  </div>

 
   

    {/* <div className='step2__upload'>
      <input type="file" onChange={handlePreviewImg} className="step2__input"/>
      {img && (
        <img src={img.preview} alt="" width="100%"/>
      )}
    </div> */}
           </div>
   
        <Stack spacing={2} direction="row"></Stack>
      <div className="step2__bottom"> 
        <Button variant="contained" className="step2__button"><Link to="/onboardtutorstep3">Next</Link></Button>
        <Link to="/onboardtutorstep3" className="skip">skip</Link> 
         </div>
        </div>
      </div>
     </div>
   );
}

export default OnboardTutor__Step2;
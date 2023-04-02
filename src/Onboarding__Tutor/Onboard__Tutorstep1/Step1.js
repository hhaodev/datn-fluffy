import '../../Onboarding__Tutor/Onboard__Tutorstep1/OnboardTutor__Step1.css'
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
import React, { useState } from 'react';
import imgright from '../../assets/images/backgroundsignin.png';
// import * as React from 'react';
import { Upload } from 'antd';

function OnboardTutor__Step1() {

  const [isDivVisible, setIsDivVisible] = useState(false);

  function handleButtonClick() {
  setIsDivVisible(true);
}


  const [school, setschool] = React.useState('');
  const handleChange = (event) => {
    setschool(event.target.value);
  };

  // const [img, setImg] = useState()

  // const handlePreviewImg = (e) => {
  //   const file = e.target.files[0];
  //   file.preview = URL.createObjectURL(file)
  //   setImg(file)
  //   }

  // form input

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
      <div className="step1__body">
      <h1 className="step1__logo">Fluffy</h1>
      <p className="step1__p">Thank you for signing up for our account, let's start your goals with these steps</p>
      <div>
        <img src={imgright} className="step1__img"></img>
      </div>
    <div className="step1__wrapper">
      <div className="step1__content">
        <h2 className="step1__h2">Academic Level</h2>
        {/* <p className="welcome">Welcome! First things first ...</p> */}
        <div className="step1__formdropdown">
          <Box className="step1__dropdown" sx={{ minWidth: 120 }}>
        <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">School</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={school}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Phan Boi Chau High School</MenuItem>
          <MenuItem value={20}>Quang Ninh High School</MenuItem>
          <MenuItem value={30}>Phan Thanh Tai High School</MenuItem>
          <MenuItem value={40}>Nguyen Binh Khiem High School</MenuItem>
          <MenuItem value={20}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['School Time']}>
        <DateRangePicker  localeText={{ start: 'From year', end: 'To year' }} />
      </DemoContainer>
    </LocalizationProvider>


    <div className="step1__subject">
    <p className="step1__psubject">What subject are you good at?</p>
    <div className="step1__input">
      <input type="text" className='step1__text'/>
    {/* <Stack
      component="form"
      sx={{
        width: '24ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
      />
    </Stack> */}
    </div>
    </div>


    <p className='step1__textupload'>Update Academic here</p>
    <Upload  {...props}>
    <Button ><i class="fa-sharp fa-solid fa-upload"></i> Upload</Button>
  </Upload>

    {/* <div className='step1__upload'>
      <input type="file" onChange={handlePreviewImg} className="step1__input"/>
      {img && (
        <img src={img.preview} alt="" width="100%" className='step1__imgborder'/>
      )}
    </div> */}
           </div>
    <div>
    <button className="step1__plus" onClick={handleButtonClick}><i class="fa-solid fa-circle-plus"></i></button>
    {isDivVisible && <div/>}
    </div>
        <Stack spacing={2} direction="row"></Stack>
      <div className="step1__bottom"> 
        <Button variant="contained" className="step1__button"><Link to="/onboardtutorstep2">Next</Link></Button>
        {/* <Link to="/Path" className="skip">skip</Link>  */}
         </div>
        </div>
      </div>
     </div>
     );
}

export default OnboardTutor__Step1;
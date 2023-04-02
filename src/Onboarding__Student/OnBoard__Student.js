import "../Onboarding__Student/OnBoard__Student.css"
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
import imgright from '../assets/images/onboarding1.png'




function OnBoard__Student() {

// 
const [isDivVisible, setIsDivVisible] = useState(false);


  // 
  const [school, setschool] = React.useState('');
  const handleChange = (event) => {
    setschool(event.target.value);
  };



  return (  
    <div className="body-onboarding">
      <h1 className="Logo_onboarding">Onboarding</h1>
      <p className="p">Thank you for signing up for our account, let's start your goals with these steps</p>
      <div>
        {/* <img src={imgright} className="img_onboarding"></img> */}
      </div>
    <div className="form-wrapper">
      <div className="content">
        <h2 className="h2">Fluffy</h2>
        <p className="welcome">Welcome! First things first ...</p>
        <div className="form__dropdown">
          <Box className="dropdown" sx={{ minWidth: 120 }}>
        <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >School</InputLabel>
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
           </div>

    <div>
    <button className="plus_onboard"><i class="fa-solid fa-circle-plus"></i></button>
    {isDivVisible && <div/>}
    </div>
           <Stack spacing={2} direction="row"></Stack>

          
      <div className="bottom"> 
        <Button variant="contained" className="button_next">Next</Button>
        <Link to="/Path" className="skip">skip</Link> 
         </div>
        </div>
      </div>
     </div>
);
}


export default OnBoard__Student;
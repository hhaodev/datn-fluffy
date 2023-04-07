import React from 'react'
import '../../Onboarding__Tutor/OnBoard__Tutorstep2/OnboardTutor__Step2.css'
import { Link } from "react-router-dom";
import imgright from '../../assets/images/onboarding1.png';
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import { Button } from 'antd';
import { Select } from 'antd';
import { Steps } from 'antd';







function OnboardTutor__Step2() {
<<<<<<< HEAD

=======
  const { RangePicker } = DatePicker;

  const [school, setschool] = React.useState('');
  const handleChange = (event) => {
    setschool(event.target.value);
  };
>>>>>>> 4a0f398beb35323079b01ba523ab2d5f50c21aac

  const description = 'Academic Level';
  const items = [
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
    {
      title: 'Waiting',
      description,
    },
  ];


  const { TextArea } = Input;
  const onChange = (e) => {
    console.log('Change:', e.target.value);
  };

 
  return (
    <div className="step2__body">
      <h1 className="step2__logo">Fluffy</h1>

      <div className='step2__step'>
      <>
        <Steps current={1} labelPlacement="vertical" items={items} className='step2__stepss' />
      </>
      </div>

      <div className="step2__wrapper">
        <div className="step2__content">
          <h2 className="step2__h2">Work Experience</h2>
          {/* <p className="welcome">Welcome! First things first ...</p> */}
          <div className="step2__formdropdown">

            <div className='step2__inputall'>
              <div className='step2__input1'>
                <p className='step2__pinput'>Name Organization</p>
                <input type="text" className='step2__inputtext' />
              </div>
              <div className='step2__input2'>
                <p className='step2__pinput'>Position</p>
                <input type="text" className='step2__inputtext' />
              </div>
            </div>

            <p className='step2__year'>From year - To year</p>

            <Space direction="vertical" size={12}>
              <RangePicker className='step2__rangepicker' />

            </Space>

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

          
          </div>

          <div className="step2__bottom">
          </div>
        </div>
        <div className='step2__footer'>
              <Link to="/onboardtutorstep3"><Button type="primary" htmlType="submit" className="step2__buttonsub">
                Submit
              </Button></Link>
              <Link to="/onboardtutorstep3"><Button>Skip</Button></Link>
            </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step2;
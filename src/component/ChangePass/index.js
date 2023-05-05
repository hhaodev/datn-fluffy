import '../ChangePass/index.css'
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd'

function ChangePass() {
  // onFinish
  const onFinish = (values) => {
    console.log(values);
  };
  // onFinish
  return (
    <>
      <div className='form-change'>
        <h3 className='change_h3'>Change Password</h3>
        <p className='change_des'>For account security, please do not share your password with others</p>
        <div className='form-child'>
          <Form
            name="normal_login"
            className="login-form"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="Current password"
              name="currentpassword"
              rules={[
                {
                  required: true,
                  message: "Please input your current password!",
                },
              ]}
            >
              <Input
                style={{ height: "50px" }}
              />
              <Link to="/forgot-password" className='change_forgot'>Forgot password</Link>
            </Form.Item>

            <Form.Item
              label="New Password"
              name="newpassword"
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
              ]}
            >
              <Input
                style={{ height: "50px" }}
              />
            </Form.Item>

            <Form.Item
              label="Confirm password"
              name="confirmpassword"
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
              ]}
            >
              <Input
                style={{ height: "50px" }}
              />
            </Form.Item>

            <Button type='primary'>confirm</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ChangePass;
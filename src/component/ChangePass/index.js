import '../ChangePass/index.css'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd'
import { gql, useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setError } from '../../Redux/features/notificationSlice';

function ChangePass() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const CHANGE_PASSWORD = gql`
    mutation changePassword($input: ChangePasswordDto!) {
      changePassword(input: $input) {
            message
            success
        }
    }`;
  const [changePass] = useMutation(CHANGE_PASSWORD);

  const onFinish = (values) => {
    let data = {
      passwordConfirm: values.passwordConfirm,
      newPassword: values.newPassword
    }
    const getData = async () => {
      try {
        const result = await changePass({
          variables: {
            input: data,
          },
        });
        dispatch(setError(result.data.changePassword.message))
        navigate("/profile")
      } catch (error) {
        dispatch(setError({ message: error.message }));
      }
    };
    getData();
  }

  return (
    <>
      <div className='form-change'>
        <h3 className='change_h3'>Change Password</h3>
        <p className='change_des'>For account security, please do not share your password with others</p>
        <div className='form-child'>
          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Current Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              className="signup__pass"
            >
              <Input.Password style={{ height: "40px", width: "250px" }} />
            </Form.Item>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              className="signup__pass"
            >
              <Input.Password style={{ height: "40px", width: "250px" }} />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
              className="signup__pass"
            >
              <Input.Password style={{ height: "40px", width: "250px" }} />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
              >
                Change
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ChangePass;
import "../../Register/Verify/verify.css";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gql, useMutation } from "@apollo/client";
import { setError } from "../../Redux/features/notificationSlice";

function Verifi() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const dataVerify = useSelector((state) => state.verify.verify);
  const VERIFY = gql`
    mutation verifyCode($input: CodeVerifyDto!) {
      verifyCode(input: $input) {
        token
        refreshToken
        type
      }
    }
  `;
  const [verify, { }] = useMutation(VERIFY);

  const onFinish = (values) => {
    const datatemp = {
      code: values.code,
      email: dataVerify,
    };
    const getData = async () => {
      try {
        const result = await verify({
          variables: {
            input: datatemp,
          },
        });
        // localStorage.setItem("token", result.data.verifyCode.token);
        // localStorage.setItem("refreshToken", result.data.verifyCode.refreshToken
        // );
        navigate("/sign-in");
      } catch (error) {
        dispatch(setError({ message: error.message }));
      }
    };
    getData();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="verify__body">
      {/* <h1 className="step4__logo">Fluffy</h1> */}
      <div className="verify__wrapper">
        <div className="box__verify">
          <h2 className="verify__h2">Verify</h2>
          <>
            {Object.keys(dataVerify).length > 0 && (
              <div className="verify_head1">
                <span className="verify__sapns">
                  Please check your email: {dataVerify}
                </span>
              </div>
            )}
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="your code"
                name="code"
                rules={[
                  {
                    required: true,
                    message: "Please input your code!",
                  },
                ]}
                className="verify_yourcode"
              >
                <Input />
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
                  className="verify__buttonsub"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        </div>
      </div>
    </div>
  );
}

export default Verifi;

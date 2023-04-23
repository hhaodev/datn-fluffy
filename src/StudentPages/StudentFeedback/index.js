import { useState } from "react";
import {
  Row,
  Col,
  Divider,
  Typography,
  Form,
  Input,
  Button,
  message,
} from "antd";

const { Title, Text } = Typography;

function BillForm() {
  const [copied, setCopied] = useState(false);

  const onFinish = (values) => {
    console.log(values);
  };

  const copyToClipboard = () => {
    const codeElement = document.getElementById("bill-code");
    codeElement.select();
    document.execCommand("copy");
    setCopied(true);
    message.success("Mã đã được sao chép vào clipboard!");
  };

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={20} lg={16} xl={14}>
          <Title level={2}>Bill</Title>
          <Divider />
          <div>
            <Input id="bill-code" readOnly defaultValue="ABCD1234" />
            <Button onClick={copyToClipboard}>
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          <Divider />
          <div>
            <Form name="bill-form" onFinish={onFinish} layout="vertical">
              <Form.Item label="Purchase date" name="purchaseDate">
                <Input type="date" />
              </Form.Item>
              <Form.Item label="Subtotal" name="subtotal">
                <Input prefix="$" suffix="USD" />
              </Form.Item>
              <Form.Item label="Total" name="total">
                <Input prefix="$" suffix="USD" />
              </Form.Item>
              <Form.Item label="Fee" name="fee">
                <Input prefix="$" suffix="USD" />
              </Form.Item>
              <Form.Item label="Currency" name="currency">
                <Input />
              </Form.Item>
            </Form>
          </div>
          <Divider />
          <div>
            <Title level={3}>Tutoring session</Title>
            <Form name="session-form" onFinish={onFinish} layout="vertical">
              <Form.Item label="Subject" name="subject">
                <Input />
              </Form.Item>
              <Form.Item label="Tutor" name="tutor">
                <Input />
              </Form.Item>
              <Form.Item label="Session date" name="sessionDate">
                <Input type="date" />
              </Form.Item>
              <Form.Item label="Session time" name="sessionTime">
                <Input type="time" />
              </Form.Item>
              <Button type="primary">Pay</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default BillForm;
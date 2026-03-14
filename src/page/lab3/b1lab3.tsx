import { Form, Input, Button } from "antd";

const Lab3 = () => {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };
    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
            <Form.Item label="Email" name="email"
                rules={[{ required: true, message: "Vui lòng nhập email" },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Lab3;
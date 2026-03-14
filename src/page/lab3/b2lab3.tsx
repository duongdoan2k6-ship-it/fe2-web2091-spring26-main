import { Form, Input, Button } from "antd";

const B2Lab3 = () => {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };
    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
            <Form.Item label="Name" name="name"
                rules={[{ required: true, message: "Vui lòng nhập tên" }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Email" name="email"
                rules={[{ required: true, message: "Vui lòng nhập email" },
                    { type: "email", message: "Email không hợp lệ" }
                ]}>
                <Input />
            </Form.Item>

            <Form.Item label="Phone" name="phone"
                rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }
                ]}>
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" },
                    { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" }
                ]}>
                <Input.Password />
            </Form.Item>
            <Form.Item label="Confirm Password" name="confirmPassword"
                dependencies={["password"]}
                rules={[{ required: true, message: "Vui lòng xác nhận mật khẩu" },
                    ({ getFieldValue }) => ({
                        validator(_, value) {   
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("Mật khẩu xác nhận không khớp"));
                        },
                    }),
                ]}>
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

export default B2Lab3;
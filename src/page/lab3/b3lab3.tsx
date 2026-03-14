import { Form, Input, InputNumber, Button } from "antd";

const ProductForm = () => {

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ maxWidth: 400 }}
        >
            <Form.Item
                label="Tên sản phẩm"
                name="name"
                rules={[
                    { required: true, message: "Vui lòng nhập tên sản phẩm!" }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Giá"
                name="price"
                rules={[
                    { required: true, message: "Vui lòng nhập giá!" }
                ]}
            >
                <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
                label="Số lượng"
                name="quantity"
                rules={[
                    { required: true, message: "Vui lòng nhập số lượng!" }
                ]}
            >
                <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
                label="Mô tả"
                name="description"
            >
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProductForm;

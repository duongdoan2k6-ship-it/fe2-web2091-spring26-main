import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddCategory = () => {
    interface CategoryType {
        title: string;
        description: string;
        active: boolean;
    }
  const [form] = Form.useForm();
  const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: async (values: CategoryType) => {
            return await axios.post("http://localhost:3000/categories", values);
        },
        onSuccess: () => {
            toast.success("Category created successfully!")
        },
        onError: () => {
            toast.error("Failed to create category!")
        },

    });
    const onFinish = (values: CategoryType) => {
        mutate(values);
    }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
    
      <Form.Item
        label="Tên danh mục"
        name="title"
        rules={[{ required: true, message: "Không được để trống" }]}
      >
        <Input placeholder="Nhập tên danh mục" />
      </Form.Item>

   
      <Form.Item
        label="Mô tả"
        name="description"
      >
        <Input.TextArea rows={4} placeholder="Nhập mô tả" />
      </Form.Item>

      
      <Form.Item
        name="active"
        valuePropName="checked"
      >
        <Checkbox>Hoạt động</Checkbox>
      </Form.Item>

      
       <Button type="primary" htmlType="submit" disabled={isPending}>
                Submit
            </Button>
            {isSuccess && <p>Story created successfully!</p>}
    </Form>
  );
};

export default AddCategory;

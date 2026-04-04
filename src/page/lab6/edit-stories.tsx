import { Form, Input, Button, Spin } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useUpdateStory } from "../hooks/useUpdateStory";

const EditStory = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["story", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data, form]);

  const updateStory = useUpdateStory(id);

  const onFinish = (values: any) => {
    if (!id) return;

    updateStory.mutate(values, {
      onSuccess: () => {
        toast.success("Cap nhat thanh cong");
        navigate("/strlist");
      },
    });
  };

  if (isLoading) return <Spin />;

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="title" label="Ten truyen" rules={[{ required: true, message: "Nhap ten truyen" }]}>
        <Input />
      </Form.Item>

      <Form.Item name="author" label="Tac gia" rules={[{ required: true, message: "Nhap ten tac gia" }]}>
        <Input />
      </Form.Item>

      <Form.Item name="image" label="Anh">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Mo ta">
        <Input.TextArea />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={updateStory.isPending}>
        Cap nhat
      </Button>
    </Form>
  );
};

export default EditStory;

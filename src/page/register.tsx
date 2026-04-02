import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./stores/useAuthStore";

type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: RegisterFormValues) => {
      return await axios.post("http://localhost:3000/register", {
        email: values.email,
        password: values.password,
        username: values.username,
      });
    },
    onSuccess: ({ data }) => {
      const user = data.user ?? {
        username: data.username,
        email: data.email,
        name: data.username,
      };
      const token = data.accessToken ?? `token-${Date.now()}`;

      // Tu dong dang nhap ngay sau khi register
      login(user, token);
      message.success("Dang ky thanh cong. Ban da duoc dang nhap.");
      navigate("/dashboard");
    },
    onError: () => {
      message.error("Dang ky that bai. Vui long thu lai.");
    },
  });

  const onFinish = (values: RegisterFormValues) => {
    mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Vui long nhap username" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Vui long nhap email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Vui long nhap password" }]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={isPending}>
        Submit
      </Button>
    </Form>
  );
};

export default Register;

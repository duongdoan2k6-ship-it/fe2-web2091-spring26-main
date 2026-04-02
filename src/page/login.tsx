import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./stores/useAuthStore";

type LoginValues = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: LoginValues) => {
      return await axios.post("http://localhost:3000/login", values);
    },

    onSuccess: ({ data }) => {
      const user = data.user ?? { email: data.email };
      login(user, data.accessToken);

      message.success("Dang nhap thanh cong!");
      navigate("/dashboard");
    },

    onError: () => {
      message.error("Sai email hoac password!");
    },
  });

  const onFinish = (values: LoginValues) => {
    mutate(values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 400, margin: "50px auto" }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Nhap email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Nhap password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isPending} block>
          Dang nhap
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;

import { Button, Form, Input, Select } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";


export default function StoryForm() {
    interface StoryType {
        title: string;
        author: string;
        image: string;
        description: string;
    }

    const { data: categories, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data;
        }
    });


    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: async (values: StoryType) => {
            return await axios.post("http://localhost:3000/stories", values);
        },
        onSuccess: () => {
            toast.success("Story created successfully!")
        },
        onError: () => {
            toast.error("Failed to create story!")
        },
        

    });
    const onFinish = (values: StoryType) => {
        mutate(values);
    }
    return (

        <Form layout="vertical" onFinish={onFinish} >
            <Form.Item label="Title" name="title"
                rules={[{ required: true, message: "Nhập title!" }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Author" name="author"
                rules={[{ required: true, message: "Nhập author!" }]}  >
                <Input />
            </Form.Item>

            <Form.Item label="Image URL" name="image"
                rules={[{ required: true, message: "Nhập image URL!" }]}  >
                <Input />
            </Form.Item>

            <Form.Item label="Danh mục" name="category">
                <Select loading={isLoading}>
                    {categories?.map((item: any) => (
                        <Select.Option key={item.id} value={item.id}>
                            {item.title}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>


            <Button type="primary" htmlType="submit" loading={isPending}>
                Submit
            </Button>
            {isSuccess && <p>Story created successfully!</p>}
        </Form>

    );

}

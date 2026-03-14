import { Form, Input, Select, Button, Card } from "antd";
import { useState } from "react";

interface PostType {
  title: string;
  category: string;
  slug: string;
  content: string;
  image: string;
}

const PostForm = () => {
  const [post, setPost] = useState<PostType | null>(null);

  const onFinish = (values: PostType) => {
    console.log(values);
    setPost(values);
  };

  return (
    <>
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
        
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Nhập title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Chọn category!" }]}
        >
          <Select
            options={[
              { value: "tech", label: "Tech" },
              { value: "news", label: "News" },
              { value: "sport", label: "Sport" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          rules={[{ required: true, message: "Nhập slug!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Content" name="content">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Image URL" name="image">
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      {post && (
        <Card style={{ marginTop: 20, maxWidth: 500 }}>
          <h2>{post.title}</h2>
          <p><b>Category:</b> {post.category}</p>
          <p><b>Slug:</b> {post.slug}</p>
          <p><b>Content:</b> {post.content}</p>

          {post.image && (
            <img
              src={post.image}
              alt="preview"
              style={{ width: 200 }}
            />
          )}
        </Card>
      )}
    </>
  );
};

export default PostForm;

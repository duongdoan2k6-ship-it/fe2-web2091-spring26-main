import { Button, Popconfirm, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import { useCRUDStory } from "../hooks/useCRUDStory";

const StoryList = () => {
  const { list, remove } = useCRUDStory();
  const { data, isLoading, isError } = list;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Anh",
      dataIndex: "image",
      render: (img: string) => <img src={img} width="60" />,
    },
    {
      title: "Ten truyen",
      dataIndex: "title",
    },
    {
      title: "Tac gia",
      dataIndex: "author",
    },
    {
      title: "Mo ta",
      dataIndex: "description",
    },
    {
      title: "Ngay tao",
      dataIndex: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <>
          <Popconfirm
            title="Delete the story"
            description="Are you sure to delete this story?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => remove.mutate(record.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Button type="primary">
            <Link to={`/edit/${record.id}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];

  if (isLoading) return <Spin />;
  if (isError) return <p>Loi khi tai du lieu</p>;

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      loading={isLoading}
      pagination={{ pageSize: 3 }}
    />
  );
};

export default StoryList;

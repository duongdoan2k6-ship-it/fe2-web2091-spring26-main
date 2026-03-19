import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Spin, Table } from "antd";
import axios from "axios";

const StoryList = () => {

    interface StoryType {
    id: number;
    title: string;
    author: string;
    image: string;
    createdAt: string; 
}

    const { data, isLoading, isError } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });

    const qc = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: async (id: number) =>
            await axios.delete(`http://localhost:3000/stories/${id}`),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["stories"] });
        },
    });

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            render: (img: string) => <img src={img} width="60" />
        },
        {
            title: "Tên truyện",
            dataIndex: "title",
        },
        {
            title: "Tác giả",
            dataIndex: "author",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
        },
       {
    title: "Ngày tạo ",
    dataIndex: "createdAt",
    render: (date: string) =>
    new Date(date).toLocaleDateString("vi-VN")

}

        ,
        {
            title: "Action",
            render: (_: any, record: any) => (
                <Popconfirm
                    title="Delete the story"
                    description="Are you sure to delete this story?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => mutate(record.id)}
                >
                    <Button danger>Delete</Button>
                </Popconfirm>
            ),
        },
    ];

    if (isLoading) return <Spin />;

    if (isError) return <p>Lỗi khi tải dữ liệu</p>;

    return <Table rowKey="id" columns={columns} dataSource={data} loading={isLoading} pagination={{ pageSize: 5 }}  />;
};

export default StoryList;

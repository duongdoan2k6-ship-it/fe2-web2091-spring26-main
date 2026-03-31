import { Table } from "antd";

const StudentList = () => {

    const columns = [
        {
            title: "ID",
            dataIndex: "key",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
        },
        {
            title: "Major",
            dataIndex: "major"
        },
        {
            title: "Hình ảnh",
            dataIndex: "image",
            render: (img: string) => <img src={img} width="60" />
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (status: string) => (
                <span style={{ color: status === "active" ? "green" : "red" }}>
                    {status}
                </span>
            ),
        },
        {
            title: "Action",
            render: () => (
                <>
                    <button>Edit</button> |
                    <button>Delete</button>
                </>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            name: "Nguyen Van A",
            age: 20,
            major: "Web Development",
            image: "https://i.pravatar.cc/100?img=4",
            status: "active"
        },
        {
            key: "2",
            name: "Tran Van B",
            age: 25,
            major: "Digital Marketing",
            image: "https://i.pravatar.cc/100?img=2",
            status: "inactive"
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }}/>;
};

export default StudentList;

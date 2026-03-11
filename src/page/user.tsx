import { Table } from "antd";

const UserList = () => {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Nguyen Van A",
      email: "a@gmail.com",
      role: "Admin",
    },
    {
      key: "2",
      name: "Tran Van B",
      email: "b@gmail.com",
      role: "User",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default UserList;

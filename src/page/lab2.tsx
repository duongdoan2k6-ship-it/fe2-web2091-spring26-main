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
        title:"major",
        dataIndex:"major"
    }
    
  ];

  const data = [
    {
      key: "1",
      name: "Nguyen Van A",
      age: 20,
      major:"Web Development",
      
    },
    {
      key: "2",
      name: "Tran Van B",
      age: 25,
      major:"Digital Marketing"
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default StudentList;

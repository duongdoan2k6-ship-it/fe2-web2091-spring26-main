import { Layout, Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Users",
            },
          ]}
        />
      </Sider>

      <Layout>
        {/* Header */}
        <Header style={{ color: "#fff", fontSize: 20 }}>
          Admin Dashboard
        </Header>

        {/* Content */}
        <Content style={{ padding: 20 }}>
          Nội dung hiển thị ở đây
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

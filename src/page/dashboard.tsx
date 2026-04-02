import { Layout, Menu } from "antd";
import { UserOutlined, DashboardOutlined } from "@ant-design/icons";
import { useAuthStore } from "./stores/useAuthStore";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const { user, token } = useAuthStore();
  const isLoggedIn = Boolean(user && token);

  return (
    <Layout style={{ minHeight: "100vh" }}>
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
        <Header style={{ color: "#fff", fontSize: 20 }}>
          {isLoggedIn
            ? `Username: ${user?.username} | Da dang nhap`
            : "Chua dang nhap"}
        </Header>

        <Content style={{ padding: 20 }}></Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

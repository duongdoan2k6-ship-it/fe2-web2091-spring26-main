import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Register from "./page/form";
import Dashboard from "./page/dashboard";
import UserList from "./page/user";
import StudentList from "./page/lab2";
import { Route, Routes } from "react-router-dom";
import Lab3 from "./page/lab3/b1lab3";
import B2Lab3 from "./page/lab3/b2lab3";
import ProductForm from "./page/lab3/b3lab3";
import PostForm from "./page/lab3/b4lab3";
import StoryForm from "./page/Lab4/lab4";
import AddCategory from "./page/Lab4/categories";
import StoryList from "./page/lab5/stories";
import EditStory from "./page/lab6/edit-stories";
function App() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list-str" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/lab4" className="hover:text-gray-200">
              Thêm mới
            </Link>
            <Link to="/dashboard" className="hover:text-gray-200">
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        {/* <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1> */}
        {/* <Button type ="primary">CLick me </Button>
        <Button type ="default">CLick me </Button>
        <Button type ="dashed">CLick me </Button>
        <Button type ="link">CLick me </Button>
        <Button type ="text">CLick me </Button> */}
      </div>
      {/* <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content style={{ padding: 20 }}>
        <Form onFinish={onFinish}>
        <Form.Item label="Username" name ="email">
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item>
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form.Item>
      </Form>
      </Content>
      <Footer>Footer</Footer>
      </Layout> */}


      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list" element={<UserList />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab3/b2" element={<B2Lab3 />} />
          <Route path="/lab3/b3" element={<ProductForm />} />
          <Route path="/lab3/b4" element={<PostForm />} />
          <Route path="/lab4" element={<StoryForm />} />
          <Route path="/category" element={<AddCategory />} />
          <Route path="/strlist" element={<StoryList />} />
          <Route path="/edit/:id" element={<EditStory />} />
        </Routes>
      </div>


      <Toaster />
    </>
  );
}

export default App;

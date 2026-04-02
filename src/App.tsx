import { Toaster } from "react-hot-toast";
import Register from "./page/register";
import Login from "./page/login";
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
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route path="/login" element={<Login />} />
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

import { Button } from "antd";
import { Link } from "react-router-dom";
import { useAuthStore } from "../page/stores/useAuthStore";

export function Navbar() {
  const { user, token, logout } = useAuthStore();
  const isLoggedIn = Boolean(user && token);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="#" className="text-xl font-semibold">
          <strong>WEB2091 App</strong>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="#" className="hover:text-gray-200">
            Trang chu
          </Link>
          <Link to="/list" className="hover:text-gray-200">
            Danh sach
          </Link>
          <Link to="/lab4" className="hover:text-gray-200">
            Them moi
          </Link>
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <span>{isLoggedIn ? `Email: ${user?.email}` : "Email: --"}</span>
          <span>{isLoggedIn ? "Da dang nhap" : "Chua dang nhap"}</span>

          {isLoggedIn ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-200">
                Dang nhap
              </Link>
              <Link to="/register" className="hover:text-gray-200">
                Dang ky
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

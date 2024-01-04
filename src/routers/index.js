import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/signup";
import Profile from "../pages/profile";
import Header from "../components/navbar";
import { AuthProvider } from "../context/authContext";
import PublicPreview from "../pages/user";
import ProtectedRoute from "../utils/protectedRoute";

const Routers = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Header />
                <Routes>
                  <Route element={<Register />} path="/register" />
                  <Route element={<Home />} path="/" />
                  <Route element={<Profile />} path="/profile" />
                  <Route element={<PublicPreview />} path="/user/:userId" />
                </Routes>
              </ProtectedRoute>
            }
          />

          <Route element={<Login />} path="/login" />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default Routers;

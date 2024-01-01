import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Profile from "../pages/profile";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/register" />
          <Route element={<Home />} path="/" />
          <Route element={<Profile />} path="/profile" />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;

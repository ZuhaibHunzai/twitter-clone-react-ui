import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/signup";
import Profile from "../pages/profile";
import Header from "../components/navbar";

const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Home />} path="/" />
          <Route element={<Profile />} path="/profile" />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;

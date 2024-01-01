import React from "react";
import { Link } from "react-router-dom";

// ** Import hooks

// const initialValues = {
//   password: "",
//   email: "",
//   rememberMe: true,
// };

function Login(props) {
  return (
    <section data-aos="zoom-in" data-aos-duration="1000">
      <form className="mt-16 w-full max-w-md m-auto">
        <div className="bg-white shadow-md rounded p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Login</h2>
          <div className="mb-4">
            <input
              // onChange={handleChange}
              // onBlur={handleBlur}
              name="email"
              placeholder="Email"
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              // onBlur={handleBlur}
              // onChange={handleChange}
              name="password"
              placeholder="Password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                className="cursor-pointer"
                name="rememberMe"
                type="checkbox"
                // value={values.rememberMe}
                // checked={values.rememberMe}
                // onChange={() => {
                //   setFieldValue("rememberMe", !values.rememberMe);
                // }}
              />
              <label className="ml-2 cursor-pointer">Remember Me</label>
            </div>
            <div className="text-right">
              <a href="/" className="text-blue-500 underline">
                Forget Password
              </a>
            </div>
          </div>

          <div>
            <button className="bg-blue-500 block text-white py-2 px-4 rounded-md w-full mt-4 h-10">
              Login
            </button>
            <p className="text-center">or</p>
            <Link
              to="/signup"
              className="text-center block bg-gray-800 text-white py-2 px-4 rounded-md w-full mt-4"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      // You can perform further actions, such as making an API request
    },
  });

  return (
    <section>
      <form
        className="mt-28 w-full max-w-md m-auto"
        onSubmit={formik.handleSubmit}
      >
        <div className="bg-white shadow-md rounded p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Login</h2>
          <div className="mb-4">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <input
              name="password"
              placeholder="Password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                name="rememberMe"
                type="checkbox"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.rememberMe}
              />
              <label className="ml-2 cursor-pointer">Remember Me</label>
            </div>
            <div className="text-right">
              <Link to="/" className="text-blue-500 underline">
                Forget Password
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 block text-white py-2 px-4 rounded-md w-full mt-4 h-10"
          >
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
      </form>
    </section>
  );
}

export default Login;

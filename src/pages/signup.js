import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register(props) {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      // You can perform further actions, such as making an API request
    },
  });

  return (
    <div className="overflow-hidden w-full">
      <section className="py-16">
        <form
          className="mt-5 max-w-md mx-auto"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-4 bg-white shadow-md rounded p-8">
            <input
              placeholder="Full Name"
              name="fullname"
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
            />
            {formik.touched.fullname && formik.errors.fullname ? (
              <div className="text-red-500">{formik.errors.fullname}</div>
            ) : null}
            <input
              placeholder="Username"
              name="username"
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500">{formik.errors.username}</div>
            ) : null}
            <input
              placeholder="Email Address"
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
            <input
              placeholder="Password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
            <div className="w-full mt-8">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md w-full h-10"
              >
                Register
              </button>
            </div>
            <div className="w-full flex justify-center items-center text-center mt-4">
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login" className="text-blue-400">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;

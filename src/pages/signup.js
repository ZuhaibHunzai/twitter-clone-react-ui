import React from "react";
import { Link } from "react-router-dom";

// const initialValues = {
//   fullname: "",
//   username: "",
//   email: "",
// };

function Register(props) {
  // const navigate = useNavigate();
  // const handlePath = (path) => {
  //   navigate(path);
  // };

  return (
    <div className="overflow-hidden w-full">
      <section className=" py-16">
        <form
          className="mt-5 max-w-md mx-auto"
          autoComplete="off"
          // onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 bg-white shadow-md rounded p-8">
            <input
              placeholder="Full Name"
              name="fullname"
              type="text"
              // onBlur={handleBlur}
              // onChange={handleChange}
              // value={values.fullname}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />
            <input
              placeholder="Username"
              name="username"
              type="text"
              // value={values.username}
              // onBlur={handleBlur}
              // onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />
            <input
              placeholder="Email Address"
              name="email"
              type="email"
              // onBlur={handleBlur}
              // onChange={handleChange}
              // value={values.email}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              // onBlur={handleBlur}
              // onChange={handleChange}
              // value={values.password}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-black"
            />

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
                  <a href="/login" className="text-blue-400">
                    Login
                  </a>
                </span>
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

// const validationSchema = object().shape({
//   fullname: string()
//     .required("Name is required")
//     .matches("^(.*?)\\s([^ ]+)$", "Name AND Surname"),
//   username: string()
//     .required("Username is required")
//     .min(4, "Username must be at least 4 characters")
//     .matches(/^\w+$/, "Alphanumeric characters and underscores only")
//     .test(
//       "is-username-available",
//       "Username is not available",
//       async (value) => {
//         if (!value) {
//           return true;
//         }
//       }
//     ),
//   email: string()
//     .required("Email is required")
//     .email("Invalid email format")
//     .test(
//       "is-usermail-available",
//       "Usermail is not available",
//       async (value) => {
//         if (!value) {
//           return true;
//         }
//       }
//     ),
//   password: string()
//     .required("Password is required")
//     .min(8, "Minimum 8 characters"),
// });

export default Register;

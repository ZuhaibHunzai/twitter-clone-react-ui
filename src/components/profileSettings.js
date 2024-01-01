import React from "react";

const ProfileSettings = () => {
  return (
    <section>
      <form className=" w-full max-w-md m-auto">
        <div className="bg-white shadow-md rounded p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Profile Settings
          </h2>
          <div className="mb-4">
            <input
              name="username"
              placeholder="Username"
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="name"
              placeholder="Name"
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="oldPassword"
              placeholder="Old Password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="newPassword"
              placeholder="New Password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <button className="bg-blue-500 block text-white py-2 px-4 rounded-md w-full mt-4 h-10">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfileSettings;

import React from "react";
import bg from "../assets/images/profile-bg.jpg";
import logo from "../assets/images/exp.png";

const ProfileHeader = () => {
  return (
    <div className="p-6 h-[250px]  bg-gradient-to-b text-black rounded-md shadow-md border">
      <div
        className="h-[170px] bg-cover bg-center mb-4 rounded-md"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="flex relative bottom-12">
        <div>
          <img
            src={logo}
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white mb-4 ring ring-white"
          />
        </div>

        <div className="pl-5">
          <h2 className="text-xl text-white  font-bold mb-2">John Doe</h2>
          <p className="text-gray-600">@johndoe</p>
        </div>
      </div>
      {/* <p className="text-gray-300 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
        nec dui quis venenatis. Quisque in ligula in neque pharetra ullamcorper.
      </p> */}
    </div>
  );
};

export default ProfileHeader;

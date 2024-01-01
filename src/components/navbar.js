import React from "react";
import logo from "../assets/images/exp.png";
import profile from "../assets/images/exp.png";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const navButtons = [
    { text: "Home", path: "/home" },
    { text: "Trending", path: "/trending" },
    { text: "About", path: "/about" },
    { text: "Messages", path: "/" },
  ];

  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
        <span className="text-white font-bold text-lg">X</span>
      </div>
      <div className="flex items-center">
        {navButtons.map((button, index) => (
          <button
            key={index}
            className="text-white mr-4"
            onClick={() => console.log("Navigate to:", button.path)}
          >
            {button.text}
          </button>
        ))}
        <div className="flex items-center ml-4">
          {!profile ? (
            <>
              <FaUser className="text-white mr-2" />
            </>
          ) : (
            <>
              <img
                src={profile}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

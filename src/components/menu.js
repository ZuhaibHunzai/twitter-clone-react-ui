import React, { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();

  const handlePath = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    setIsMenuOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div onClick={handleMenuToggle} className="cursor-pointer">
        <FaUser className="text-gray-500" />
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md border border-gray-300">
          <div className="p-2">
            <p className="text-gray-800">Zuhaib Alam</p>
            <p className="text-gray-500">zuhaib@gamil.com</p>
          </div>
          <hr className="border-t border-gray-300" />
          <div className="p-2">
            <div className="flex items-center cursor-pointer" to="/profile">
              <FaSignOutAlt className="text-gray-500 mr-2" />
              <button
                onClick={() => {
                  handlePath("/profile");
                }}
              >
                Profile
              </button>
            </div>
          </div>
          <div className="p-2">
            <div
              className="flex items-center cursor-pointer"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="text-gray-500 mr-2" />
              <button>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;

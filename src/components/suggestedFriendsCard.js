import React from "react";
import PropTypes from "prop-types";
import { FaUserPlus } from "react-icons/fa";

const SuggestedFriendCard = ({ profilePic, name }) => {
  const handleAddFriend = () => {
    // Implement logic to send friend request
    console.log(`Sending friend request to ${name}`);
  };

  return (
    <div className="bg-white flex items-center w-[200px] h-auto pt-4 pb-4">
      <img
        src={profilePic}
        alt={name}
        className="w-16 h-16 rounded-full mr-2"
      />
      <div className="">
        <p className="font-bold text-sm pb-2">{name}</p>
        <button
          className="flex items-center bg-blue-500 text-white text-xs px-2 py-2 rounded-md"
          onClick={handleAddFriend}
        >
          <FaUserPlus className="mr-2" />
          Add Friend
        </button>
      </div>
    </div>
  );
};

SuggestedFriendCard.propTypes = {
  profilePic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SuggestedFriendCard;

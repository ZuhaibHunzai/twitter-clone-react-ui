// TweetPost.js
import React from "react";
import logo from "../assets/images/exp.png";
// import { FaUser } from "react-icons/fa";

const TweetPost = ({ profilePic, onPost }) => {
  const handlePost = () => {
    // Implement logic to post the tweet
    if (onPost) {
      onPost();
    }
  };

  return (
    <div className="flex p-4  rounded-md shadow-md">
      <div className="flex-shrink-0">
        {/* Rounded profile picture */}
        <img src={logo} alt="Profile" className="w-16 h-16 rounded-full" />
      </div>
      <div className="flex-1 ml-4">
        {/* Textarea for writing the tweet */}
        <textarea
          placeholder="What's in your mind?"
          className=" w-full p-2 border rounded-md resize-none"
        />
        {/* Post button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default TweetPost;

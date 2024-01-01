import React from "react";
import { FaTrash } from "react-icons/fa";

const MyTweetsCard = ({ tweetText, onDelete }) => {
  return (
    <div className="bg-white w-[300px] h-[300px] p-4 mb-4 rounded-md shadow-md border border-gray-200 relative">
      <p className="text-gray-800 text-lg mb-4">{tweetText}</p>
      <div className="absolute bottom-0 right-0 p-4">
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default MyTweetsCard;

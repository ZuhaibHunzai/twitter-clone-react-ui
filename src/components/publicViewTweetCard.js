import React from "react";

const PublicViewTweetCard = ({ tweetText, onDelete }) => {
  return (
    <div className="bg-white w-[300px] h-[300px] p-4 mb-4 rounded-md shadow-md border border-gray-200 relative">
      <p className="text-gray-800 text-lg mb-4">{tweetText}</p>
    </div>
  );
};

export default PublicViewTweetCard;

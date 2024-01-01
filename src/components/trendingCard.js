import React from "react";

const TrendingCard = ({ hashtag, tweetCount }) => {
  return (
    <div className="text-left py-2">
      <div className="">
        <div className="text-xl">#{hashtag}</div>
      </div>
      <div>
        <p className="text-gray-500">{tweetCount} tweets</p>
      </div>
    </div>
  );
};

export default TrendingCard;

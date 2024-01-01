// TweetCard.js
import React from "react";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify/icons-ic/round-favorite";
import retweet from "@iconify/icons-ic/round-repeat";
import comment from "@iconify/icons-ic/round-chat-bubble";
import share from "@iconify/icons-ic/round-send";

const TweetCard = ({ userPic, name, userName, date, tweetText }) => {
  return (
    <div className=" text-black p-4 mb-4 rounded-md shadow-md border border-gray-200 relative">
      <div className="flex items-center mb-4">
        {/* Rounded profile picture */}
        <img
          src={userPic}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="ml-4 text-left">
          {/* User name */}
          <p className="text-lg ">{name}</p>
          <p className="text-sm">{userName}</p>
        </div>
      </div>

      {/* Date in the right corner */}
      <p className="text-gray-500 text-sm absolute top-0 right-0 mr-4 mt-2">
        Tweeted on {date}
      </p>

      {/* Tweet text */}
      <p className=" text-3xl text-left">{tweetText}</p>

      <div className="flex justify-between mt-4">
        <div className="flex items-center cursor-pointer">
          <Icon icon={heartFilled} className="text-red-500 mr-2" />
          <span>Like</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <Icon icon={retweet} className="text-green-500 mr-2" />
          <span>Retweet</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <Icon icon={comment} className="text-blue-500 mr-2" />
          <span>Comment</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <Icon icon={share} className="text-indigo-500 mr-2" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;

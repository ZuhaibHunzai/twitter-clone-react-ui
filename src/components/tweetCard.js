// TweetCard.js
import React from "react";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify/icons-ic/round-favorite";
import retweet from "@iconify/icons-ic/round-repeat";
import comment from "@iconify/icons-ic/round-chat-bubble";
import share from "@iconify/icons-ic/round-send";
import logo from "../assets/images/exp.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const TweetCard = ({ userId, name, userName, tweetText, date }) => {
  const auth = useAuth();
  const visiterId = auth?.user?._id;
  const navigate = useNavigate();

  const handleRoute = () => {
    if (visiterId === userId) {
      navigate("/profile");
    } else {
      navigate(`/user/${userId}`);
    }
  };

  let inputDate = date;
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedMonth}/${formattedDay}/${year}`;
  };

  const formattedDate = formatDate(inputDate);

  return (
    <div className=" text-black p-4 mb-4 rounded-md shadow-md border border-gray-200 relative min-w-[300px]">
      <div onClick={handleRoute} className="cursor-pointer">
        <div className="flex items-center mb-4">
          {/* Rounded profile picture */}
          <img
            src={logo}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="ml-4 text-left">
            {/* User name */}
            <p className="text-lg ">{name}</p>
            <p className="text-sm">{userName}</p>
          </div>
        </div>

        <div>
          <p className="text-gray-500 text-sm absolute top-0 right-0 mr-4 mt-2">
            Tweeted on {formattedDate}
          </p>

          <p className=" text-3xl text-left">{tweetText}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4">
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

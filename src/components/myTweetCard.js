import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTweet, getUserTweets } from "../redux/tweet/tweets.action";
import { useAuth } from "../hooks/useAuth";

const MyTweetsCard = ({ tweetText, id }) => {
  const auth = useAuth();
  const userId = auth?.user?._id;
  const dispatch = useDispatch();

  const handleDeleteTweet = async () => {
    await dispatch(deleteTweet(id));
    await dispatch(getUserTweets(userId));
  };
  return (
    <div className="bg-white w-[300px] h-[300px] p-4 mb-4 rounded-md shadow-md border border-gray-200 relative">
      <p className="text-gray-800 text-lg mb-4">{tweetText}</p>
      <div className="absolute bottom-0 right-0 p-4">
        <button
          onClick={handleDeleteTweet}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default MyTweetsCard;

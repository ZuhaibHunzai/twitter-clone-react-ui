import React from "react";
import SuggestedFriendCard from "../components/suggestedFriendsCard";
import logo from "../assets/images/exp.png";
import TweetPost from "../components/tweetPost";
import TweetCard from "../components/tweetCard";
import TrendingCard from "../components/trendingCard";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const auth = useAuth();
  console.log(auth, "auth");
  const suggestedFriends = [
    { id: 1, profilePic: logo, name: "John Doe" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
    { id: 2, profilePic: logo, name: "Jane Smith" },
  ];

  const tweets = [
    {
      userPic: logo,
      name: "zuhaib alam",
      userName: "zuhaib_alam188",
      date: "01/01/2024",
      tweetText: "Hey there! this is a test tweet text for tweeter clone",
    },
    {
      userPic: logo,
      name: "zuhaib alam",
      userName: "zuhaib_alam188",
      date: "01/01/2024",
      tweetText:
        "Hey there! this is a test tweet text for tweeter clone Hey there! this is a test tweet text for tweeter clone Hey there! this is a test tweet text for tweeter clone",
    },
    {
      userPic: logo,
      name: "zuhaib alam",
      userName: "zuhaib_alam188",
      date: "01/01/2024",
      tweetText: "Hey there! this is a test tweet text for tweeter clone",
    },
    {
      userPic: logo,
      name: "zuhaib alam",
      userName: "zuhaib_alam188",
      date: "01/01/2024",
      tweetText: "Hey there! this is a test tweet text for tweeter clone ",
    },
  ];

  const trendingTags = [
    { hashtag: "test", tweetCount: "13.2k" },
    { hashtag: "test1", tweetCount: "13.2k" },
    { hashtag: "test2", tweetCount: "13.2k" },
    { hashtag: "test3", tweetCount: "13.2k" },
    { hashtag: "test4", tweetCount: "13.2k" },
  ];
  return (
    <div className="grid grid-cols-6 gap-2 mt-28  text-black">
      {/* suggested friends */}
      <div className="col-span-1 fixed h-[90vh] overflow-y-auto">
        <div className="flex flex-col items-center pt-6 pb-6 w-full">
          <h1 className="text-2xl mb-4 p-4">Suggested Friends</h1>
          {suggestedFriends.map((friend) => (
            <SuggestedFriendCard
              key={friend.id}
              profilePic={friend.profilePic}
              name={friend.name}
            />
          ))}
          <button className="text-center block bg-gray-800 text-white py-2 px-4 rounded-md mt-4">
            Find more
          </button>
        </div>
      </div>
      {/* tweets */}
      <div className="col-span-4 col-start-2 m-4">
        <div>
          <TweetPost />
        </div>
        <div className="mt-4">
          {tweets &&
            tweets.map((tweet) => (
              <TweetCard
                key={tweet.id}
                userPic={tweet.userPic}
                name={tweet.name}
                userName={tweet.userName}
                date={tweet.date}
                tweetText={tweet.tweetText}
              />
            ))}
        </div>
      </div>
      {/* trendings */}
      <div className="col-span-1 text-left">
        <div className="relative flex items-center mt-4 mr-2">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute right-3">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
        <h1 className="text-2xl mb-4 pt-4">Trends for you</h1>
        {trendingTags &&
          trendingTags.map((tags) => (
            <TrendingCard hashtag={tags.hashtag} tweetCount={tags.tweetCount} />
          ))}
      </div>
    </div>
  );
}

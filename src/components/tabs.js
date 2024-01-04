import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyTweetsCard from "./myTweetCard";
import ProfileSettings from "./profileSettings";
import TweetPost from "./tweetPost";
import { useDispatch, useSelector } from "react-redux";
import { getUserTweets } from "../redux/tweet/tweets.action";
import { useAuth } from "../hooks/useAuth";

const ProfileTabs = () => {
  const auth = useAuth();
  const userId = auth?.user?._id;

  const dispatch = useDispatch();
  const myTweets = useSelector((state) => state.tweeets);

  useEffect(() => {
    dispatch(getUserTweets(userId));
  }, [dispatch]);

  return (
    <Tabs>
      <TabList className="flex p-4 ">
        <Tab className="flex items-center text-black cursor-pointer px-6 py-2 border-b-2 border-transparent">
          <span className="mr-2">📝</span>
          My Tweets
        </Tab>
        <Tab className="flex items-center text-black cursor-pointer px-6 py-2 border-b-2 border-transparent">
          <span className="mr-2">📝</span>
          New Tweet
        </Tab>
        <Tab className="flex items-center text-black cursor-pointer px-6 py-2 border-b-2 border-transparent">
          <span className="mr-2">⚙️</span>
          Profile Settings
        </Tab>
      </TabList>

      <TabPanel>
        <div className=" grid grid-cols-8 gap-4 ml-4">
          {myTweets?.userTweets?.data?.tweets &&
            myTweets?.userTweets?.data?.tweets.map((tweet, index) => {
              return (
                <div className="col-span-8 md:col-span-4 lg:col-span-2">
                  <MyTweetsCard
                    className=""
                    key={index}
                    tweetText={tweet.tweet}
                    id={tweet._id}
                  />
                </div>
              );
            })}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="">
          <TweetPost />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="">
          <ProfileSettings />
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ProfileTabs;

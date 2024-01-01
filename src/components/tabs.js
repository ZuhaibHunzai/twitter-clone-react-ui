import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyTweetsCard from "./myTweetCard";

const ProfileTabs = () => {
  const tweets = [
    {
      tweetText:
        "Hey there! this is a test tweet text, Hey there! this is a test tweet text",
    },
    {
      tweetText:
        "Hey there! this is a test tweet text, Hey there! this is a test tweet text",
    },
    {
      tweetText:
        "Hey there! this is a test tweet text, Hey there! this is a test tweet text",
    },
    {
      tweetText:
        "Hey there! this is a test tweet text, Hey there! this is a test tweet text",
    },
    {
      tweetText:
        "Hey there! this is a test tweet text, Hey there! this is a test tweet text",
    },
    {
      tweetText:
        "Hey there! this is a test tweet text, Hey there! this is a test tweet text",
    },
    {
      tweetText:
        "Hey there! this is a test tweet text, Hey there! this is a test tweet text",
    },
    {
      tweetText:
        "Hey there! this is a test tweet text, Hey there! this is a test tweet text",
    },
  ];
  return (
    <Tabs>
      <TabList className="flex p-4 ">
        <Tab className="flex items-center text-black cursor-pointer px-6 py-2 border-b-2 border-transparent">
          <span className="mr-2">📝</span>
          My Tweets
        </Tab>
        <Tab className="flex items-center text-black cursor-pointer px-6 py-2 border-b-2 border-transparent">
          <span className="mr-2">⚙️</span>
          Profile Settings
        </Tab>
      </TabList>

      <TabPanel>
        <div className="p-4 grid grid-cols-8">
          {tweets &&
            tweets.map((tweet, index) => {
              return (
                <div className="col-span-8 md:col-span-4 lg:col-span-2">
                  <MyTweetsCard
                    className=""
                    key={index}
                    tweetText={tweet.tweetText}
                  />
                </div>
              );
            })}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Profile Settings Content</h2>
          {/* Content for "Profile Settings" tab */}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ProfileTabs;
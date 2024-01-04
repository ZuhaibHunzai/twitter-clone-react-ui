import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTweets } from "../redux/tweet/tweets.action";
import PublicViewTweetCard from "../components/publicViewTweetCard";
import { useParams } from "react-router-dom";
import PublicPreviewProfileHeader from "../components/publicPreviewProfileHeader";
import { getUserData } from "../redux/user/user.action";

export default function PublicPreview() {
  const { userId } = useParams();

  const dispatch = useDispatch();
  const myTweets = useSelector((state) => state);
  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(getUserTweets(userId));
    dispatch(getUserData(userId));
  }, [dispatch, userId]);

  return (
    <>
      <div className="pt-16  ">
        <PublicPreviewProfileHeader
          name={userData?.userData?.user?.map((singleUser) => singleUser?.name)}
          username={userData?.userData?.user?.map(
            (singleUser) => singleUser?.userName
          )}
        />
      </div>
      <div className=" grid grid-cols-8 gap-4 ml-4 mt-5">
        {myTweets?.tweeets?.userTweets.data?.tweets?.map &&
          myTweets?.tweeets?.userTweets.data?.tweets?.map((tweet, index) => {
            return (
              <div className="col-span-8 md:col-span-4 lg:col-span-2">
                <PublicViewTweetCard
                  className=""
                  key={index}
                  tweetText={tweet.tweet}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

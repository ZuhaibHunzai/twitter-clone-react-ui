import { axiosClient } from "../../config/axios";

export const postTweetApi = async (payload) => {
  const token = localStorage.getItem("twitter-token");
  const res = await axiosClient.post("/tweets/post-tweet", payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const getAllTweetsApi = async () => {
  const res = await axiosClient.get("/tweets/all");
  return res;
};

export const deleteTweetApi = async (payload) => {
  const res = await axiosClient.delete("/:tweetId");
  return res;
};

export const getUserTweetsApi = async () => {
  const res = await axiosClient.get("/:userId");
  return res;
};

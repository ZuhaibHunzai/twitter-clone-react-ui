import { axiosClient } from "../../config/axios";

export const postTweetApi = async (payload) => {
  const res = await axiosClient.post("/tweets/post-tweet", payload);
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

export const getUserTweetsApi = async (payload) => {
  const res = await axiosClient.get("/:userId");
  return res;
};

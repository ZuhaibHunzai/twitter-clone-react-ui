import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteTweetApi,
  getAllTweetsApi,
  getUserTweetsApi,
  postTweetApi,
} from "./api";

export const postTweet = createAsyncThunk("postTweet", async (payload) => {
  const res = await postTweetApi(payload);
  return res;
});

export const getAllTweets = createAsyncThunk("getAllTweets", async () => {
  const res = await getAllTweetsApi();
  return res;
});

export const delteTweet = createAsyncThunk("deleteApi", async (payload) => {
  const res = await deleteTweetApi(payload);
  return res;
});

export const getUserTweets = createAsyncThunk("userTweets", async (payload) => {
  const res = await getUserTweetsApi(payload);
  return res;
});

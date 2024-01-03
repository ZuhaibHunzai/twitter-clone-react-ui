import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import {
  deleteTweetApi,
  getAllTweetsApi,
  getUserTweetsApi,
  postTweetApi,
} from "./api";

export const postTweet = createAsyncThunk("postTweet", async (payload) => {
  const resultPromise = new Promise((resolve, reject) => {
    postTweetApi(payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch(({ response }) => {
        reject(response.data?.error || "Something went wrong");
      });
  });

  toast.promise(resultPromise, {
    loading: "posting your tweet...",
    success: "posted tweet successfully",
    error: (err) => err,
  });

  return await resultPromise;
});

export const getAllTweets = createAsyncThunk("getAllTweets", async () => {
  const res = await getAllTweetsApi();
  return res;
});

export const delteTweet = createAsyncThunk("deleteTweet", async (payload) => {
  const resultPromise = new Promise((resolve, reject) => {
    deleteTweetApi(payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch(({ response }) => {
        reject(response.data?.error || "Something went wrong");
      });
  });

  toast.promise(resultPromise, {
    loading: "posting your tweet...",
    success: "posted tweet successfully",
    error: (err) => err,
  });

  return await resultPromise;
});

export const getUserTweets = createAsyncThunk("userTweets", async (payload) => {
  const res = await getUserTweetsApi(payload);
  return res;
});

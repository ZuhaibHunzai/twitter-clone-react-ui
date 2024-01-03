import { createSlice } from "@reduxjs/toolkit";
import {
  // delteTweet,
  // getAllTweets,
  // getUserTweets,
  postTweet,
} from "./tweets.action";

const initialState = {
  status: "",
  allTweets: [],
  userTweets: [],
};

const tweetsSlicer = createSlice({
  name: "singleProduct",
  initialState,
  // post tweet
  extraReducers: (builder) => {
    builder.addCase(postTweet.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(postTweet.fulfilled, (state) => {
      state.status = "fulfilled";
    });
    builder.addCase(postTweet.rejected, (state) => {
      state.status = "rejected";
    });
  },
  // get all tweets extra reducers
  // builder.addCase(getAllTweets.pending, (state) => {
  //   state.status = "pending";
  // });
  // builder.addCase(getAllTweets.fulfilled, (state, action) => {
  //   state.status = "fulfilled";
  //   state.allTweets = action.payload;
  // });
  // builder.addCase(getAllTweets.rejected, (state) => {
  //   state.status = "rejected";
  // });
  // delete tweet extra reducers
  // builder.addCase(delteTweet.pending, (state) => {
  //   state.status = "pending";
  // });
  // builder.addCase(delteTweet.fulfilled, (state) => {
  //   state.status = "fulfilled";
  // });
  // builder.addCase(delteTweet.rejected, (state) => {
  //   state.status = "rejected";
  // });
  // gettting user tweets extra reducers
  // builder.addCase(getUserTweets.pending, (state) => {
  //   state.status = "pending";
  // });
  // builder.addCase(getUserTweets.fulfulled, (state, action) => {
  //   state.status = "fulfilled";
  //   state.userTweets = action.payload;
  // });
  // builder.addCase(getUserTweets.rejected, (state) => {
  //   state.status = "rejected";
  // });
  // },
});

export default tweetsSlicer.reducer;

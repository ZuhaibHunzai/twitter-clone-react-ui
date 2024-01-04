import { combineReducers } from "@reduxjs/toolkit";
import tweetsSlicer from "./tweet/tweets.slicer";
import userDataSlicer from "./user/user.slicer";

const rootReducer = combineReducers({
  tweeets: tweetsSlicer,
  userData: userDataSlicer,
});

export default rootReducer;

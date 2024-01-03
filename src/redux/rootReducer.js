import { combineReducers } from "@reduxjs/toolkit";
import tweetsSlicer from "./tweet/tweets.slicer";

const rootReducer = combineReducers({
  tweeets: tweetsSlicer,
});

export default rootReducer;

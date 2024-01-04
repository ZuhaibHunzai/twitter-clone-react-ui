import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDataApi } from "./api";

export const getUserData = createAsyncThunk("getUserData", async (payload) => {
  const res = await getUserDataApi(payload);
  return res;
});

import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "./user.action";

const initialState = {
  status: "",
  userData: [],
};

const userDataSlicer = createSlice({
  name: "userData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.userData = action.payload;
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default userDataSlicer.reducer;

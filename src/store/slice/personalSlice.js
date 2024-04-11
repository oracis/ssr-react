import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Bob", job: "Frontend Development" });
    });
  }, 2000);
}

export const getUserData = createAsyncThunk(
  "personal/getUserData",
  async () => {
    const response = await getUser();
    return response;
  },
);

const personalSlice = createSlice({
  name: "personal",
  initialState: {
    userInfo: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export default personalSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

function fetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "article title 1", content: "article content 1" },
        { id: 2, title: "article title 2", content: "article content 2" },
      ]);
    });
  }, 2000);
}

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    const response = await fetch();
    return response;
  },
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    articles: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
  },
});

export default homeSlice.reducer;

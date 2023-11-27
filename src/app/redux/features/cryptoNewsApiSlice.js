import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNewsData } from "../../../services/cryptoNewsApi";

const initialState = {
  cryptoNewsData: [],
  isLoading: false,
};

export const getCryptoNewsData = createAsyncThunk(
  "app/getCryptoNewsData",
  async (news, thunkAPI) => {
    try {
      const { data } = await fetchNewsData(news);
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const cryptoNewsApi = createSlice({
  name: "cryptoNewsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoNewsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCryptoNewsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptoNewsData = action.payload;
      })
      .addCase(getCryptoNewsData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default cryptoNewsApi.reducer;

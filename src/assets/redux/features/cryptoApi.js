import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchCoinData from "../../../services/cryptoApi";

const initialState = {
  cryptoCoinsData: [],
  cryptoStatsData: {},
  isLoading: false,
};

export const getCryptoData = createAsyncThunk(
  "app/getCryptoData",
  async (coin, thunkAPI) => {
    try {
      const { data } = await fetchCoinData(coin);
      return data;
      // state.cryptoCoinsData = data.coins;
      // state.cryptoStatsData = data.stats;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const cryptoApi = createSlice({
  name: "cryptoData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCryptoData.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.cryptoCoinsData = action.payload.data.coins;
        state.cryptoStatsData = action.payload.data.stats;
      })
      .addCase(getCryptoData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default cryptoApi.reducer;

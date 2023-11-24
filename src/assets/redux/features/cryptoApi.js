import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCoinsData, fetchCoinData } from "../../../services/cryptoApi";

const initialState = {
  cryptoCoinsData: [],
  cryptoCoinData: [],
  cryptoStatsData: {},
  isLoading: false,
};

export const getCryptoData = createAsyncThunk(
  "app/getCryptoData",
  async (coin, thunkAPI) => {
    try {
      const { data } = await fetchCoinsData(coin);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
export const getCoinDetails = createAsyncThunk(
  "app/getCoinData",
  async (coin, thunkAPI) => {
    try {
      const resp = await fetchCoinData(coin);
      return resp.data.data.coin;
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
        state.cryptoCoinsData = action.payload.data.coins;
        state.cryptoStatsData = action.payload.data.stats;
      })
      .addCase(getCoinDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptoCoinData = action.payload;
      })
      .addCase(getCryptoData.rejected, getCoinDetails.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default cryptoApi.reducer;

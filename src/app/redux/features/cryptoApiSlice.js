import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCoinsData,
  fetchCoinData,
  fetchCoinHistory,
  fetchExchangeData,
} from "../../../services/cryptoApi";

const initialState = {
  cryptoCoinsData: [],
  cryptoCoinData: [],
  cryptoExchangeData: [],
  cryptoCoinHistory: [],
  cryptoStatsData: {},
  isLoading: false,
};

export const getCryptoData = createAsyncThunk(
  "app/getCryptoData",
  async (coins, thunkAPI) => {
    try {
      const { data } = await fetchCoinsData(coins);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
export const getCoinDetails = createAsyncThunk(
  "app/getCoinDetails",
  async (coin, thunkAPI) => {
    try {
      const resp = await fetchCoinData(coin);
      return resp.data.data.coin;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
export const getExchangeData = createAsyncThunk(
  "app/getExchangeData",
  async (url, thunkAPI) => {
    try {
      const resp = await fetchExchangeData(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
export const getCoinHistory = createAsyncThunk(
  "app/getCoinHistory",
  async (url, thunkAPI) => {
    try {
      const resp = await fetchCoinHistory(url);
      return resp.data;
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
      .addCase(getExchangeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptoExchangeData = action.payload;
      })
      .addCase(getCoinHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptoCoinHistory = action.payload;
      })
      .addCase(
        getCryptoData.rejected,
        getCoinDetails.rejected,
        getCoinHistory.rejected,
        getExchangeData.rejected,
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export default cryptoApi.reducer;

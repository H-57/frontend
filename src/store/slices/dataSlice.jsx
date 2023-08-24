import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchAllData,fetchCountryData } from '../api/allData';

const initialState = {

  status: 'idle',
  data:null,

 

 
};

export const fetchData = createAsyncThunk(
  'allData',fetchAllData);

export const fetchBYCountryData = createAsyncThunk(
  'fetchBYCountryData',fetchCountryData);




export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      }).addCase(fetchData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

      .addCase(fetchBYCountryData.pending, (state) => {
        state.status = 'loading';
      }).addCase(fetchBYCountryData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYCountryData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.piData = action.payload; 
      })

  },
});





export default dataSlice.reducer;

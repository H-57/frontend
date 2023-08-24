import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchAllData,fetchCountryData } from '../api/allData';

const initialState = {

  status: '',
  data:null,

};


export const fetchData = createAsyncThunk(
  'allbarData',fetchAllData);

export const fetchBarCountryData = createAsyncThunk(
  'fetchbarCountryData',fetchCountryData);




export const barDataSlice = createSlice({
  name: 'barDataSlice',
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

      .addCase(fetchBarCountryData.pending, (state) => {
        state.status = 'loading';
      }).addCase(fetchBarCountryData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBarCountryData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

  },
});





export default barDataSlice.reducer;

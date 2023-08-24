import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchAllData,fetchCountryData } from '../api/allData';

const initialState = {

  status: '',
  data:null,

};


export const fetchData = createAsyncThunk(
  'allpiData',fetchAllData);

export const fetchPICountryData = createAsyncThunk(
  'fetchpiCountryData',fetchCountryData);




export const piDataSlice = createSlice({
  name: 'tabelDataSlice',
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

      .addCase(fetchPICountryData.pending, (state) => {
        state.status = 'loading';
      }).addCase(fetchPICountryData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchPICountryData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

  },
});





export default piDataSlice.reducer;

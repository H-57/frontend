import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchAllData,fetchCountryData } from '../api/allData';

const initialState = {

  status: '',
  data:null,

};


export const fetchData = createAsyncThunk(
  'allcircleData',fetchAllData);

export const fetchCircleCountryData = createAsyncThunk(
  'fetchcircleCountryData',fetchCountryData);




export const circleDataSlice = createSlice({
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

      .addCase(fetchCircleCountryData.pending, (state) => {
        state.status = 'loading';
      }).addCase(fetchCircleCountryData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchCircleCountryData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

  },
});





export default circleDataSlice.reducer;

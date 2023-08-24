import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchIntensityData,fetchRelevanceData,fetchAllData,fetchCountryData,fetchEndYearData,fetchTopicData,fetchSectorData,fetchRegionData,fetchSourceData } from '../api/allData';

const initialState = {

  status: '',
  data:null,

 

 
};

export const fetchData = createAsyncThunk(
  'allTabelData',fetchAllData);

export const fetchBYCountryData = createAsyncThunk(
  'fetchBYCountryData',fetchCountryData);

export const fetchBYIntensityData = createAsyncThunk(
  'fetchBYIntensityData',fetchIntensityData);

export const fetchBYRelevanceData = createAsyncThunk(
  'fetchBYRelevanceData',fetchRelevanceData);

export const fetchBYEndYearData = createAsyncThunk(
  'fetchBYearData',fetchEndYearData);

export const fetchBYTopicData = createAsyncThunk(
  'fetchBYTopicData',fetchTopicData);
  
export const fetchBYSectorData = createAsyncThunk(
  'fetchBYSectorData',fetchSectorData);
  
export const fetchBYRegionData = createAsyncThunk(
  'fetchBYRegionData',fetchRegionData);
  
export const fetchBYSourceData = createAsyncThunk(
  'fetchBYSourceData',fetchSourceData);




export const tabelDataSlice = createSlice({
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

      .addCase(fetchBYCountryData.pending, (state) => {
        state.status = 'loading';
      }).addCase(fetchBYCountryData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYCountryData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

      .addCase(fetchBYEndYearData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYEndYearData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

      .addCase(fetchBYTopicData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYTopicData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

      .addCase(fetchBYSectorData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYSectorData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

      .addCase(fetchBYRegionData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYRegionData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

      .addCase(fetchBYSourceData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYSourceData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })
      .addCase(fetchBYIntensityData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYIntensityData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })
      .addCase(fetchBYRelevanceData.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchBYRelevanceData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; 
      })

  },
});





export default tabelDataSlice.reducer;

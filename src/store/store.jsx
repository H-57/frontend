
import { configureStore } from "@reduxjs/toolkit"
import dataSlice from "./slices/dataSlice"
import piDataSlice from "./slices/piDataSlice"
import barDataSlice from "./slices/barDataSlice"
import circlDataSlice from "./slices/circleDataSlice"
import tabelDataSlice from "./slices/tabelDataSlice"

export const store=configureStore({

  reducer: {
    allData:dataSlice,
    piData:piDataSlice,
    barData:barDataSlice,
    circleData:circlDataSlice,
    tabelData:tabelDataSlice,

   },

})



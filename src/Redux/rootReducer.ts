import { combineReducers } from "@reduxjs/toolkit";
import CapitalSlice from "./Slices/countrySlice";
import WeatherSlice from "./Slices/weatherSlice";

const rootReducer = combineReducers({
  Capital: CapitalSlice,
  weather: WeatherSlice,
});

export default rootReducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const WeatherSlice = createSlice({
  name: "Weather",
  initialState: [],
  reducers: {
    setWeather: (state, action: PayloadAction<any>) => action.payload,
  },
});

export const { setWeather } = WeatherSlice.actions;
export default WeatherSlice.reducer;

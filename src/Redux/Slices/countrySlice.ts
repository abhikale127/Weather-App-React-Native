import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const CapitalSlice = createSlice({
  name: "Capital",
  initialState: {
    capital: "",
    population: "",
    latlng: [],
    flags: {
      png: "",
    },
  },
  reducers: {
    setCapital: (state, action: PayloadAction<any>) =>
      action.payload.length == 2 ? action.payload[1] : action.payload[0],
  },
});

export const { setCapital } = CapitalSlice.actions;
export default CapitalSlice.reducer;

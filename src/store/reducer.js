import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOn: false,
  sideBarFilter: "",
  showIndex: 5,
};

export const counterSlice = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isOn = !state.isOn;
      //console.log(state.isOn)
    },
    filterSidebar: (state, action) => {
      state.sideBarFilter = action.payload.toLowerCase();
      //console.log(state.sideBarFilter)
    },
    showMore: (state) => {
      state.showIndex += 10;
      //console.log(state.showIndex);
    },
    showLess: (state) => {
      state.showIndex -= 10;
      //console.log(state.showIndex)
    },
  },
});

// Action creators are generated for each case reducer function
export const { showMore, showLess, toggleNav, filterSidebar } =
  counterSlice.actions;

export default counterSlice.reducer;

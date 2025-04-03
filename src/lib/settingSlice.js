import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setting: {
    isMobile: false,

  },
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {

    changeIsMobile: (state, action) => {
      state.setting.toggle = action.payload;
    }
  },
});

const { actions, reducer } = settingSlice;
export const {
    changeIsMobile
} = actions;
export default reducer;

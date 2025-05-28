import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingState {
  setting: {
    isMobile: boolean;
  };
}

const initialState: SettingState = {
  setting: {
    isMobile: false,
  },
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    changeIsMobile: (state, action: PayloadAction<boolean>) => {
      state.setting.isMobile = action.payload;
    },
  },
});

const { actions, reducer } = settingSlice;
export const { changeIsMobile } = actions;
export default reducer;
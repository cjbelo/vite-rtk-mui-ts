import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const sliceName = 'user';

const initialState = {
  token: null,
  user: null,
  mode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
};

export const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    changeMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setCredentials, setToken, changeMode } = userSlice.actions;

export const persistConfig = {
  key: sliceName,
  storage,
};

const reducer = persistReducer(persistConfig, userSlice.reducer);

export default reducer;

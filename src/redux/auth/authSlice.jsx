import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
    uid: null,
  },
  theme: "gold",
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    changeTheme: (state, action) => {
      console.log(action.payload);
      state.user.theme = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.displayName;
        state.user.email = action.payload.email;
        state.user.uid = action.payload.user.uid;

        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.displayName;
        state.user.email = payload.user.email;
        state.user.uid = payload.user.uid;

        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.displayName;
        state.user.email = action.payload.email;
        state.user.uid = action.payload.uid;
        // state.theme = action.payload;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { changeTheme } = authSlice.actions;

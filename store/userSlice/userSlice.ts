import { User, UserState } from "@/types/all_types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    email: "",
    phone: "",
  },
  token: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
      state.user = {
        _id: "",
        name: "",
        email: "",
        phone: "",
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

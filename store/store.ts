import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/userSlice/userSlice";
// Import slices here, for example: import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

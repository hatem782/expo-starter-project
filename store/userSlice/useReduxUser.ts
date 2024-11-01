import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { login, logout } from "./userSlice";

export const useReduxUser = () => {
  const { user, isLoggedIn, token } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch();

  const makeReduxLogin = (user: any, token: string) => {
    dispatch(login({ user, token }));
  };

  const makeReduxLogout = () => {
    dispatch(logout());
  };

  return { user, isLoggedIn, token, makeReduxLogin, makeReduxLogout };
};

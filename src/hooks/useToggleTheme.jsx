// import { useState } from "react";
import { changeTheme } from "../redux/auth/authSlice";
import { useDispatch } from "react-redux";

export const useToggleTheme = () => {
  const dispatch = useDispatch();

  // const [palette, setPalette] = useState("gold");
  const toggleTheme = (e) => {
    const val = e.currentTarget.value;
    dispatch(changeTheme(val));

    // setPalette(val);
  };

  return { toggleTheme };
};

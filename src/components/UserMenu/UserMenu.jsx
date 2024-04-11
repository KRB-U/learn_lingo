import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { logOut } from "../../redux/auth/operations";
import {
  Divider,
  UserMenuBtn,
  UserMenuContainer,
  UserMenuWelcom,
} from "./UserMenu.styled";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export const UserMenu = () => {
  const { user } = useAuth();

  const dispatch = useDispatch();

  const handlerLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuContainer>
      <UserMenuWelcom>Welcom, {user.name}</UserMenuWelcom>
      <Divider />
      <UserMenuBtn type="button" onClick={handlerLogOut}>
        LogOut
      </UserMenuBtn>
      <Divider />
      <ThemeSwitcher />
    </UserMenuContainer>
  );
};

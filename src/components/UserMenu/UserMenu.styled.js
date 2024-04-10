import styled from "styled-components";

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserMenuWelcom = styled.p``;

export const UserMenuBtn = styled.button`
  background-color: transparent;
  color: black;

  font-weight: 500;
  cursor: pointer;

  border-radius: 5px;
  padding: 5px 5px;
  border: 2px solid ${(props) => props.theme.colorTheme};
  background-color: ${(props) => props.theme.colorTheme};
  transition: background-color 0.3s, color 0.3s;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colorTheme};
    color: ${(props) => props.theme.theme.colors.white};
  }
`;

export const Divider = styled.div`
  border-radius: 1px;
  height: 20px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  margin: 0 10px 0 10px;
`;

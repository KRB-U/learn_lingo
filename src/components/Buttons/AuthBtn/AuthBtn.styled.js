import styled from "styled-components";

export const AuthorizationButton = styled.button`
  border-radius: 12px;
  padding: 16px 0;
  width: 100%;
  height: 60px;
  cursor: pointer;
  background-color: ${(props) => props.theme.theme.colors.gold};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
`;

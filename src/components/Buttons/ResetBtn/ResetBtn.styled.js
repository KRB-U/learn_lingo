import styled from "styled-components";

export const ResetButton = styled.button`
  border-radius: 12px;
  padding: 5px;
  width: 100px;
  height: 48px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colorTheme.basic};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;

  &:hover {
    background-color: ${(props) => props.theme.colorTheme.light};
  }
`;

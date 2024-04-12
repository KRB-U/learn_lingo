import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colorTheme.basic};

  padding: 12px;
  width: 100%;
  text-align: center;
  border: 0;
  text-decoration: none;

  cursor: pointer;

  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.theme.colors.white};
    background-color: ${(props) => props.theme.colorTheme.light};

    transition: color, background-color, 150ms linear, scale 150ms linear;
  }
`;

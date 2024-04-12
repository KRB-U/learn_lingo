import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 1184px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 40px 0;
`;

export const LogoLink = styled(NavLink)`
  display: flex;

  &.active {
    background-color: unset;
    color: unset;
  }
`;

export const LogoIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(#338af3 50%, #ffda44 50%);
  margin-right: 8px;
`;

export const LogoText = styled.p`
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

export const NavigateList = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const NavigateLink = styled(NavLink)`
  display: block;
  padding: 4px 0px;
  color: black;

  &.active {
    color: ${(props) => props.theme.colorTheme.basic};
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colorTheme.light};
  }
`;

export const AutContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogInLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  padding: 14px 16px;
  color: ${(props) => props.theme.colorTheme.basic};

  border: none;
  border-radius: 14px;

  background-color: transparent;
  transition: transform, stroke 0.7s, box-shadow 0.7s;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colorTheme.light};
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    :first-child {
      stroke: ${(props) => props.theme.colorTheme.light};
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const StyledIcon = styled.svg`
  fill: none;
  width: 20px;
  height: 20px;
  stroke: ${(props) => props.theme.colorTheme.basic};

  margin-right: 8px;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

// export const LogInText = styled.p`
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 1.25;

//   transition: stroke 0.4s ease;
//   color: ${(props) => props.theme.colorTheme.basic};

//   &:hover,
//   &:focus {
//     color: ${(props) => props.theme.colorTheme.light};
//   }
// `;

export const RegLink = styled(NavLink)`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  border-radius: 12px;
  padding: 14px 39px;

  width: 166px;
  height: 48px;
  color: #fff;
  background-color: ${(props) => props.theme.colorTheme.basic};
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colorTheme.light};
  }
`;

// export const RegText = styled.p`
//   display: block;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 1.25;
//   color: #fff;
// `;

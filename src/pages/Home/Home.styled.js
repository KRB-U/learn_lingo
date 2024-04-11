import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SectionOwnBothBlocks = styled.section`
  max-width: 1312px;
`;

export const ContainerOwnBothBlocks = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const TutorContainer = styled.div`
  width: 720px;

  border-radius: 30px;
  padding: 98px 64px;

  background-color: ${(props) => props.theme.theme.colors.lightSilverMarble};
`;

export const TitleHomePage = styled.h1`
  width: 548px;
  font-size: 48px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
  max-width: 471px;
`;

export const TitleHomePageItem = styled.span`
  border-radius: 8px;
  font-style: italic;
  font-weight: 400;
  line-height: 1;
  background-color: ${(props) => props.theme.colorTheme};
`;

export const GetStartLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.theme.colors.gold};
  }

  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;

  border-radius: 12px;
  padding: 16px 80px;
  width: 267px;
  height: 60px;

  background-color: ${(props) => props.theme.colorTheme};
`;

export const PicContainer = styled.div`
  position: relative;
  width: 568px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colorTheme};
  overflow: hidden;
`;

export const PicWomanContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PicComputerContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: -26%;
  left: 50%;
  transform: translateX(-50%);
  width: 391px;
`;

export const BenefitsSection = styled.div`
  width: 1312px;
`;

export const BenefitsContainer = styled.div`
  display: flex;
  border: 1.5px dashed ${(props) => props.theme.colorTheme};
  border-radius: 30px;
  height: 116px;
  padding: 0 60px;
`;

export const BenefitsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BenefitsItem = styled.li`
  display: flex;
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.02em;
`;

export const BenefitsItemTitle = styled.p`
  margin-right: 16px;
`;

export const BenefitsItemText = styled.p`
  max-width: 90px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
`;

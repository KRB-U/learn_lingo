import styled from "styled-components";

export const TeacherItem = styled.li`
  display: flex;
  border: 1px solid ${(props) => props.theme.theme.colors.grayText};
  border-radius: 24px;
  padding: 24px;
  background-color: ${(props) => props.theme.theme.colors.white};
  margin-bottom: 40px;
`;

export const AvatartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;

  border: 3px solid ${(props) => props.theme.colorTheme.basic};
  border-radius: 100px;

  padding: 5px;

  margin-right: 32px;
`;

export const AvatarImg = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 100px;
  object-fit: cover;
`;

export const StatusIcon = styled.svg`
  position: absolute;
  top: 17px;
  right: 20px;

  width: 12px;
  height: 12px;
`;

export const HeaderCardTeacherContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Languages = styled.p`
  margin-right: auto;
  line-height: 1.5;
  color: ${(props) => props.theme.theme.colors.grayText};
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 64px;
`;

export const Divider = styled.div`
  border-radius: 1px;
  height: 16px;
  border: 1px solid rgba(18, 20, 23, 0.2);
`;

export const InfoText = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;
  color: ${(props) => props.theme.theme.colors.blackText};
`;

// export const IconContainer = styled.span``;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: none;

  stroke: #121417;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const LessonsDone = styled.p`
  line-height: 1.5;
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
`;

export const RatingIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: #ffc531;
  stroke: #ffc531;
  stroke-width: 1.2;
`;

export const PricePerHour = styled.p`
  line-height: 1.5;
`;

export const PricePerHourValue = styled.span`
  line-height: 1.5;
  color: ${(props) => props.theme.theme.colors.pricePerHour};
`;

export const HeartButton = styled.button`
  background-color: transparent;
  width: 26px;
  height: 26px;
  fill: none;
  cursor: pointer;
`;

export const HeartIcon = styled.svg`
  width: 26px;
  height: 26px;

  fill: ${({ $isFavorite, theme }) =>
    $isFavorite ? theme.colorTheme.basic : "transparent"};
  stroke: ${({ $isFavorite, theme }) =>
    $isFavorite ? theme.colorTheme.basic : theme.theme.colors.blackText};

  stroke-width: ${({ $isFavorite }) => ($isFavorite ? "2" : "2")};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const TeacherTitle = styled.h3`
  font-size: 24px;
  line-height: 1;
  margin-bottom: 32px;
`;

export const AboutTeacherList = styled.ul``;

export const AboutTeacher = styled.li`
  display: flex;
  margin-bottom: 8px;
`;

export const AboutLessonTitle = styled.p`
  line-height: 1.5;
  color: ${(props) => props.theme.theme.colors.grayText};
`;

export const UnderlinedContainer = styled.div`
  display: flex;
  text-decoration: underline;
`;

export const AboutLessonValue = styled.p`
  line-height: 1.5;
`;

export const TeacherExperience = styled.p`
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const ReadMoreBtn = styled.button`
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  cursor: pointer;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const ReviewList = styled.ul`
  margin-bottom: 32px;
`;

export const ReviewItem = styled.li`
  margin-bottom: 32px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const AvatarReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(to bottom right, #f2f2f2, #e6e6e6);
  margin-right: 12px;
`;

export const ReviewTitle = styled.h3`
  line-height: 1.5;
  color: ${(props) => props.theme.theme.colors.grayText};
`;

export const ReviewRatingIconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const ReviewRatingIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;

  fill: #ffc531;
  stroke: #ffc531;
  stroke-width: 1.2;
`;

export const ReviewRatingValue = styled.p`
  font-size: 14px;
  line-height: 1.29;
`;

export const ReviewComment = styled.p`
  line-height: 1.5;
`;

export const LevelingList = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;

export const LevelingItem = styled.li`
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 8px 12px;

  cursor: pointer;
  background-color: ${(props) => props.theme.colorTheme.basic};

  width: auto;
  height: 32px;

  &:hover {
    background-color: ${(props) => props.theme.colorTheme.light};
  }
`;

export const LevelingText = styled.p`
  font-size: 14px;
  line-height: 1.14;
`;

export const BookTrialLessonBtn = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;

  cursor: pointer;

  background-color: ${(props) => props.theme.colorTheme.basic};

  border-radius: 12px;
  padding: 16px 40px;
  width: 232px;

  &:hover {
    background-color: ${(props) => props.theme.colorTheme.light};
  }
`;

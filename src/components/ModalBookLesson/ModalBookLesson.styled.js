import { Field } from "formik";
import styled from "styled-components";

export const TitleBookLesson = styled.h2`
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const DescriptBookLesson = styled.p`
  font-weight: 400;
  line-height: 1.37;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 20px;
`;

export const TeachecContaienr = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const AvatarModalImg = styled.img`
  width: 44px;
  border-radius: 100px;
  object-fit: cover;
`;

export const TeacherNameTitleModal = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: ${(props) => props.theme.theme.colors.grayText};
  margin-bottom: 6px;
`;

export const TeacherNameModal = styled.p``;

export const ReasonTitle = styled.h3`
  font-size: 24px;
  line-height: 1.33;
  margin-bottom: 20px;
`;

export const RadioBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-bottom: 40px;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
`;

export const RadioField = styled(Field)`
  font-weight: 400;
  line-height: 1.37;
  text-align: center;
  margin-right: 8px;

  cursor: pointer;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-bottom: 40px;
`;

export const InputField = styled(Field)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  width: 100%;
  height: 54px;
`;

export const InputPasswordWrapper = styled.div`
  position: relative;
`;

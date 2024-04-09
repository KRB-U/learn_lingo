import { Field } from "formik";
import styled from "styled-components";

export const TitleReg = styled.h2`
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const DescriptReg = styled.p`
  font-weight: 400;
  line-height: 1.37;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 40px;
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

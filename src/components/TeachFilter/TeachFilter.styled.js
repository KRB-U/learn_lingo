// import { Field } from "formik";

import styled from "styled-components";

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const FieldLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FieldName = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.29;
  color: ${(props) => props.theme.theme.colors.grayText};
`;

export const TeachField = styled.select`
  /* border: none; */
  border: 1px solid #8a8a89;
  border-radius: 14px;

  font-size: 14px;
  background-color: ${(props) => props.theme.theme.colors.white};
  color: #333;

  cursor: pointer;

  padding: 8px 12px;
  overflow-y: auto;

  width: 221px;
  height: 48px;
`;

export const StyledOption = styled.option`
  color: red;
  cursor: pointer;
`;

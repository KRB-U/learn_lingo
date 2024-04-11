import { Formik, Form, Field } from "formik";

import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/TeachersSlice";

import {
  ContainerFilter,
  FieldLabel,
  FieldName,
  StyledOption,
  TeachField,
} from "./TeachFilter.styled";

import { ResetBtn } from "../Buttons/ResetBtn/ResetBtn";
import { SubmitFilterBtn } from "../Buttons/SubmitFilterBtn.js/SubmitFilterBtn";

import { languages, levels } from "./FilterValues";
import { toast } from "react-toastify";

function TeachFilter() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        languages: "",
        level: "",
        price: "",
      }}
      onSubmit={(values) => {
        dispatch(changeFilter(values));
        toast.success("done");
      }}
    >
      <ContainerFilter>
        <Form>
          <div style={{ display: "flex", gap: "20px", alignItems: "end" }}>
            <FieldLabel htmlFor="languages">
              <FieldName>Languages</FieldName>
              <Field as={TeachField} name="languages" id="languages">
                <option
                  value=""
                  style={{
                    cursor: "pointer",
                  }}
                ></option>
                {languages.map((lang) => (
                  <StyledOption
                    key={lang}
                    value={lang}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {lang}
                  </StyledOption>
                ))}
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="level">
              <FieldName>Level of knowledge</FieldName>
              <Field as={TeachField} name="level" id="level">
                <option value=""></option>

                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="price">
              <FieldName>Price</FieldName>
              <Field as={TeachField} name="price" id="price">
                <option value=""></option>

                {Array.from({ length: 11 }, (_, index) => {
                  const value = 20 + index * 2;
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                })}
              </Field>
            </FieldLabel>
            <SubmitFilterBtn />
            <ResetBtn />
          </div>
        </Form>
      </ContainerFilter>
    </Formik>
  );
}

export { TeachFilter };

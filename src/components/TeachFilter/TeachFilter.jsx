import { Formik, Form, Field } from "formik";

import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/TeachersSlice";

import { ContainerFilter, FieldLabel, FieldName } from "./TeachFilter.styled";

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
              <Field
                as="select"
                name="languages"
                id="languages"
                style={{
                  border: "1px solid #8a8a89",
                  borderRadius: "14px",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                  color: "#333",
                  cursor: "pointer",
                  padding: "8px 12px",
                  overflowY: "auto",
                  width: "221px",
                  height: "48px",
                }}
              >
                <option value=""></option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="level">
              <FieldName>Level of knowledge</FieldName>
              <Field
                as="select"
                name="level"
                id="level"
                style={{
                  border: "1px solid #8a8a89",
                  borderRadius: "14px",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                  color: "#333",
                  cursor: "pointer",
                  padding: "8px 12px",
                  overflowY: "auto",
                  width: "221px",
                  height: "48px",
                }}
              >
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
              <Field
                as="select"
                name="price"
                id="price"
                style={{
                  border: "1px solid #8a8a89",
                  borderRadius: "14px",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                  color: "#333",
                  cursor: "pointer",
                  padding: "8px 12px",
                  overflowY: "auto",
                  width: "221px",
                  height: "48px",
                }}
              >
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

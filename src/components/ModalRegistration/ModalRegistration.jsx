import Modal from "react-modal";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ClsBtn } from "../Buttons/ClsBtn/ClsBtn";
import {
  DescriptReg,
  FieldWrapper,
  InputField,
  InputPasswordWrapper,
  TitleReg,
} from "./ModalRegistration.styled";
import { AuthBtn } from "../Buttons/AuthBtn/AuthBtn";
import EyeOff from "../Buttons/EyeOffBtn/EyeOffBtn";
import { useState } from "react";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

Modal.setAppElement("#root");

Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },

  content: {
    maxWidth: "565px",
    padding: "64px",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    background: "#fff",
    borderRadius: "30px",
    overflow: "hidden",
    WebkitOverflowScrolling: "touch",
    outline: "none",
  },
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characsters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
});

const ModalRegistration = ({ isOpen, closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
        <ClsBtn onClick={closeModal} type="button"></ClsBtn>
        <div>
          <TitleReg>Registration</TitleReg>
          <DescriptReg>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </DescriptReg>

          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={({ name, email, password }) => {
              dispatch(register({ name, email, password }));
            }}
          >
            <Form>
              <FieldWrapper>
                <InputField
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoFocus
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => {
                    toast.error(msg);
                  }}
                />
                <InputField name="email" type="email" placeholder="Email" />
                <ErrorMessage
                  name="email"
                  render={(msg) => {
                    toast.error(msg);
                  }}
                />
                <InputPasswordWrapper>
                  <InputField
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    render={(msg) => {
                      toast.error(msg);
                    }}
                  />
                  <EyeOff
                    onClick={handleTogglePassword}
                    showPassword={showPassword}
                  />
                </InputPasswordWrapper>
              </FieldWrapper>

              <AuthBtn buttonText="Sign Up" />
            </Form>
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default ModalRegistration;

import Modal from "react-modal";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ClsBtn } from "../Buttons/ClsBtn/ClsBtn";
import { AuthBtn } from "../Buttons/AuthBtn/AuthBtn";
import {
  DescriptLogIn,
  FieldWrapper,
  InputField,
  InputPasswordWrapper,
  TitleLogIn,
} from "./ModalLogIn.styled";
import { useState } from "react";
import EyeOff from "../Buttons/EyeOffBtn/EyeOffBtn";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

Modal.setAppElement("#modal");

Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    zIndex: 10,
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
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
});

const ModalLogIn = ({ isOpen, closeModal }) => {
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
          <TitleLogIn>Log In</TitleLogIn>
          <DescriptLogIn>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </DescriptLogIn>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={({ email, password }) => {
              dispatch(logIn({ email, password }));
            }}
          >
            <Form>
              <FieldWrapper>
                <InputField
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoFocus
                />
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
                  <EyeOff
                    onClick={handleTogglePassword}
                    showPassword={showPassword}
                  />
                </InputPasswordWrapper>

                <ErrorMessage
                  name="password"
                  render={(msg) => {
                    toast.error(msg);
                  }}
                />
              </FieldWrapper>
              <AuthBtn buttonText="Log In"></AuthBtn>
            </Form>
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default ModalLogIn;

import Modal from "react-modal";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { ClsBtn } from "../Buttons/ClsBtn/ClsBtn";
import * as s from "./ModalBookLesson.styled";
import { AuthBtn } from "../Buttons/AuthBtn/AuthBtn";
import { writeBookedLesson } from "../../firebase/booked";

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
    maxWidth: "599px",
    padding: "64px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    background: "#fff",
    borderRadius: "30px",
    overflow: "hidden",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
  },
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characsters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
});
const ModalBookLesson = ({ isOpen, closeModal, teacher }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
        <ClsBtn onClick={closeModal} type="button"></ClsBtn>

        <s.TitleBookLesson>Book trial lesson</s.TitleBookLesson>
        <s.DescriptBookLesson>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </s.DescriptBookLesson>
        <s.TeachecContaienr>
          <div style={{ marginRight: "14px" }}>
            <s.AvatarModalImg src={teacher.avatar_url} alt={teacher.name} />
          </div>
          <div>
            <s.TeacherNameTitleModal>Your teacher</s.TeacherNameTitleModal>
            <s.TeacherNameModal>
              {teacher.name}&nbsp;{teacher.surname}
            </s.TeacherNameModal>
          </div>
        </s.TeachecContaienr>

        <s.ReasonTitle>
          What is your main reason for learning English?
        </s.ReasonTitle>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            picked: "career",
            teacher: teacher,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            writeBookedLesson(values);
            console.log(values);
          }}
        >
          <Form>
            <s.RadioBtnWrapper>
              <s.RadioLabel>
                <s.RadioField
                  type="radio"
                  name="picked"
                  value="career"
                  checked
                />
                Career and business
              </s.RadioLabel>
              <s.RadioLabel>
                <s.RadioField type="radio" name="picked" value="kids" />
                Lesson for kids
              </s.RadioLabel>
              <s.RadioLabel>
                <s.RadioField type="radio" name="picked" value="abroad" />
                Living abroad
              </s.RadioLabel>
              <s.RadioLabel>
                <s.RadioField type="radio" name="picked" value="exams" />
                Exams and coursework
              </s.RadioLabel>
              <s.RadioLabel>
                <s.RadioField type="radio" name="picked" value="hobby" />
                Culture, travel or hobby
              </s.RadioLabel>
            </s.RadioBtnWrapper>
            <s.FieldWrapper>
              <s.InputField name="name" type="text" placeholder="Full Name" />
              <ErrorMessage
                name="name"
                render={(msg) => {
                  toast.error(msg);
                }}
              />
              <s.InputField name="email" type="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                render={(msg) => {
                  toast.error(msg);
                }}
              />
              <s.InputField
                name="phone"
                type="phone"
                placeholder="Phone number"
              />
              <ErrorMessage
                name="phone"
                render={(msg) => {
                  toast.error(msg);
                }}
              />
            </s.FieldWrapper>
            <AuthBtn buttonText="Book"></AuthBtn>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default ModalBookLesson;

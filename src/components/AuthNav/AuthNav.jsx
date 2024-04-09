import { useState } from "react";
import {
  AutContainer,
  LogInLink,
  LogInText,
  RegLink,
  RegText,
  StyledIcon,
} from "../Header/Header.styled";
import ModalLogIn from "../ModalLogIn/ModalLogIn";
import ModalRegistration from "../ModalRegistration/ModalRegistration";

export const AuthNav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  return (
    <>
      <AutContainer>
        <LogInLink type="button" onClick={() => setShowLoginModal(true)}>
          <StyledIcon>
            <use href="./images/icons.svg#log-in"></use>
          </StyledIcon>

          <LogInText>Log in</LogInText>
        </LogInLink>
        {showLoginModal && (
          <ModalLogIn
            isOpen={showLoginModal}
            closeModal={() => setShowLoginModal(false)}
          />
        )}

        <RegLink type="button" onClick={() => setShowRegistrationModal(true)}>
          <RegText>Registration</RegText>
        </RegLink>
        {showRegistrationModal && (
          <ModalRegistration
            isOpen={showRegistrationModal}
            closeModal={() => setShowRegistrationModal(false)}
          />
        )}
      </AutContainer>
    </>
  );
};

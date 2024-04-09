import { AuthorizationButton } from "./AuthBtn.styled";

function AuthBtn({ buttonText }) {
  return <AuthorizationButton type="submit">{buttonText}</AuthorizationButton>;
}

export { AuthBtn };

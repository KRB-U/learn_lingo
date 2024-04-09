import { CloseButtonIcon, CloseButtonStld } from "./ClsBtn.styled";

function ClsBtn({ onClick }) {
  return (
    <CloseButtonStld onClick={onClick} type="button">
      <CloseButtonIcon>
        <path d="M24 8L8 24" />
        <path d="M8 8L24 24" />
      </CloseButtonIcon>
    </CloseButtonStld>
  );
}

export { ClsBtn };

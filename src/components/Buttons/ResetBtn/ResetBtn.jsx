import { useFormikContext } from "formik";
import { ResetButton } from "./ResetBtn.styled";
import { toast } from "react-toastify";

function ResetBtn() {
  const { resetForm } = useFormikContext();

  const handleReset = () => {
    resetForm();
    toast.success("cleared");
  };

  return (
    <ResetButton type="button" onClick={handleReset}>
      Reset
    </ResetButton>
  );
}
export { ResetBtn };

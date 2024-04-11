import { useFormikContext } from "formik";
import { ResetButton } from "./ResetBtn.styled";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../../redux/TeachersSlice";

function ResetBtn() {
  const dispatch = useDispatch();

  const { resetForm } = useFormikContext();

  const handleReset = () => {
    resetForm();
    dispatch(resetFilter);
    window.location.reload();
    toast.success("cleared");
  };

  return (
    <ResetButton type="button" onClick={handleReset}>
      Reset
    </ResetButton>
  );
}
export { ResetBtn };

import { getDatabase, ref, push } from "firebase/database";
import { toast } from "react-toastify";
import { appFireBase } from "./firebase";

const db = getDatabase(appFireBase);

export const writeBookedLesson = async (data) => {
  try {
    const bookedRef = ref(db, "/api/booked/");

    push(bookedRef, data);

    toast.success("booked");
  } catch (error) {
    toast.error(error.message);
    throw new Error(error.message);
  }
};

import {
  getDatabase,
  ref,
  query,
  orderByKey,
  get,
  limitToFirst,
} from "firebase/database";
import { appFireBase } from "./firebase";
import {
  addAllTeachers,
  addTeachers,
  changeLoadMoreBtn,
} from "../redux/TeachersSlice";

const db = getDatabase(appFireBase);

export const fetchTeachers = async (dispatch, amountCard) => {
  try {
    const teachersRef = ref(db, "/api/teachers");

    let configQ = query(teachersRef, orderByKey(), limitToFirst(amountCard));

    const snapshot = await get(configQ);

    if (snapshot.exists()) {
      const teachersData = Object?.values(snapshot.val());
      dispatch(addTeachers(teachersData));
      dispatch(changeLoadMoreBtn(true));

      if (teachersData.length < amountCard) {
        dispatch(changeLoadMoreBtn(false));
      }
    }
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const fetchAllTeachers = async (dispatch) => {
  try {
    const teachersRef = ref(db, "/api/teachers");
    const snapshot = await get(teachersRef);

    if (snapshot.exists()) {
      const teachersData = Object?.values(snapshot.val());
      dispatch(addAllTeachers(teachersData));
    }
  } catch (error) {
    console.error("Loading error", error.message);
  }
};

// **************
// export const filterTeachers = async (dispatch, filters) => {
//   const { price, level, language } = filters;

//   try {
//     let databaseRef = ref(db, "/api/teachers");

//     onValue(
//       databaseRef,
//       (snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//           const teacher = childSnapshot.val();
//           console.log(teacher);
//           if (
//             (!price || teacher.price_per_hour <= price) &&
//             (!level || teacher.levels.includes(level)) &&
//             (!language || teacher.languages.includes(language))
//           ) {
//             console.log(teacher);
//           }
//         });
//       },
//       {
//         onlyOnce: true,
//       }
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };

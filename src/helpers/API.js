import axios from "axios";

axios.defaults.baseURL =
  "https://learnlingo-664f7-default-rtdb.europe-west1.firebasedatabase.app";
// axios.defaults.params = {
//   page: 1,
//   limit: 12,
// };

// export const fetchTeachers = async () => {
//   try {
//     const response = await axios.get("/api/teachers.json");
//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

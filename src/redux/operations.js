// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchTeachers } from "../helpers/API";
// import { getNextTeachers } from "../firebase/getTeachers";

// export const getLoadMoreTeachers = createAsyncThunk(
//   "teachers/getAllTeachers",
//   async (credential, thunkAPI) => {
//     try {
//       // const response = await fetchTeachers();
//       const response = await getNextTeachers(credential);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

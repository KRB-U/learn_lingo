import { createSlice } from "@reduxjs/toolkit";

export const teacherSlice = createSlice({
  name: "teachers",
  initialState: {
    allTeachers: [],
    teachers: [],
    favorite: [],
    filter: {
      language: "",
      level: "",
      price: "",
    },

    isLoadMore: false,
    error: null,
  },

  reducers: {
    changeLoadMoreBtn: (state, action) => {
      state.isLoadMore = action.payload;
    },

    addAllTeachers: (state, action) => {
      state.allTeachers = action.payload;
    },

    addTeachers: (state, action) => {
      state.teachers = action.payload;
    },

    changeFilter: (state, action) => {
      state.filter = action.payload;
    },

    addFavoriteTeacher(state, action) {
      state.favorite = [...action.payload];
    },

    removeFavoriteTeacher(state, action) {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getLoadMoreTeachers.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(getLoadMoreTeachers.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.teachers = [...action.payload];
  //     })
  //     .addCase(getLoadMoreTeachers.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const teachersReduser = teacherSlice.reducer;
export const {
  changeLoadMoreBtn,
  addAllTeachers,
  addTeachers,
  changeFilter,
  addFavoriteTeacher,
  removeFavoriteTeacher,
} = teacherSlice.actions;

import { createSelector } from "@reduxjs/toolkit";

export const selectTeachers = (state) => state.teachers.teachers;
export const selectAllTeachers = (state) => state.teachers.allTeachers;

export const selectFilters = (state) => state.teachers.filter;

export const selectFavorite = (state) => state.teachers.favorite;

export const selectorLoading = (state) => state.teachers.isLoading;
export const selectorLoadMore = (state) => state.teachers.isLoadMore;

export const selectorError = (state) => state.teachers.error;

export const selectVisibleTeach = createSelector(
  [selectAllTeachers, selectFilters],
  (teachers, { language, level, price }) => {
    const filteredTeachers = teachers.filter((teacher) => {
      // const { languages, levels, price_per_hour } = teacher;

      // const languageFilter = !language || teacher.languages.includes(language);
      // const levelFilter = !level || teacher.levels.includes(level);
      // const priceFilter = !price || teacher.price_per_hour <= price;
      // return languageFilter && levelFilter && priceFilter;

      const filtersArray = [];

      if (language) {
        filtersArray.push(teacher.languages.includes(language));
      }

      if (level) {
        filtersArray.push(teacher.levels.includes(level));
      }

      if (price) {
        filtersArray.push(teacher.price_per_hour <= price);
      }

      return filtersArray.every((filter) => filter);
    });

    return filteredTeachers;
  }
);

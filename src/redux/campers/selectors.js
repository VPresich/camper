import { createSelector } from "reselect";
export const selectFavorites = (state) => state.campers.favorites;

const selectCampersState = (state) => state.campers;

export const selectCampers = (state) => state.campers.items;

export const selectCurrentPage = createSelector(
  selectCampersState,
  (campers) => campers.currentPage
);

export const selectItemsPerPage = createSelector(
  selectCampersState,
  (campers) => campers.itemsPerPage
);

export const selectTotalItems = createSelector(
  selectCampersState,
  (campers) => campers.totalItems
);

export const selectIsLoading = createSelector(
  selectCampersState,
  (campers) => campers.isLoading
);

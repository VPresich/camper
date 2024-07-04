import { createSelector } from "reselect";
const selectCampersState = (state) => state.campers;
export const selectFavorites = (state) => state.campers.favorites;
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

export const selectCamperById = createSelector(
  [selectCampers, (state, camperId) => camperId],
  (campers, camperId) => campers.find((camper) => camper.id === camperId)
);

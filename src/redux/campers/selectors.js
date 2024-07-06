import { createSelector } from "reselect";
import { selectQueryParams } from "../filters/selectors";

const selectCampersState = (state) => state.campers;
// export const selectFavorites = (state) => state.campers.favorites;
// export const selectCampers = (state) => state.campers.items;

export const selectCampers = createSelector(
  selectCampersState,
  (campers) => campers.items
);

export const selectFavorites = createSelector(
  selectCampersState,
  (campers) => campers.favorites
);

const selectCampersNumber = createSelector(
  selectCampers,
  (items) => items.length
);

const selectTotalItems = createSelector(
  selectCampersState,
  (campers) => campers.totalItems
);

export const selectIsMore = createSelector(
  [selectCampersNumber, selectTotalItems],
  (campersNum, campersMax) => campersNum < campersMax
);

export const selectCurrentPage = createSelector(
  selectCampersState,
  (campers) => campers.currentPage
);

export const selectItemsPerPage = createSelector(
  selectCampersState,
  (campers) => campers.itemsPerPage
);

export const selectIsLoading = createSelector(
  selectCampersState,
  (campers) => campers.isLoading
);

export const selectCamperById = createSelector(
  [selectCampers, (state, camperId) => camperId],
  (campers, camperId) => campers.find((camper) => camper.id === camperId)
);

export const selectCampersByForm = createSelector(
  [selectCampers, selectQueryParams],
  (campers, params) => {
    if (!campers || campers.length === 0) return [];
    if (!params || Object.keys(params).length === 0) return campers;

    if (!params.from) return campers;

    return campers.filter((camper) =>
      camper.form.toLowerCase().includes(params.from.toLowerCase())
    );
  }
);

export const selectCampersByLocation = createSelector(
  [selectCampersByForm, selectQueryParams],
  (campers, params) => {
    if (!campers || campers.length === 0) return [];
    if (!params || Object.keys(params).length === 0) return campers;

    if (!params.location) return campers;

    return campers.filter((camper) =>
      camper.location.toLowerCase().includes(params.location.toLowerCase())
    );
  }
);

export const selectCampersByDetails = createSelector(
  [selectCampersByLocation, selectQueryParams],
  (campers, params) => {
    if (!campers || campers.length === 0) return [];
    if (!params || Object.keys(params).length === 0) return campers;
    const paramsKeys = Object.keys(params);

    console.log("HELP", paramsKeys);
    const detailsKeys = paramsKeys.filter(
      (key) => key !== "location" && key !== "form"
    );
    console.log("HELP", detailsKeys);

    if (!detailsKeys || detailsKeys.length === 0) return campers;

    return campers.filter((camper) => {
      for (const key of detailsKeys) {
        const result = true;

        if (typeof params[key] === "string") {
          if (!camper[key]) return false;
          if (camper[key].toLowerCase() !== params[key].toLowerCase()) {
            console.log("NO", params[key]);
            return false;
          }
        } else if (typeof params[key] === "number") {
          if (!camper.details[key] || camper.details[key] < 1) {
            console.log("NO", params[key]);
            return false;
          }
        }
        return result;
      }
    });
  }
);

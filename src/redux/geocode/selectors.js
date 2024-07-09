import { createSelector } from "reselect";

const selectGeoState = (state) => state.geocode;

export const selectGeoCoords = createSelector(
  selectGeoState,
  (geoState) => geoState.coordinates
);

export const selectIsLoading = createSelector(
  selectGeoState,
  (geoState) => geoState.isLoading
);

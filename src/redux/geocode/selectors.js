export const selectGeoState = (state) => state.geocode;
export const selectGeoCoords = (state) => state.geocode.coordinates;
export const selectIsLoading = (state) => state.geocode.isLoading;
export const selectCity = (state) => state.geocode.city;

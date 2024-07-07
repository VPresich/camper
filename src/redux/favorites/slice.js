// import { fetchFavorites } from "../favorites/operations";
// import { createSlice } from "@reduxjs/toolkit";

// const favoritesSlice = createSlice({
//   name: "favorites",
//   initialState: {
//     favoriteCampers: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchFavorites.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchFavorites.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.favoriteCampers = action.payload;
//       })
//       .addCase(fetchFavorites.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default favoritesSlice.reducer;

//for saving list of favorits in store.

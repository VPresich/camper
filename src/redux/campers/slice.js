import { createSlice } from "@reduxjs/toolkit";
import { getCampersPerPage, getCamperById } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorites: [],
    currentPage: 1,
    totalItems: 13,
    itemsPerPage: 4,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    addToFavorites: (state, action) => {
      const camperId = action.payload;
      if (!state.favorites.includes(camperId)) {
        state.favorites.push(camperId);
      }
    },

    removeFromFavorites: (state, action) => {
      const camperId = action.payload;
      state.favorites = state.favorites.filter((id) => id !== camperId);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCampersPerPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCampersPerPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.items = action.payload.items;
        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.items];
        else {
          state.items = action.payload.items;
        }
      })
      .addCase(getCampersPerPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log("action.payload", action.payload);
        const existingIndex = state.items.findIndex(
          (camper) => camper.id === action.payload.id
        );

        if (existingIndex !== -1) {
          state.items[existingIndex] = action.payload;
        } else {
          state.items.push(action.payload);
        }
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addToFavorites, removeFromFavorites, setPage } =
  campersSlice.actions;
export default campersSlice.reducer;

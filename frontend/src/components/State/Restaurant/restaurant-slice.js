import { createSlice } from '@reduxjs/toolkit';
import { getAllRestaurantAction } from './restaurant-operation'; 

const initialState = {
    isLoading: false,
    restaurants: [],
    error: null,
};

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllRestaurantAction.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllRestaurantAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.restaurants = action.payload;
            })
            .addCase(getAllRestaurantAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getRestaurantById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getRestaurantById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.restaurant = action.payload;
            })
            .addCase(getRestaurantById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getRestaurantByUserId.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getRestaurantByUserId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.restaurantByUser = action.payload;
            })
            .addCase(getRestaurantByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default restaurantsSlice.reducer;

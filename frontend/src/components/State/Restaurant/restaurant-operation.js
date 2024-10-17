import { api } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS } from "./actionType";

// export const getAllRestaurantAction = (token) => {
//     return async (dispatch) => {
//         dispatch({ type: GET_ALL_RESTAURANT_REQUEST });
//         try {
//             const { data } = await api.get("/api/restaurants", {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             dispatch({ GET_ALL_RESTAURANT_SUCCESS, payload: data });
//             console.log('all restaurant', data)
//         } catch (error) {
//             dispatch({ GET_ALL_RESTAURANT_FAILURE, payload: error })
//         }
//     };
// };





export const getAllRestaurantAction = createAsyncThunk(
    'restaurants/getAll',
    async (token, { rejectWithValue }) => {
        try {
            const { data } = await api.get("/api/restaurants", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('all restaurant', data);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
import { api } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS } from "./actionType";

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


// export const getRestaurantById = (reqData) => {
//     return async (dispatch) => {
//         dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST })
//         try {
//             const response = await api.get(`api/restaurants/${reqData, restaurantId}`, {
//                 headers: {
//                     Authorization: `Bearer ${reqData.jwt}`,
//                 },
//             });
//             dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data })
//             console.log('get restaurant by id', response.data)
//         } catch (error) {
//             dispatch({type: GET_RESTAURANT_BY_ID_FAILURE, payload: error})
//         }
//     }
// }


// export const getRestaurantByUserId = (jwt) => {
//     return async (dispatch) => {
//         dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
//         try { 
//             const { data } = await api.get(`/api/admin/restaurants/user`, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//                 dispatch({type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data})
//         } catch (error) {
//             console.log("get restaurant by user id", data);
//             dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error.message });
//         }
//     }
// }






export const getAllRestaurantAction = createAsyncThunk(
    'restaurants/getAll',
    async (token, { rejectWithValue }) => {
        try {
            const { data } = await api.get("api/restaurants", {
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


export const getRestaurantById = createAsyncThunk(
    'restaurants/getById',
    async (reqData, { rejectWithValue }) => {
        try {
            const response = await api.get(`api/restaurants/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            console.log('get restaurant by id', response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


// 
export const getRestaurantByUserId = createAsyncThunk(
    'restaurants/getByUserId',
    async (jwt, { rejectWithValue }) => {
        try {
            const { data } = await api.get(`/api/admin/restaurants/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("get restaurant by user id", data);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    });

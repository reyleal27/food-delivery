// import { isPresentInFavorites } from "../../services/logic";
// import {
//   ADD_TO_FAVORITE_REQUEST,
//   ADD_TO_FAVORITE_FAILURE,
//   ADD_TO_FAVORITE_SUCCESS,
//   REGISTER_REQUEST,
//   REGISTER_SUCCESS,
//   REGISTER_FAILURE,
//   GET_USER_FAILURE,
//   GET_USER_SUCCESS,
//   GET_USER_REQUEST,
//   LOGIN_FAILURE,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGOUT,
// } from "./ActionType";

// const initialState = {
//   user: null,
//   isLoading: false,
//   error: null,
//   jwt: null,
//   favorites: [],
//   success: null,
//   isLogin: false,
// };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case REGISTER_REQUEST:
//     case LOGIN_REQUEST:
//     case GET_USER_REQUEST:
//     case ADD_TO_FAVORITE_REQUEST:
//       return { ...state, isLoading: true, error: null, success: null };

//     case REGISTER_SUCCESS:
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         jwt: action.payload,
//         success: "Register Success",
//         isLogin: true,
//       };

//     case ADD_TO_FAVORITE_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         error: null,
//         favorites: isPresentInFavorites(state.favorites, action.payload)
//           ? state.favorites.filter((item) => item.id !== action.payload.id)
//           : [action.payload, ...state.favorites],
//       };

//     case REGISTER_FAILURE:
//     case LOGIN_FAILURE:
//     case GET_USER_FAILURE:
//     case ADD_TO_FAVORITE_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//         success: null,
//       };

//     default:
//       return state;
//   }
// };


import { createSlice } from '@reduxjs/toolkit';
import { registerUser,getUser, loginUser, logout, addToFavorite} from './Action';
import { isPresentInFavorites } from '../../services/logic';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
  favorites: [],
  success: null,
  isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoading = false;
                state.jwt = action.payload.jwt;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
                state.isLogin = true;
            
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isLogin = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoading = false;
                state.jwt = action.payload.jwt;
                state.isLogin = true
               
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isLogin = false;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                return initialState;
            }) 
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addToFavorite.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addToFavorite.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
                state.jwt = action.payload;
                state.isLogin = true;
                state.error = null;
                favorites = isPresentInFavorites(state.favorites, action.payload) ? 
                    state.favorites.filter((item) => item.id !== action.payload.id) : 
[action.payload, ...state.favorites]
//         isLoading: false,
//         error: null,
//         favorites: isPresentInFavorites(state.favorites, action.payload)
//           ? state.favorites.filter((item) => item.id !== action.payload.id)
//           : [action.payload, ...state.favorites],
            })
            .addCase(addToFavorite.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isLogin = false;
            })
    }
});

export default authSlice.reducer;

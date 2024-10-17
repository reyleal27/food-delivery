import axios from "axios";
import {
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";
import { api, API_URL } from "../../services/api";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const registerUser = createAsyncThunk('auth/registerUser',
//     async (dispatch,reqData) => {
//         dispatch({ type: REGISTER_REQUEST })
//         try {
//             const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData)
//             console.log('data', data)
//             if (data.jwt) localStorage.setItem("jwt", data.jwt);

//             if (data.role === "ROLE_RESTAURANT_OWNER") {
//                 reqData.navigate("/admin/restaurant")
//             } else {
//                 reqData.navigate('/')
//             }
//             dispatch({ type: REGISTER_SUCCESS, payload: data.jwt })
//             console.log("register success",data)
//         } catch (error) {
//             dispatch({type: REGISTER_FAILURE, payload:error})
//             toast.error(`Sorry registration failed. Try again`)
//         }
//     }
// );

// export const registerUser = (reqData) => {
//     return async (dispatch) => {
//         dispatch({ type: REGISTER_REQUEST });
//         try {
//             const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
//             console.log('data', data);
//             if (data.jwt) localStorage.setItem("jwt", data.jwt);

//             if (data.role === "ROLE_RESTAURANT_OWNER") {
//                 reqData.navigate("/admin/restaurant");
//             } else {
//                 reqData.navigate('/');
//             }
//             dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
//             console.log("register success", data);
//         } catch (error) {
//             dispatch({ type: REGISTER_FAILURE, payload: error });
//             toast.error(`Sorry registration failed. Try again`);
//         }
//     };
// // };

// export const loginUser = (reqData) => {
//     async (dispatch, { rejectWithValue }) => {
//         dispatch({ type: LOGIN_REQUEST })
//         try {
//             const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData)
//             if (data.jwt) localStorage.setItem("jwt", data.jwt);
//             if (data.role === "ROLE_RESTAURANT_OWNER") {
//                 reqData.navigate("/admin/restaurant")
//             } else {
//                 reqData.navigate('/')
//             }
//             dispatch({ type: LOGIN_SUCCESS, payload: data.jwt })
//             console.log("login success",data)
//         } catch (error) {
//             dispatch({type: LOGIN_FAILURE, payload:error})
//             toast.error(`Sorry login failed. Try again`)
//             return rejectWithValue(error.response.data.message || error.message);
//         }
//     }
// };

// export const getUser = (jwt) => {
//     async (dispatch, { rejectWithValue }) => {
//         dispatch({ type: GET_USER_REQUEST })
//         try {
//             const { data } = await api.get(`${API_URL}/auth/signin`, {
//                 headers: {
//                     Authorization:`Bearer ${jwt}`
//                 }
//             })
//             dispatch({ type: GET_USER_SUCCESS, payload: data });
//             console.log("user profile", data);
//         } catch (error) {
//             dispatch({type: GET_USER_FAILURE, payload:error})
//             toast.error(`Sorry login failed. Try again`)
//             return rejectWithValue(error.response.data.message || error.message);
//         }
//     }
// };

// export const addToFavorite = ({jwt, restaurantId}) => {
//     async (dispatch, { rejectWithValue }) => {
//         dispatch({ type: ADD_TO_FAVORITE_REQUEST })
//         try {
//             const { data } = await api.put(`/api/restaurant/${restaurantId}/add-favorite`, {},{
//                 headers: {
//                     Authorization:`Bearer ${jwt}`
//                 }
//             })
//             dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
//             console.log("added to favorite", data);
//         } catch (error) {
//             dispatch({type: ADD_TO_FAVORITE_FAILURE, payload:error})
//             toast.error(`Sorry adding to favorite failed. Try again`)
//             return rejectWithValue(error.response.data.message || error.message);
//         }
//     }
// };

// export const logout = () => {
//     async (dispatch, { rejectWithValue }) => {
//         dispatch({ type: LOGOUT })
//         try {
//             localStorage.clear();
//             dispatch({ type: LOGOUT, payload: data });
//             console.log("Logout successful")
//         } catch (error) {
//             toast.error(`Sorry failed to logout. Try again`)
//             return rejectWithValue(error.response.data.message || error.message);
//         }
//     }
// };

export const registerUser = createAsyncThunk(
  "auth/signup",
  async (reqData, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        `/auth/signup`,
        reqData.userData
      );
      console.log("register data", data);
      if (data.jwt) localStorage.setItem("jwt", data.jwt);

      if (data.role === "ROLE_RESTAURANT_OWNER") {
        reqData.navigate("admin/restaurant");
      } else {
        reqData.navigate("/");
      }
      return data.jwt;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (reqData, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        `/auth/login`,
        reqData.userData
      );
      console.log("login", data);
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      if (data.role === "ROLE_RESTAURANT_OWNER") {
        reqData.navigate("/admin/restaurant");
      } else {
        reqData.navigate("/");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "api/user/getUser",
  async (jwt, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/users/myprofile`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        }, 
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "api/users/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.clear();
      console.log("Logout success");
      return {}; // Return an empty object or whatever payload you deem necessary
    } catch (error) {
      toast.error(`Sorry, failed to logout. Try again.`);
      console.log("toast", toast);
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  "api/restaurants/addtofavorite",
  async ({ jwt, restaurantId }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(
        `/api/restaurant/${restaurantId}/add-favorites`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return data;
    } catch (error) {
      toast.error(`Failed to add favorite`);
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

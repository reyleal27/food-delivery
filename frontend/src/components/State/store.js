// import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
// import { authReducer } from "./Authentication/Reducer";
// import { thunk } from "redux-thunk";

// const rootReducer = combineReducers({
//     auth: authReducer,
// });

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { authReducer } from './Authentication/Reducer';
import authReducer from './Authentication/Reducer';
import { thunk } from 'redux-thunk';


// Create the Redux store with middleware

const rootReducer = combineReducers({
    auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// const store = createStore(rootReducer, applyMiddleware(thunk));
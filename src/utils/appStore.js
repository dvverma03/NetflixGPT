import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userslice";
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import idReducer from "./idSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        id:idReducer
    }
});

export default appStore;
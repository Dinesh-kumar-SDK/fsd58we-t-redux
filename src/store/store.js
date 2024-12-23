import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/counter";

const store = configureStore({
    reducer: {
        //only a reducer function can be used here
        countReducer,
    },
    devTools: true,
});

export default store;  